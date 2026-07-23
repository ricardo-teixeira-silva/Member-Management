import { supabase } from "@/lib/supabase";
import { Member } from "../types/members";

export async function getMembers(): Promise<Member[]> {
  const { data, error } = await supabase.from("members").select("*");
  if (error) {
    throw error;
  }
  return data;
}
