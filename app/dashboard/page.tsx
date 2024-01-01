import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: players } = await supabase.from("players").select()

  return (
    <div>
      <p>Number of players {players?.length}</p>
    </div>
  )
}
