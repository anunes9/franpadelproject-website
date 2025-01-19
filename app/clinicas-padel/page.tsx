import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { getAllClinics } from "@/lib/clinics"
const HeaderGreen = dynamic(
  () =>
    import("@/components/layout/HeaderGreen").then(
      (module) => module.default
    ) as any,
  {
    ssr: false,
  }
) as any

export default async function Page() {
  const clinics = await getAllClinics()

  return (
    <Suspense>
      <div>
        <HeaderGreen title={"padel-clinics"} />

        <div className="bg-projectGray m-auto pt-24 sm:pt-[77px] lg:pt-[177px] pb-16 lg:pb-[151px] flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-projectGreen">
            {clinics.map((p) => (
              <Link
                className={`grid-item aspect-square lg:h-[510px] max-h-[510px] lg:w-[510px] max-w-[510px] hover:cursor-pointer hover:bg-opacity-80
          flex justify-center items-center bg-project${p.color} ${
                  !p.image ? "hidden sm:block" : ""
                } col-start-${p.colStart}`}
                href={p.image ? `/clinicas-padel/${p.slug}` : ""}
                key={p.slug}
              >
                {p.image && (
                  <Image
                    alt="pro1"
                    src={p.image.url}
                    height={p.image.height}
                    width={p.image.width}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </Suspense>
  )
}
