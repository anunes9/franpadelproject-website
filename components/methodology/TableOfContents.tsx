"use client"

import { usePathname } from "next/navigation"

const TOC = [
  { title: "Introduction", href: "/dashboard/methodology" },
  {
    title: "Coaching Aspect",
    topics: [
      "Types of Feedback",
      "Ball throwing techniques",
      "Alternatives to the basket",
    ],
    href: "/dashboard/methodology/coaching-aspects",
  },
  {
    title: "Transversal Concepts",
    topics: [
      "Directions",
      "Shot Depth",
      "Shot Height",
      "Ball Effects",
      "Speed types",
    ],
    href: "/dashboard/methodology/transversal-concepts",
  },
  {
    title: "5-in-a-row Concept",
    topics: [
      "Body Posture",
      "Racket positioning and grip",
      "Types of Movement",
      "Impact Points",
      "Terminations",
    ],
    href: "/dashboard/methodology/5-in-a-row-concepts",
  },
  {
    title: "Understanding the Field",
    topics: [
      "Field Tactical Zones",
      "Definition of the Fence",
      "Glasses",
      "Numerical System",
      "Functions (Attack + Counter-Attack + Defence)",
    ],
    href: "/dashboard/methodology/understanding-the-field",
  },
  {
    title: "Ground Techniques",
    topics: [
      "Service",
      "Forehand",
      "Backhand",
      "Volley",
      "Lob",
      "Back Glass",
      "Side Glass",
    ],
    href: "/dashboard/methodology/ground-techniques",
  },
  {
    title: "Overhead Techniques",
    topics: ["Bandeja", "Víbora", "Smash", "Ball to the fence"],
    href: "/dashboard/methodology/overhead-techniques",
  },
]

export const TableOfContents = () => {
  const pathname = usePathname()

  const topics = TOC.find(({ href }) => href.includes(pathname))?.topics!!

  return (
    <div>
      <div className="flex flex-col lg:flex-row mt-8 gap-2">
        {TOC.map(({ title, href }) => (
          <a
            href={href}
            key={title}
            className={`w-full rounded-t-lg p-2 text-sm font-medium leading-5 ring-projectBlue/60 focus:outline-none focus:ring-2 text-center hover:cursor-pointer min-h-16 text-pretty
          ${
            pathname === href
              ? "bg-projectBlue text-projectGreen shadow"
              : "text-projectBlue hover:bg-projectBlue/20"
          }`}
          >
            {title}
          </a>
        ))}
      </div>

      {topics && (
        <div className="flex justify-around gap-4 bg-projectBlue rounded-b-lg p-2">
          {topics.map((t) => (
            <p className="text-white text-sm">- {t}</p>
          ))}
        </div>
      )}
    </div>
  )
}
