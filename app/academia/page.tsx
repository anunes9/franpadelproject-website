import { Footer } from "@/components/layout/Footer"
import { HeaderBlue } from "@/components/layout/Header"
import Image from "next/image"

const Page = () => (
  <div className="bg-blueWhite">
    <div>
      <div className="bg-blueWhitePattern bg-cover h-[1820px] w-full absolute left-0" />
    </div>

    <div className="relative max-w-[1200px] m-auto z-1">
      <HeaderBlue title="Academia" />

      <div className="flex flex-col sm:flex-row items-center justify-between mt-12 sm:mt-[100px] lg:w-[1027px] m-auto">
        <div className="w-3/4 sm:w-1/3 lg:w-[418px] h-full lg:h-[831px] z-10 sm:mr-[-80px] lg:mr-[-180px] shadow-out">
          <Image
            alt="fran-logo"
            src="/assets/fran-academia.png"
            fill
            className="!relative"
          />
        </div>

        <div className="bg-projectGreen py-12 w-3/4 lg:w-[787px] sm:h-[540px] lg:h-[940px] px-8 lg:pr-8 flex items-center mt-[-200px] sm:mt-0 pt-[240px] sm:pt-0">
          <p className="sm:ml-[100px] lg:ml-[230px] font-projectFontExtended text-base lg:text-lg leading-normal text-white">
            A Academia FRAN Padel project <br />é um{" "}
            <span className="font-projectFontMediumExtended">
              espaço de aprendizagem e formação
            </span>{" "}
            focado no jogador e nas suas necessidades específicas.
            <br />
            <br />O{" "}
            <span className="font-projectFontMediumExtended">
              Método FRAN
            </span>{" "}
            desenvolvido por Francisco Freitas, adequa-se a todos os jogadores e
            adapta-se ao seu nível de jogo, procurando sempre um crescimento
            sustentado e desafiando-o sempre a cada treino.
            <br />
            <br />A Academia desenvolve, para além da componente de formação,
            uma diversidade de clínicas, onde com um caráter mais pontual,
            responde a diferentes necessidades dos jogadores.
          </p>
        </div>
      </div>

      <div className="bg-projectGray lg:w-[1027px] m-auto sm:p-[68px] mt-24 sm:mt-[177px] mb-[151px]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="w-3/4 m-auto sm:w-[386px]">
            <Image
              alt="fran-logo"
              src="/assets/cv-fran.png"
              fill
              className="!relative"
            />
          </div>

          <div className="hidden sm:block font-projectFontMedium text-sm sm:text-base lg:text-lg text-projectBlue sm:mr-[80px]">
            <ul className="list-disc">
              <li className="sm:mb-8">
                Fundador{" "}
                <span className="font-projectFontMediumExtended font-bold">
                  FRAN Padel Project
                </span>
              </li>
              <li className="sm:mb-8">
                Criador{" "}
                <span className="font-projectFontMediumExtended font-bold">
                  FRAN Methodology
                </span>
              </li>
              <li>Head Coach</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center w-fit m-auto font-projectFontMedium text-sm sm:text-base lg:text-lg leading-relaxed text-projectBlue sm:mt-14 pb-8 px-14 sm:px-0">
          <ul className="list-disc">
            <li className="sm:hidden mt-12">Fundador FRAN Padel Project </li>
            <li className="sm:hidden">Criador FRAN Methodology</li>
            <li className="sm:hidden">Head Coach</li>
            <li>Horácio Alvarez Clementi, “HAC”, Ambassador; </li>
            <li>
              Technical Coach & Sparring in Horácio Alvarez Clementi
              <br /> “WPT” Team 2015-2021:
            </li>
            <li className="text-projectGreen ml-6">Augustin Tapia</li>
            <li className="text-projectGreen ml-6">Lucas Bergamini </li>
            <li className="text-projectGreen ml-6">Lucas Campagnolo </li>
            <li className="text-projectGreen ml-6">Matiaz Diaz</li>
            <li className="text-projectGreen ml-6">Carolina Navarro </li>
            <li>+ 50 Clinics/Courses: </li>
            <li className="text-projectGreen ml-6">Angola </li>
            <li className="text-projectGreen ml-6">Sweden </li>
            <li className="text-projectGreen ml-6">Spain</li>
            <li className="text-projectGreen ml-6">Portugal </li>
            <li>Psychology Degree in ISPA University; </li>
            <li>Grade I & II from IPDJ </li>
            <li>Main Coach: </li>
            <li className="text-projectGreen ml-6">
              Afonso Fazendeiro (2022-2023){" "}
            </li>
            <li className="text-projectGreen ml-6">
              Constança Gorito (2022-2024){" "}
            </li>
            <li className="text-projectGreen ml-6">
              Bernardo Monteiro (2021-2023){" "}
            </li>
            <li className="text-projectGreen ml-6">
              Martim Silva (2022-2023){" "}
            </li>
            <li className="text-projectGreen ml-6">
              Plínio Ferrão (2021-2023){" "}
            </li>
            <li className="text-projectGreen ml-6">
              Sofia Formigal (2023-2024)
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default Page
