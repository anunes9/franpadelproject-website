"use client"

import React, { ReactNode, useState } from "react"

export const Tabs = ({
  tabs,
  content,
}: {
  tabs: string[]
  content: ReactNode[]
}) => {
  const [selected, setTab] = useState(0)

  return (
    <div>
      <div className="flex items-center gap-4 justify-center bg-btn-background text-gray-800 mt-4 rounded-md">
        {tabs.map((tab, i) => (
          <div
            className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${
              selected === i ? "border-green-400" : "border-gray-300"
            } text-gray-600 capitalize hover:cursor-pointer`}
            onClick={() => setTab(i)}
          >
            {tab}
          </div>
        ))}
      </div>

      {content[selected]}
    </div>
  )
}
