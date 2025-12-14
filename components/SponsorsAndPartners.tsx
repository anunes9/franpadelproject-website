import { SPONSORS, PARTNER_CLUBS, PartnerClub, Sponsor } from '@/lib/constants'
import Image from 'next/image'
import { Award, Handshake } from 'lucide-react'
import Link from 'next/link'
import { t } from '@/lib/i18n'

interface SponsorsAndPartnersProps {
  locale: string
}

export default function SponsorsAndPartners({ locale }: SponsorsAndPartnersProps) {
  return (
    <section id="sponsors-partners" className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Sponsors Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <Award className="text-fran-teal w-8 h-8" />
            <h2 className="text-fran-navy font-display font-black text-4xl md:text-6xl uppercase">
              {t(locale, 'sponsors', 'sponsors')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {SPONSORS.map((sponsor: Sponsor, index: number) => (
              <Link
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                key={index}
                className="bg-slate-50 p-6 md:p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-100 group flex items-center justify-center aspect-square"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Partner Clubs Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <Handshake className="text-fran-teal w-8 h-8" />
            <h2 className="text-fran-navy font-display font-black text-4xl md:text-6xl uppercase">
              {t(locale, 'sponsors', 'partner-clubs')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PARTNER_CLUBS.map((club: PartnerClub, index: number) => (
              <Link
                href={club.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                prefetch={false}
                className="bg-slate-50 p-6 md:p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-100 group overflow-hidden"
              >
                <div className="relative w-full aspect-video flex items-center justify-center mb-4">
                  <Image
                    src={club.logo}
                    alt={club.name}
                    width={400}
                    height={200}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <h3 className="text-center text-slate-700 font-bold text-lg group-hover:text-fran-navy transition-colors">
                  {club.name}
                </h3>
                <p className="text-center text-slate-500 text-sm">{club.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
