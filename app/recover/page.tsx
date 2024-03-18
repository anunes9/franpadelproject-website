import { redirect } from "next/navigation"
import FranMethodology from "@assets/fran-methodology.png"
import Image from "next/image"
import { getSession2, handleUpdatePassword } from "@/lib/supabase/api"
import Link from "next/link"
import { IconChevronLeft } from "@tabler/icons-react"

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string; code: string }
}) {
  const session = await getSession2()

  const resetPassword = async (formData: FormData) => {
    "use server"

    const password = formData.get("password") as string

    console.log("session", session)
    console.log("code", searchParams.code)

    if (password) {
      const error = await handleUpdatePassword({
        code: searchParams.code,
        password,
      })

      if (error) return redirect("/recover?message=Could not authenticate user")
      return redirect("/club")
    }

    return alert("Passwords do not match")
  }

  return (
    <div className="w-screen">
      <div className="flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 m-auto">
        <Link
          href="/login"
          className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
          <IconChevronLeft height={18} />
          Back
        </Link>

        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground pt-12 sm:pt-24"
          action={resetPassword}
        >
          <Image
            alt="fran-methodology"
            src={FranMethodology}
            layout="responsive"
            width={448}
            height={448}
          />

          <label className="text-md" htmlFor="email">
            Enter your new password
          </label>

          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />

          <button className="bg-green-300 rounded-md px-4 py-2 text-foreground mb-2">
            Confirm
          </button>

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
