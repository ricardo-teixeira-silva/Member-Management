import { useCurrentMember } from "@/shared/store/currentMember";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { signIn } from "../../services/auth.services";
import { SignInParams } from "../../types/auth.types";

export function useSignIn() {
  const setMember = useCurrentMember((s) => s.setMember);

  const mutation = useMutation({
    mutationFn: ({ email, password }: SignInParams) => signIn(email, password),

    onSuccess: async (data) => {
      setMember(data.member);
      router.replace("/success");
    },
    onError: (error) => {
      console.log("Login error:", error);
    },
  });

  return {
    login: mutation.mutate,
    loading: mutation.isPending,
    isError: mutation.isError,
    reset: mutation.reset,
  };
}
