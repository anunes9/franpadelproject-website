import { cookies } from "next/headers"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { Text, Title } from "@/app/components/generic/Typography"
import { getAuthUser, getClub, getUser } from "@/utils/supabase/api"

export default async function Profile() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data } = await supabase.auth.getSession()
  if (!data.session) redirect("/login")

  const authUser = await getAuthUser()
  const user = await getUser()
  const club = await getClub()

  return (
    <div className="max-w-md m-auto">
      <Title heading="1" className="mb-8">
        Profile
      </Title>

      <Title heading="4" className="mb-2">
        My Club
      </Title>
      <Text className="mb-4">{club?.name}</Text>

      <Title heading="4" className="mb-2">
        Name
      </Title>
      <Text className="mb-4">{user?.name}</Text>

      <Title heading="4" className="mb-2">
        Email
      </Title>
      <Text className="mb-4">{authUser?.email}</Text>
    </div>
  )
}
