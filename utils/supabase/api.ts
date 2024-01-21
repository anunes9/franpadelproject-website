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

  const { data } = await supabase.auth.getUser()

  const { data: users } = await supabase
    .from("users")
    .select("*")
    .eq("id", data.user?.id)

  const user = users && users[0]

  return user
}

export const getClub = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data } = await supabase.auth.getUser()

  const { data: users } = await supabase
    .from("users")
    .select("*")
    .eq("id", data.user?.id)

  const user = users && users[0]

  const { data: clubs } = await supabase
    .from("clubs")
    .select("*")
    .eq("id", user?.club_id)

  const club = clubs && clubs[0]

  return club
}

export const getPlayers = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const club = await getClub()

  const { data: players } = await supabase
    .from("players")
    .select("*")
    .eq("club_id", club.id)

  return players
}
