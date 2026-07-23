import { useCurrentMember } from "@/shared/store/currentMember";
import { router } from "expo-router";
import { useState } from "react";

export type MembershipData = {
  fullName: string;
  role: string;
  church: string;
  address: string;
  photoUrl?: string;
  birthDate: string;
  baptismDate: string;
  ordinationDate: string;
  congregation: string;
};

export const useMembershipModel = () => {
  const member = useCurrentMember((s) => s.member);
  const [isFlipped, setIsFlipped] = useState(false);

  const data: MembershipData = {
    fullName: member?.name ?? "NOME COMPLETO",
    role: member?.position ?? "CARGO / FUNÇÃO",
    church: member?.church ?? "Igreja Missionária Livre dos Apóstolos Livre dos",
    address: "Rua Fernando Pessoa, nº 462\nVila Santo Antônio - CEP 06422-175\nJandira - SP",
    photoUrl: member?.photoUrl,
    birthDate: "15/03/1985",
    baptismDate: "22/07/2005",
    ordinationDate: "10/12/2015",
    congregation: member?.church ?? "Sede - Jandira/SP",
  };

  const toggleFlip = () => setIsFlipped((prev) => !prev);
  const goBack = () => router.back();

  return { data, isFlipped, toggleFlip, goBack };
};
