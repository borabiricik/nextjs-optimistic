"use server"

import { supabase } from "@/clients/supabase.client"
import { revalidatePath } from "next/cache"

export const AddPostAction = async (values: FormData) => {
  const { data } = await supabase.from("posts").insert({
    text: values.get("text"),
    like_count: 0,
  })
  revalidatePath("/")
  return data
}
