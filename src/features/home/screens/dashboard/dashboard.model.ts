import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../services/members.services";

export type MembersByPosition = {
  Presbítero: number;
  Pastor: number;
  Diácono: number;
  Missionária: number;
};

export const useDashBoard = () => {
  const membersQuery = useQuery({
    queryKey: ["members"],
    queryFn: getMembers,
  });

  const members = membersQuery.data ?? [];
  const positionZero: MembersByPosition = {
    Presbítero: 0,
    Pastor: 0,
    Diácono: 0,
    Missionária: 0,
  };

  const membersByPosition = members.reduce<MembersByPosition>((acc, member) => {
    if (member.position in acc) {
      acc[member.position as keyof MembersByPosition] += 1;
    }
    return acc;
  }, positionZero);

  const today = new Date();
  const totalCreatedThisMonth = members.filter((member) => {
    const createdAt = new Date(member.created_at);

    return (
      createdAt.getMonth() === today.getMonth() &&
      createdAt.getFullYear() === today.getFullYear()
    );
  }).length;

  return {
    totalMembers: members.length,
    membersByPosition,
    totalCreatedThisMonth,
    isLoadingMembers: membersQuery.isPending,
  };
};
