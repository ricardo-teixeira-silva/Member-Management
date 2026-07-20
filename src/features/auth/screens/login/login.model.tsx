import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { signIn } from "../../services/auth.services";
import { SignInParams } from "../../types/auth.types";

export function useSignIn() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ email, password }: SignInParams) => signIn(email, password),

    onSuccess: async (data) => {
      queryClient.setQueryData(["current-member"], data.member);
      router.replace("/success");
    },
    onError: (error) => {
      console.log("Login error:", error);
    },
  });

  return {
    login: mutation.mutate,
    loading: mutation.isPending,
  };
}
