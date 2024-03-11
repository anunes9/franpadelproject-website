import { Footer } from "@/components/layout/Footer"
import { HeaderGreen } from "@/components/layout/Header"
import { Clinics } from "@/lib/content"
import Image from "next/image"
import Link from "next/link"

const Page = () => (
  <div>
    <HeaderGreen title="Clínicas de Padel" />

    <div className="bg-projectGray m-auto pt-24 sm:pt-[77px] lg:pt-[177px] pb-16 lg:pb-[151px] flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-projectGreen">
        {Clinics.map((p) => (
          <Link
            className={`grid-item aspect-square lg:h-[510px] max-h-[510px] lg:w-[510px] max-w-[510px] hover:cursor-pointer hover:bg-opacity-80
              flex justify-center items-center bg-project${p.color} ${
              !p.image ? "hidden sm:block" : ""
            } col-start-${p.colStart}`}
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

    <Footer />
  </div>
)

export default Page
