import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export const getAuthUser = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data } = await supabase.auth.getUser()

  return data.user
}

export const getUser = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: users } = await supabase
    .from("users")
    .select()

  return users && users[0]

}

export const getClub = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: clubs } = await supabase
    .from("clubs")
    .select()

  return clubs && clubs[0]
}

export const getPlayers = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: players } = await supabase
    .from("players")
    .select()

  return players
}
