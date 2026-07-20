import { useQueryClient } from "@tanstack/react-query";
import { MemberWithPhoto } from "../types/members";

export function useCurrentMember() {
  const queryClient = useQueryClient();

  return queryClient.getQueryData<MemberWithPhoto>(["current-member"]);
}
