"use client"

import Image from "next/image"

const assetsUrl = `${process.env
  .NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/public-assets`

export const Arrow = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("section-1")
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button
      className="animate-bounce z-10 hover:cursor-pointer"
      onClick={handleClickScroll}
    >
      <Image
        src={`${assetsUrl}/arrow-down.png`}
        alt="arrow-down"
        width="80"
        height="60"
      />
    </button>
  )
}
