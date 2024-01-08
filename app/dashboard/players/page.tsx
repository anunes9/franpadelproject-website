import { PlayersTable } from "@/components/players/PlayersTable"

export default async function Page() {
  return (
    <div>
      <PlayersTable />
    </div>
  )
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
