import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../../services/members.services";

export function useMembers() {
  const membersQuery = useQuery({
    queryKey: ["members"],
    queryFn: getMembers,
  });

  return {
    members: membersQuery.data ?? [],
    isLoadingMembers: membersQuery.isPending,
  };
}

/*
SALVAR UMA IMAGEM:

import { supabase } from "@/lib/supabase";

async function uploadMemberPhoto(uri: string, fileName: string) {

  const response = await fetch(uri);

  const arrayBuffer = await response.arrayBuffer();


  const { data, error } = await supabase.storage
    .from("member-photos")
    .upload(
      `members/${fileName}.png`,
      arrayBuffer,
      {
        contentType: "image/png",
        upsert: true,
      }
    );


  if (error) {
    throw error;
  }


  return data.path;
}

O retorno será:

members/claudio.png
3. Criar o membro

Agora você faz o insert:

async function createMember() {

  const photoUri = await selectPhoto();


  let photoPath = null;


  if (photoUri) {
    photoPath = await uploadMemberPhoto(
      photoUri,
      "joao-silva"
    );
  }


  const { data, error } = await supabase
    .from("members")
    .insert({
      name: "João Silva",
      phone: "11999999999",
      photo_url: photoPath,
    })
    .select();


  if (error) {
    console.log(error);
    return;
  }


  console.log(data);
}


*/
