import { Footer } from "@/components/layout/Footer"
import { HeaderGreen } from "@/components/layout/Header"
import { Clinics } from "@/lib/content"
import Image from "next/image"
import Link from "next/link"

const Page = () => (
  <div>
    <HeaderGreen title="Clínicas de Padel" />

    <div className="bg-projectGray py-12 sm:py-[86px]">
      <div className="bg-projectGray sm:w-[1027px] m-auto sm:p-[68px] mt-24 sm:mt-[177px] mb-[151px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:bg-white ">
          {Clinics.map((p) => (
            <Link
              className={`grid-item flex items-center justify-center h-[510px] hover:cursor-pointer hover:bg-opacity-80 col-start-${
                p.colStart
              } px-2 bg-project${p.color} ${!p.image ? "hidden sm:block" : ""}`}
              href={p.image ? `/clinicas-padel/${p.name}` : ""}
              key={p.name}
            >
              {p.image && (
                <Image
                  alt="pro1"
                  src={p.image}
                  height={p.height}
                  width={p.width}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

export default Page
