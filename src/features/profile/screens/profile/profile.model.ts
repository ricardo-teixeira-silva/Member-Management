import { useCurrentMember } from "@/shared/store/currentMember";
import { formatDate } from "@/shared/utils/functions/formatDate";
import { router } from "expo-router";

export const useProfileModel = () => {
  const member = useCurrentMember((state) => state.member);
  if (!member) {
    return {
      member: null,
    };
  }

  const header = {
    name: member.name,
    church: member.church,
    photo: member.photoUrl,
  };

  const infoRow = {
    label: "Cargo",
    value: member.position,
  };

  const infoGrid = {
    sex: member.sex,
    birthDate: formatDate(member.birthDate),
    baptismDate: formatDate(member.baptismDate),
    ordinationDate: formatDate(member.ordinationDate),
  };

  const navigateToCard = () => {
    router.push("/(stack)/membership-card");
  };

  return {
    member,
    header,
    infoRow,
    infoGrid,
    navigateToCard,
  };
};
