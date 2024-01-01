import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Button, ButtonLink } from "@/components/generic/Button"
import { IconUser } from "@tabler/icons-react"

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", session?.user?.id)

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
        <ButtonLink
          href="/dashboard"
          className="items-center gap-1 bg-inherit border"
        >
          <IconUser width={18} height={18} />
          {data && data[0]?.name}
        </ButtonLink>

        <form action={handleSignOut}>
          <Button>
            <p>Logout</p>
          </Button>
        </form>
      </div>
    )

  return <ButtonLink href="/login">Login</ButtonLink>
}
