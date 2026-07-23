import { supabase } from "@/lib/supabase";
import { Member } from "../types/members";

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
