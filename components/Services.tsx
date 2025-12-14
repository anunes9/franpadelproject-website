import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { t } from '@/lib/i18n'
import { Globe, Users, Award, Briefcase, Zap, Trophy, Heart } from 'lucide-react'
import { pt } from '@/locales/pt'
import { en } from '@/locales/en'

interface ServicesProps {
  locale: string
}

// Helper function to get translated clinic data
function getTranslatedClinics(locale: string) {
  const translations = locale === 'pt' ? pt : en
  const clinicKeys = [
    'iberian-padel-experience',
    'train-as-a-pro',
    'master-clinic-evolution',
    'padel-wonderland',
    'master-clinic',
    'padel-company-big-day',
    'play-like-a-pro',
  ]

  const icons = [
    <Globe className="w-10 h-10" />,
    <Zap className="w-10 h-10" />,
    <Users className="w-10 h-10" />,
    <Award className="w-10 h-10" />,
    <Trophy className="w-10 h-10" />,
    <Briefcase className="w-10 h-10" />,
    <Heart className="w-10 h-10" />,
  ]

  return clinicKeys.map((key, index) => {
    // @ts-expect-error - Dynamic access to nested objects
    const clinicData = translations.services[key]
    return {
      title: clinicData?.title || '',
      description: clinicData?.description || '',
      features: [
        clinicData?.features?.['feature-1'],
        clinicData?.features?.['feature-2'],
        clinicData?.features?.['feature-3'],
        clinicData?.features?.['feature-4'],
      ].filter(Boolean),
      icon: icons[index],
    }
  })
}

export default function Services({ locale }: ServicesProps) {
  const translatedClinics = getTranslatedClinics(locale)
  return (
    <section id="clinics" className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/fran-padel-project-logo.svg"
                alt="Fran Padel Project"
                width={128}
                height={128}
                className="h-32 w-auto"
              />
              <h2 className="text-fran-navy font-display font-black text-5xl md:text-7xl uppercase pt-4 ">
                {t(locale, 'services', 'clinics')}
              </h2>
            </div>
            <p className="text-slate-500 mt-4 text-lg">{t(locale, 'services', 'clinics-description')}</p>
          </div>
          <a
            href="#contact"
            className="text-fran-navy font-bold flex items-center gap-2 hover:gap-4 transition-all whitespace-nowrap"
          >
            {t(locale, 'services', 'see-availability')} <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {translatedClinics.map((clinic, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-100 group"
            >
              <div className="w-14 h-14 bg-white text-fran-navy rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-fran-teal group-hover:text-white transition-colors">
                {clinic.icon}
              </div>

              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{clinic.title}</h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">{clinic.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {clinic.features.map((feature, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold text-slate-400 uppercase bg-slate-200/50 px-2 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
