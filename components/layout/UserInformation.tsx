import React from "react"
import { IconUserCircle } from "@tabler/icons-react"
import { getUser } from "@/lib/supabase/api"

export const UserInformation = async () => {
  const user = await getUser()

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
        <h2 className="text-md font-semibold">{user?.name}</h2>
        <span className="flex items-center space-x-1">
          <a
            rel="noopener noreferrer"
            href="/dashboard/profile"
            className="text-xs hover:underline text-gray-600"
          >
            View profile
          </a>
        </span>
      </div>
    </div>
  )
}
