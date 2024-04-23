"use server"

import { supabase } from "@/clients/supabase.client"
import { revalidatePath } from "next/cache"

export const LikeAction = async (id: number, prev_like_count: number) => {
  const data = await supabase
    .from("posts")
    .update({
      like_count: prev_like_count + 1,
    })
    .eq("id", id)
  revalidatePath("/")
  return data
}
