import { Arrow } from "@/components/home/Arrow"
import { Menu } from "@/components/home/Menu"
import Image from "next/image"

export const Hero = () => (
  <>
    <div className="absolute w-screen h-screen h-max-[1000px] bg-projectBlue/20 max-w-[1200px]" />

    <div className="absolute w-screen h-screen h-max-[1000px] max-w-[1200px]">
      <div className="h-full flex flex-col justify-between items-center">
        <div className="flex justify-end w-full pr-[80px] pt-[40px]">
          <Menu />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <Image
            src="/assets/fran-logo.png"
            alt="arrow-down"
            width="264"
            height="164"
          />
        </div>

        <Arrow />
      </div>
    </div>

    <video
      className="w-screen h-screen h-max-[1000px] object-cover"
      // autoPlay
      loop
      muted
      src="/assets/video.mov"
    />
  </>
)
