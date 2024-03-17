import { createClient } from "@supabase/supabase-js"

export async function listUsers() {
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

  return users
}

export const updateUser = async (formData: FormData) => {
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

  return data
}

export const createUser = async (formData: FormData) => {
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

  return data
}
