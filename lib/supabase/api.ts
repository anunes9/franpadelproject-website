import { createClientServer } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { cache } from "react"

export const createServerSupabaseClient = cache(() =>
  createClientServer(cookies())
)

export const getAssetsUrl = (filePath: string) => {
  const supabase = createServerSupabaseClient()
  const { data } = supabase.storage.from("public-assets").getPublicUrl(filePath)
  return data.publicUrl
}

export async function getSession() {
  const supabase = createServerSupabaseClient()
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    return user
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

export async function handleLogin({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const supabase = createServerSupabaseClient()
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return error
  } catch (error) {
    console.error("Error:", error)
    return error
  }
}

export async function handleResetPassword(email: string) {
  const supabase = createServerSupabaseClient()
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    return error
  } catch (error) {
    console.error("Error:", error)
    return error
  }
}

export async function handleUpdatePassword({
  code,
  password,
}: {
  code: string
  password: string
}) {
  const supabase = createServerSupabaseClient()
  try {
    await supabase.auth.exchangeCodeForSession(code)
    await supabase.auth.updateUser({ password })
    return { ok: true }
  } catch (error) {
    console.error("Error:", error)
    return { ok: false, message: "Something went wrong updating user" }
  }
}

export async function handleLogout() {
  const supabase = createServerSupabaseClient()
  try {
    await supabase.auth.signOut()
    return true
  } catch (error) {
    console.error("Error:", error)
    return error
  }
}

export async function getUser() {
  const supabase = createServerSupabaseClient()
  try {
    const { data } = await supabase.from("users_app").select("*").single()
    return data
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

export async function getClub() {
  const supabase = createServerSupabaseClient()
  try {
    const { data } = await supabase.from("clubs_app").select("*").single()
    return data
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}
