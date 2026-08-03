"use server";

import { getSupabaseAdmin } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function deleteLead(id: string) {
  const supabase = getSupabaseAdmin();
  if (!supabase) return { error: "Supabase not configured" };

  const { error } = await supabase.from("contact_messages").delete().eq("id", id);
  
  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  return { success: true };
}
