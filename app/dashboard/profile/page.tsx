import { Text, Title } from "@/components/generic/Typography"
import { getSession, getClub, getUser } from "@/app/supabase-server"

export default async function Profile() {
  const [session, user, club] = await Promise.all([
    getSession(),
    getUser(),
    getClub(),
  ])

  return (
    <div className="max-w-md m-auto">
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
      <Text className="mb-4">{session?.user?.email}</Text>
    </div>
  )
}
