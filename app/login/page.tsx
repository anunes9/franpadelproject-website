import Link from "next/link"
import { redirect } from "next/navigation"
import { IconChevronLeft } from "@tabler/icons-react"
import FranMethodology from "@assets/fran-methodology.png"
import Image from "next/image"
import { Text } from "@/components/generic/Typography"
import { getSession, handleLogin } from "@/lib/supabase/api"

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const session = await getSession()
  if (session) redirect("/club")

  const signIn = async (formData: FormData) => {
    "use server"

    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const error = await handleLogin({ email, password })

    if (error) return redirect("/login?message=Could not authenticate user")
    return redirect("/club")
  }

  return (
    <div className="w-screen">
      <div className="flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 m-auto">
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
          />

          <button className="bg-green-300 rounded-md px-4 py-2 text-foreground mb-2">
            Sign In
          </button>

          <Link href={"/forgot-password"}>
            <Text className="hover:underline hover:cursor-pointer mt-2">
              Forgot Password?
            </Text>
          </Link>

          <div className="flex gap-2">
            <Text>Don't have an account? </Text>
            <Link href={"/contact"}>
              <Text className="text-projectGreen !font-semibold hover:underline hover:cursor-pointer">
                Contact us here.
              </Text>
            </Link>
          </div>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
