import { redirect } from "next/navigation"
import { IconLogout } from "@tabler/icons-react"
import { getSession, handleLogout } from "@/lib/supabase/api"

export async function LogoutButton({ className }: { className?: string }) {
  const session = await getSession()

  const handleForm = async () => {
    "use server"

    await handleLogout()
    return redirect("/login")
  }

  if (session)
    return (
      <div
        className={`rounded-md hover:bg-btn-background-hover text-sm dark:text-gray-200 text-gray-800 ${className}`}
      >
        <form action={handleForm}>
          <button className="flex items-center p-2 space-x-3 rounded-md">
            <IconLogout width={24} height={24} />
            <span>Logout</span>
          </button>
        </form>
      </div>
    )

  return null
}

export async function LogoutButtonMobile() {
  const session = await getSession()

  const handleForm = async () => {
    "use server"

    await handleLogout()
    return redirect("/login")
  }

  if (session)
    return (
      <form action={handleForm}>
        <button
          className={
            "text-gray-300 hover:bg-gray-700 hover:text-white p-4 font-light"
          }
        >
          <div className="flex items-center gap-2">
            <IconLogout width={24} height={24} />
            Logout
          </div>
        </button>
      </form>
    )

  return null
}
