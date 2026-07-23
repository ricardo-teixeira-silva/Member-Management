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
