import { supabase } from "@/clients/supabase.client"
import Posts from "@/components/Posts"

export default async function Home() {
  const { data } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: false })
  console.log({ data })

  return <Posts data={data} />
}
