import React from "react"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { IconUserCircle } from "@tabler/icons-react"

export const UserInformation = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", session?.user?.id)

  return (
    <div className="flex items-center p-2 space-x-4 hover:cursor-pointer hover:bg-btn-background-hover/50 rounded-md">
      <div className="rounded-lg bg-gray-200 stroke-gray-500 w-9 h-9 flex justify-center items-center">
        <IconUserCircle
          width={28}
          height={28}
          stroke={1.2}
          className="stroke-gray-600"
        />
      </div>
      <div>
        <h2 className="text-md font-semibold">{data && data[0]?.name}</h2>
        <span className="flex items-center space-x-1">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-xs hover:underline text-gray-600"
          >
            View profile
          </a>
        </span>
      </div>
    </div>
  )
}
