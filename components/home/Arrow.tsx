"use client"

import Image from "next/image"

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
      className="animate-bounce z-10 hover:cursor-pointer pb-24 w-16 sm:w-20"
      onClick={handleClickScroll}
    >
      <Image
        src="/assets/arrow-down.png"
        alt="arrow-down"
        fill
        className="!relative"
      />
    </button>
  )
}
