import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Button, ButtonLink } from "@/components/generic/Button"

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const handleSignOut = async () => {
    "use server"

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect("/login")
  }

  if (session)
    return (
      <div className="flex items-center gap-4">
        Hey, {user?.email}!
        <form action={handleSignOut}>
          <Button>Logout</Button>
        </form>
      </div>
    )

  return <ButtonLink href="/login">Login</ButtonLink>
}
