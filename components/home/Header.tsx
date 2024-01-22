import { ButtonLink } from "@/components/generic/Button"

export const Header = () => (
  <>
    <div>
      <div className="absolute w-screen h-[32rem] bg-green-600/50" />
    </div>

    <div>
      <div className="absolute pt-32 sm:pt-20 px-2 sm:px-16 w-screen">
        <div className="max-w-screen-lg m-auto px-8 sm:px-0">
          <p className="font-bold text-4xl leading-normal sm:text-[3rem] lg:text-[4rem] text-white">
            Improve your padel <br />
            <span className="font-normal">with Fran Methodology</span>
          </p>

          <ButtonLink
            className="border-2 bg-transparent w-fit mt-12"
            href="#contact"
          >
            <p className="font-bold text-white">Get in touch</p>
          </ButtonLink>
        </div>
      </div>
    </div>

    <video
      className="w-screen h-[32rem] object-cover"
      autoPlay
      loop
      muted
      src="/video.mp4"
    />
  </>
)
