"use client"

import { Button } from "@/components/generic/Button"
import { useRouter } from "next/navigation"

export const NotFound = () => {
  const router = useRouter()

  return (
    <div className="animate-in flex h-screen">
      <div className="flex flex-col items-start m-auto">
        <p className="mb-2">ERROR 404</p>

        <p className="text-xl font-bold mb-4">Oops! Page not found</p>

        <p className="text-sm ">
          Looks like the page you are looking for doesn't exist.
        </p>

        <Button className="my-8" onClick={() => router.back()}>
          Go back
        </Button>
      </div>
    </div>
  )
}

export default NotFound
