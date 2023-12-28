import Image from "next/image"
import Link from "next/link"
import BecomeASensei from "@/assets/become-a-sensei.png"
import AchillesTendon from "@/assets/achilles-tendon.png"
import ImAGoat from "@/assets/iam-goat.png"
import LetsRemember from "@/assets/lets-remeber.png"

const productsList = [
  {
    image: BecomeASensei,
    title: "Become a Sensei",
    url: "/products/become_a_sensei",
  },
  {
    image: AchillesTendon,
    title: "Achilles Tendon",
    url: "/products/achilles_tendon",
  },
  {
    image: ImAGoat,
    title: "I'm a GOAT",
    url: "/products/im_a_goat",
  },
  {
    image: LetsRemember,
    title: "Let's Remember",
    url: "/products/lets_remember",
  },
]

export const Products = () => (
  <div className="w-screen py-16 sm:pt-12 sm:h-[36rem] bg-green-400/50 dark:bg-green-400/80">
    <div className="max-w-screen-lg sm:h-[36rem] m-auto flex flex-col items-center sm:items-stretch gap-8 sm:gap-16 sm:pt-16">
      <p className="font-bold text-4xl sm:text-[4rem]">What we offer</p>

      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
        {productsList.map(({ image, title, url }, i) => (
          <Link href={url} className="hover:scale-125 transition duration-500">
            <Image
              src={image}
              alt="title"
              style={{
                width: "192px",
                height: "128px",
                objectFit: "fill",
                borderRadius: "0.375rem",
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  </div>
)
