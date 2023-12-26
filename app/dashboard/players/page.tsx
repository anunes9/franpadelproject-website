import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: players } = await supabase.from("players").select()

  return <pre>{JSON.stringify(players, null, 2)}</pre>
}

// "use client"

// import { createClient } from "@/utils/supabase/client"
// import { useEffect, useState } from "react"

// export default function Page() {
//   const [notes, setNotes] = useState<any[] | null>(null)
//   const supabase = createClient()

//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await supabase.from("players").select()
//       setNotes(data)
//     }
//     getData()
//   }, [])

//   return <pre>{JSON.stringify(notes, null, 2)}</pre>
// }
