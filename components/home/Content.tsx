import Image from "next/image"

export const Content = () => (
  <>
    <div
      id="section-1"
      className="bg-projectBlue flex justify-center items-center h-[400px]"
    >
      <p className="text-projectGreen text-[29px] text-center font-projectFontMediumExtended z-[2]">
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
        className="z-[2] mt-[-200px]"
        src="/assets/hero.png"
        alt="hero"
        width={1000}
        height={800}
      />

      <div className="flex flex-col items-center mt-[-72px] mb-24 z-[2]">
        <Image
          className="z-10"
          src="/assets/quotes.png"
          alt="quotes"
          width={100}
          height={100}
        />

        <div className="bg-gray-100 shadow-md py-8 xl:py-20 px-4 md:px-16 lg:px-24 xl:px-32 mt-[-12px]">
          <p className="text-projectGreen text-[29px] text-center font-projectFontMediumExtended z-[2]">
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
