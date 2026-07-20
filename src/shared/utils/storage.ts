import { supabase } from "@/lib/supabase";

export function getPhotoUrl(bucket: string, path?: string | null) {
  if (!path) return "";

  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}
