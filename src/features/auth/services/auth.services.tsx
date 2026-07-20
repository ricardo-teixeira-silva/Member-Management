import { supabase } from "@/lib/supabase";
import { getPhotoUrl } from "@/shared/utils/storage";

export async function signIn(email: string, password: string) {
  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (authError) {
    throw authError;
  }

  const { data: member, error: memberError } = await supabase
    .from("members")
    .select("*")
    .eq("user_id", authData.user.id)
    .single();

  if (memberError) {
    throw memberError;
  }

  return {
    user: authData.user,
    session: authData.session,
    member: {
      ...member,
      photoUrl: getPhotoUrl("member-photos", member.photo),
    },
  };
}
