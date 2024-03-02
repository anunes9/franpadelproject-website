import { Menu } from "@/components/home/Menu"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"

const Page = () => (
  <div className="bg-blueWhite">
    <div>
      <div className="bg-blueWhitePattern bg-cover h-[1820px] w-full absolute left-0" />
    </div>

    <div className="relative max-w-[1200px] m-auto z-1">
      <Header title="Academia" />

      <div className="flex flex-row items-center justify-between mt-[100px] w-[1027px] m-auto">
        <div className="w-[418px] h-[831px] z-10 mr-[-180px] shadow-out">
          <Image
            alt="fran-logo"
            src="/assets/academia/fran-academia.png"
            fill
            className="!relative"
          />
        </div>

        <div className="bg-projectGreen py-12 w-[787px] h-[940px] pr-8 flex items-center">
          <p className="ml-[230px] font-projectFontExtended text-lg leading-normal text-white">
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

      <div className="bg-projectGray w-[1027px] m-auto p-[68px] mt-[177px] mb-[151px]">
        <div className="flex flex-row items-center justify-between">
          <div className="w-[386px]">
            <Image
              alt="fran-logo"
              src="/assets/academia/cv-fran.png"
              fill
              className="!relative"
            />
          </div>

          <div className="font-projectFontMedium text-lg text-projectBlue mr-[80px]">
            <ul className="list-disc">
              <li className="mb-8">
                Fundador{" "}
                <span className="font-projectFontMediumExtended font-bold">
                  FRAN Padel Project
                </span>
              </li>
              <li className="mb-8">
                Criador{" "}
                <span className="font-projectFontMediumExtended font-bold">
                  FRAN Methodology
                </span>
              </li>
              <li>Head Coach</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center w-fit m-auto font-projectFontMedium text-lg leading-relaxed text-projectBlue mt-14">
          <ul className="list-disc">
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

const Header = ({ title }: { title: string }) => (
  <div className="relative flex h-full m-auto flex-col px-4 py-6 md:p-12">
    <div className="flex flex-row justify-between items-center">
      <div className="w-16 sm:w-24 ml-4 sm:ml-0">
        <Image
          alt="fran-logo"
          src="/assets/fr-logo.png"
          fill
          className="!relative"
        />
      </div>

      <Menu />
    </div>

    <div>
      <p className="font-projectFontExtendedBlack text-[90px] text-projectGreen underline underline-offset-8 decoration-4 text-center leading-[108px]">
        {title}
      </p>
    </div>
  </div>
)
