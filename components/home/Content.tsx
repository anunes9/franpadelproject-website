import Image from "next/image"

const textStyle =
  "text-projectGreen text-[16px] md:text-[20px] lg:text-[24px] xl:text-[40px] leading-normal text-center font-projectFontMedium"

const assetsUrl = `${decodeURI(
  process.env.NEXT_PUBLIC_SUPABASE_URL!
)}/storage/v1/object/public/public-assets`

export const Content = () => (
  <>
    <div
      id="section-1"
      className="w-screen bg-projectBlue flex justify-center py-24"
    >
      <p className={textStyle}>
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
        src={`${assetsUrl}/hero.png`}
        alt="hero"
        width={800}
        height={800}
      />

      <div className="flex flex-col items-center mt-[-72px] mb-24 z-[2]">
        <Image
          className="z-10 w-12"
          src={`${assetsUrl}/quotes.png`}
          alt="quotes"
          width={100}
          height={100}
        />

        <div className="bg-gray-100 shadow-md py-8 xl:py-20 px-4 md:px-16 lg:px-24 xl:px-32 mt-[-12px]">
          <p className={textStyle}>
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
  </>
)
