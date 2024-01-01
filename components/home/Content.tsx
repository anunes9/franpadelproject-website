import Training from "@/assets/padel-training.png"
import Image from "next/image"

export const Content = () => (
  <div className="w-screen sm:h-[36rem] pt-16 sm:pt-0">
    <div className="max-w-screen-lg sm:h-[36rem] m-auto flex flex-col sm:flex-row items-center gap-16 sm:gap-0">
      <p className="font-bold text-4xl sm:text-[4rem] sm:leading-none px-8 sm:px-0">
        Innovative approach to the basics
      </p>

      <Image
        alt="padel-training"
        src={Training}
        width={800}
        height={500}
        layout="responsive"
      />
    </div>
  </div>
)
