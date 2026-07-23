import { supabase } from "@/lib/supabase";
import { Member, RegisterFormData } from "../types/members";

export async function getMembers(): Promise<Member[]> {
  const { data, error } = await supabase.from("members").select("*");

  if (error) {
    throw error;
  }

  //return data;

  return data.map((member) => {
    const photoUrl = member.photo
      ? supabase.storage.from("member-photos").getPublicUrl(member.photo).data
          .publicUrl
      : "";

    return {
      ...member,
      photoUrl,
    };
  });
}

export async function createMember(data: RegisterFormData) {
  let photoFileName: string | null = null;

  if (data.photo) {
    const fileExt = data.photo.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `members/${Date.now()}.${fileExt}`;

    try {
      const response = await fetch(data.photo);
      if (!response.ok) {
        throw new Error("Não foi possível ler a imagem");
      }
      const arrayBuffer = await response.arrayBuffer();
      const { error: uploadError } = await supabase.storage
        .from("member-photos")
        .upload(fileName, arrayBuffer, {
          contentType: `image/${fileExt}`,
          upsert: false,
        });

      if (uploadError) {
        throw uploadError;
      }

      photoFileName = fileName;

      console.log("Foto enviada com sucesso:", fileName);
    } catch (err) {
      console.error("Erro no upload da foto:", err);
      throw err;
    }
  }

  const payload = {
    photo: photoFileName,
    name: data.name,
    church: data.church,
    position: data.position,
    sex: data.sexo,
    birthDate: data.birthDate?.toISOString() ?? null,
    baptismDate: data.baptismDate?.toISOString() ?? null,
    ordinationDate: data.ordinationDate?.toISOString() ?? null,
  };

  const { error } = await supabase.from("members").insert(payload);

  if (error) {
    throw error;
  }

  return payload;
}
