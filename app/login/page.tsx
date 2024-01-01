import Link from "next/link"
import { headers, cookies } from "next/headers"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { IconChevronLeft } from "@tabler/icons-react"
import FranMethodology from "@/assets/fran-methodology.png"
import Image from "next/image"

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data } = await supabase.auth.getSession()
  if (data.session) redirect("/")

  const signIn = async (formData: FormData) => {
    "use server"

    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) return redirect("/login?message=Could not authenticate user")
    return redirect("/")
  }

  const signUp = async (formData: FormData) => {
    "use server"

    const origin = headers().get("origin")
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) return redirect("/login?message=Could not authenticate user")
    return redirect("/login?message=Check email to continue sign in process")
  }

  return (
    <div className="flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <IconChevronLeft height={18} />
        Back
      </Link>

      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground pt-12 sm:pt-24"
        action={signIn}
      >
        <Image
          alt="fran-methodology"
          src={FranMethodology}
          layout="responsive"
          width={448}
          height={448}
        />

        <label className="text-md" htmlFor="email">
          Email
        </label>

        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
          value="john@doe.com"
        />

        <label className="text-md" htmlFor="password">
          Password
        </label>

        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
          value="Password1!"
        />

        <button className="bg-green-300 dark:bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
          Sign In
        </button>

        <button
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
        >
          Sign Up
        </button>

        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  )
}
