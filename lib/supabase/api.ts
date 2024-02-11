import { createClientServer } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { cache } from 'react'

export const createServerSupabaseClient = cache(() =>
    createClientServer(cookies())
)

export async function getSession() {
  const supabase = createServerSupabaseClient()
  try {
    const {
      data: { user }
    } = await supabase.auth.getUser()
    return user
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export async function handleLogin({ email, password } : { email: string, password: string }) {
  const supabase = createServerSupabaseClient()
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return error
  } catch (error) {
    console.error('Error:', error)
    return error
  }
}

export async function handleLogout() {
  const supabase = createServerSupabaseClient()
  try {
    await supabase.auth.signOut()
    return true
  } catch (error) {
    console.error('Error:', error)
    return error
  }
}

export async function getUser() {
  const supabase = createServerSupabaseClient()
  try {
    const { data } = await supabase
      .from('users')
      .select('*')
      .single()
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export async function getClub() {
  const supabase = createServerSupabaseClient()
  try {
    const { data } = await supabase
      .from('clubs')
      .select('*')
      .single()
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export async function getPlayers() {
  const supabase = createServerSupabaseClient()
  try {
    const { data } = await supabase
      .from('players')
      .select('*')
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export async function getSubscription() {
  const supabase = createServerSupabaseClient()
  try {
    const { data: subscription } = await supabase
      .from('subscriptions')
      .select('*, prices(*, products(*))')
      .in('status', ['trialing', 'active'])
      .maybeSingle()
      .throwOnError()
    return subscription
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export const getActiveProductsWithPrices = async () => {
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' })

  if (error) {
    console.log(error.message)
  }
  return data ?? []
}