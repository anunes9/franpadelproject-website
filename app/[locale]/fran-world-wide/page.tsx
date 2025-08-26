import { getAllClinics } from '@/lib/clinics'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'

interface FranWorldWidePageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function FranWorldWidePage({ params }: FranWorldWidePageProps) {
  const { locale } = await params
  const clinics = await getAllClinics()
  const masterClinic = clinics.find((c) => c.name === 'Master Clinic')
  const masterClinicEvolution = clinics.find((c) => c.name === 'Master Clinic Evolution')
  const ibe = clinics.find((c) => c.name === 'IBE')
  const padelWonderland = clinics.find((c) => c.name === 'Padel Wonderland')

  return (
    <div className="bg-blueGreen h-full flex flex-col ">
      <Header title="fran-around-the-world" noColor />

      <div className="pt-24 pb-64 text-center content flex-grow">
        <Image src="/assets/fran-world-wide-logo.png" className="!relative max-w-[50%] m-auto" fill alt="fran-logo" />
      </div>

      <Image src="/assets/mapa.png" className="!relative w-full max-w-screen-2xl mx-auto" fill alt="fran-logo" />

      <div className="content w-full mb-16 mt-32 px-4 flex flex-col gap-32">
        <div className="flex">
          <ClinicPlace name="Spain" />

          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-16 px-4">
            <ClinicCard title="Valencia" clinics={[masterClinic]} />
            <ClinicCard title="Madrid" clinics={[ibe]} />
          </div>
        </div>

        <div className="flex">
          <ClinicPlace name="Sweden" />

          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-16 px-4">
            <ClinicCard title="Vaspy" clinics={[masterClinic]} />
          </div>
        </div>

        <div className="flex">
          <ClinicPlace name="Angola" />

          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-16 px-4">
            <ClinicCard title="Talatona" clinics={[masterClinic]} methodology />
          </div>
        </div>

        <div className="flex">
          <ClinicPlace name="Netherlands" />

          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-16 px-4">
            <ClinicCard title="Amsterdam" clinics={[masterClinic]} />
          </div>
        </div>

        <div className="flex">
          <ClinicPlace name="Portugal" />

          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-16 px-4">
            <ClinicCard title="Lisbon" clinics={[padelWonderland, masterClinic, masterClinicEvolution]} />

            <ClinicCard title="Azores" methodology />
          </div>
        </div>
      </div>
    </div>
  )
}

const ClinicPlace = ({ name }: { name: string }) => (
  <div className="flex">
    <div className="border-r-4 border-white flex items-center">
      <p className="sideText text-xl text-white font-projectFontMedium">{name}</p>
    </div>

    <div className="bg-flag w-12 h-12 pl-1">
      <Image alt="logo" src="/assets/logo.svg" height={24} width={24} />
    </div>
  </div>
)

const ClinicCard = ({
  title,
  clinics = [],
  methodology,
}: {
  title: string
  clinics?: any[]
  methodology?: boolean
}) => (
  <div className="p-4 flex flex-col items-center">
    <p className="text-xl text-white font-projectFontMedium underline underline-offset-8 mb-8">{title}</p>

    <div className="flex flex-col items-center gap-8">
      {clinics.map((c, i) => (
        <Image
          key={i}
          className={`bg-project${c.color} p-4`}
          alt={c.name}
          src={c.image.url}
          height={c.image.height}
          width={c.image.width}
        />
      ))}

      {methodology && <Image className="!relative bg-white p-4" alt="pro1" src="/assets/fran-methodology.png" fill />}
    </div>
  </div>
)
