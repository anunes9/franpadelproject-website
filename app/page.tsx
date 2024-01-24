import { Footer } from "@/components/layout/Footer"
import Image from "next/image"

const Index = () => (
  <div>
    <TopComponent />

    <div className="w-screen bg-projectBlue flex justify-center py-24">
      <p className="text-projectGreen text-lg md:text-3xl lg:text-4xl xl:text-5xl leading-normal text-center font-projectFontMedium">
        Focados no crescimento do jogador
        <br /> a academia desenvolve uma
        <br /> estratégia atendendo às suas
        <br /> necessidades específicas.
      </p>
    </div>

    <div className="relative bg-hero-color flex flex-col justify-center items-center">
      <div>
        <div className="bg-hero-pattern bg-cover h-full w-full absolute left-0 z-[1]" />
      </div>

      <Image
        className=" z-[2]"
        src="/assets/hero.png"
        alt="hero"
        width={800}
        height={800}
      />

      <div className="flex flex-col items-center mt-[-72px] mb-24 z-[2]">
        <Image
          className="z-10 w-12"
          src="/assets/quotes.png"
          alt="quotes"
          width={100}
          height={100}
        />

        <div className="bg-gray-100 shadow-md py-8 xl:py-20 px-4 md:px-16 lg:px-24 xl:px-32 mt-[-12px]">
          <p className="text-projectGreen text-md md:text-[20px] lg:text-[24px] xl:text-[40px] leading-normal text-center font-projectFontMedium">
            “Competir é ter a sensação de poder
            <br /> ganhar ou perder dentro dos 10x20m.
            <br /> Convido a todos os que procuram
            <br /> gerir melhor esta dicotomia presente
            <br /> na vida de um competidor
            <br />a experimentar o centro de treino”
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

export default Index

const TopComponent = () => (
  <>
    <div className="absolute w-screen h-screen h-max-[1000px] bg-projectBlue/10" />

    <div className="absolute w-screen h-screen h-max-[1000px]">
      <div className="pt-[200px] h-full flex flex-col justify-around items-center">
        <Image
          src="/assets/fran-logo.png"
          alt="arrow-down"
          width="264"
          height="164"
        />

        <Image
          src="/assets/arrow-down.png"
          alt="arrow-down"
          width="80"
          height="60"
        />
      </div>
    </div>

    <Image
      className="absolute right-8 top-8"
      src="/assets/menu.png"
      alt="arrow-down"
      width="40"
      height="60"
    />

    <video
      className="w-screen h-screen h-max-[1000px] object-cover"
      // autoPlay
      loop
      muted
      src="/assets/video.mov"
    />
  </>
)
