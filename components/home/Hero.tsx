import { Arrow } from "@/components/home/Arrow"
import { Menu } from "@/components/home/Menu"
import Image from "next/image"

const assetsUrl = `${process.env
  .NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/public-assets`

export const Hero = () => (
  <>
    <div className="absolute w-screen h-screen h-max-[1000px] bg-projectBlue/10" />

    <div className="absolute w-screen h-screen h-max-[1000px]">
      <div className="pt-[200px] h-full flex flex-col justify-around items-center">
        <Image
          src={`${assetsUrl}/fran-logo.png`}
          alt="arrow-down"
          width="264"
          height="164"
        />

        <Arrow />
      </div>
    </div>

    <Menu />

    <video
      className="w-screen h-screen h-max-[1000px] object-cover"
      // autoPlay
      loop
      muted
      src="/assets/video.mov"
    />
  </>
)
