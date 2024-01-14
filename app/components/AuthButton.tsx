import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ButtonLink } from "@components/generic/Button"
import { IconLogout, IconHome } from "@tabler/icons-react"

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session)
    return (
      <div className="flex items-center gap-4 bg-slate-200 rounded-md text-black">
        <ButtonLink
          href="/dashboard"
          className="items-center gap-1 bg-inherit border"
        >
          <IconHome width={18} height={18} stroke={1} />
          <span className="font-light">Go to Dashboard</span>
        </ButtonLink>
      </div>
    )

  return <ButtonLink href="/login">Login</ButtonLink>
}

export async function LogoutButton({ className }: { className: string }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const handleSignOut = async () => {
    "use server"

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect("/login")
  }

  if (session)
    return (
      <div
        className={`rounded-md hover:bg-btn-background-hover text-sm dark:text-gray-200 text-gray-800 ${className}`}
      >
        <form action={handleSignOut}>
          <button className="flex items-center p-2 space-x-3 rounded-md">
            <IconLogout width={24} height={24} />
            <span>Logout</span>
          </button>
        </form>
      </div>
    )

  return <></>
}
