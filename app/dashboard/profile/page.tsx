import { SectionHeader } from "@/components/dashboard/SecionHeader"
import { getSession, getClub, getUser } from "@/lib/supabase/api"

export default async function Profile() {
  const [session, user, club] = await Promise.all([
    getSession(),
    getUser(),
    getClub(),
  ])

  return (
    <div className="flow-root">
      <SectionHeader title="Perfil" page="As minhas informações" />

      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Name</dt>
          <dd className="text-gray-700 sm:col-span-2">{user?.name}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Email</dt>
          <dd className="text-gray-700 sm:col-span-2">{session?.email}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Club</dt>
          <dd className="text-gray-700 sm:col-span-2">{club?.name}</dd>
        </div>
      </dl>
    </div>
  )
}
