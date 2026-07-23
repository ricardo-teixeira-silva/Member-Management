import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getMembers } from "../services/attendance.services";

export function useAttendance() {
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  const membersQuery = useQuery({
    queryKey: ["members"],
    queryFn: getMembers,
  });

  const togglePresence = (id: number) => {
    setSelectedMembers((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const saveAttendance = () => {
    const presentMembers = (membersQuery.data ?? [])
      .filter((member) => selectedMembers.includes(member.id))
      .map((member) => ({
        name: member.name,
        position: member.position,
        photoUrl: member.photoUrl,
        sex: member.sex,
      }));

    console.log("Lista de presença:");
    alert(
      `Função em desenvolvimento, \n mas você selecionou: \n\n\n` +
        `total: ${presentMembers.length}  -----  ` +
        JSON.stringify({ presentMembers }),
    );
    console.log(presentMembers);
  };

  return {
    members: membersQuery.data ?? [],
    isLoadingMembers: membersQuery.isPending,

    selectedMembers,
    togglePresence,
    saveAttendance,
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
