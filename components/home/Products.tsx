import Image from "next/image"
import Link from "next/link"
import BecomeASensei from "@/assets/become-a-sensei.png"
import AchillesTendon from "@/assets/achilles-tendon.png"
import ImAGoat from "@/assets/iam-goat.png"
import LetsRemember from "@/assets/lets-remeber.png"

const productsList = [
  {
    image: BecomeASensei,
    title: "Become a Sensei Program",
    url: "/products/become_a_sensei",
  },
  {
    image: AchillesTendon,
    title: "Achilles Tendon Program",
    url: "/products/achilles_tendon",
  },
  {
    image: ImAGoat,
    title: "I'm a GOAT Program",
    url: "/products/im_a_goat",
  },
  {
    image: LetsRemember,
    title: "Let's Remember Program",
    url: "/products/lets_remember",
  },
]

export const Products = () => (
  <div className="w-screen py-16 sm:pt-12 lg:h-[36rem] bg-green-400/50 dark:bg-green-400/80">
    <div className="max-w-screen-lg lg:h-[36rem] m-auto flex flex-col items-center lg:items-stretch gap-8 sm:gap-16 sm:pt-16 md:px-12">
      <p className="font-bold text-4xl sm:text-[3.5rem]">What we offer</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {productsList.map(({ image, title, url }, i) => (
          <Link
            href={url}
            className="hover:scale-125 transition duration-500"
            key={url}
          >
            <Image
              src={image}
              alt={title}
              style={{
                width: "192px",
                height: "128px",
                objectFit: "fill",
                borderRadius: "0.375rem",
              }}
            />

            <p className="mt-4 font">{title}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
)
