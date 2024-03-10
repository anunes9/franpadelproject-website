import { createClient } from "@supabase/supabase-js"
import { redirect } from "next/navigation"

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string; code: string }
}) {
  const listUsers = async () => {
    "use server"

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    )

    const {
      data: { users },
      error,
    } = await supabase.auth.admin.listUsers()
    console.log("users", users)
  }

  const updateUser = async (formData: FormData) => {
    "use server"

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    )

    const userId = formData.get("userId") as string
    const password = formData.get("password") as string

    const { data: user, error } = await supabase.auth.admin.updateUserById(
      userId,
      { password }
    )

    if (user) redirect("/admin?message=User Updated!")

    console.log("user", user)
  }

  const createUser = async (formData: FormData) => {
    "use server"

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    )

    const email = formData.get("userEmail") as string
    const password = formData.get("userPassword") as string

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

    if (data) redirect("/admin?message=User Created!")

    console.log("user", data)
  }

  return (
    <div className="w-screen">
      <div className="flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 m-auto">
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground pt-12 sm:pt-24"
          action={listUsers}
        >
          <label className="text-md" htmlFor="email">
            List Users
          </label>

          <button className="bg-green-300 dark:bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
            Confirm
          </button>
        </form>

        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground pt-12 sm:pt-24"
          action={updateUser}
        >
          <label className="text-md" htmlFor="email">
            Update User By ID
          </label>

          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="text"
            name="userId"
            required
          />

          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            required
          />

          <button className="bg-green-300 dark:bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
            Update
          </button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>

        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground pt-12 sm:pt-24"
          action={createUser}
        >
          <label className="text-md" htmlFor="email">
            User Email
          </label>

          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="text"
            name="userEmail"
            required
          />

          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="userPassword"
            required
          />

          <button className="bg-green-300 dark:bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
            Create
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
