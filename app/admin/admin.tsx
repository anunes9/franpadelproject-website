import AdminLayout from "@/components/admin/AdminLayout"
import { createClient } from "@supabase/supabase-js"

export default async function Login() {
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

    if (users) return users
    else if (error) return error
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

    const { data, error } = await supabase.auth.admin.updateUserById(userId, {
      password,
    })

    if (data) return "User updated!"
    else if (error) return error
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

    if (data) return "User created!"
    else if (error) return error
  }

  const deleteUser = async (formData: FormData) => {
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

    const userID = formData.get("userID") as string

    const { data, error } = await supabase.auth.admin.deleteUser(userID)

    if (data) return "User deleted!"
    else if (error) return error
  }

  return (
    <AdminLayout
      listUsers={listUsers}
      updateUser={updateUser}
      createUser={createUser}
      deleteUser={deleteUser}
    />
  )
}
