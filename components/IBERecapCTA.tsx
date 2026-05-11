import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import { t } from '@/lib/i18n'

interface IBERecapCTAProps {
  locale: string
}

export default function IBERecapCTA({ locale }: IBERecapCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a1e33] py-24">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 100% 50%, rgba(104,191,163,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-display font-black leading-none"
          style={{
            fontSize: '22vw',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(104,191,163,0.05)',
            letterSpacing: '-0.05em',
          }}
        >
          IBE
        </span>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="flex items-center gap-2 text-fran-teal border border-fran-teal/30 px-4 py-1.5 text-xs font-mono tracking-widest uppercase bg-fran-teal/5">
                {t(locale, 'ibe-cta', 'badge-edition')}
              </span>
              <span className="flex items-center gap-2 text-white/50 border border-white/10 px-4 py-1.5 text-xs font-mono tracking-widest uppercase">
                <Calendar className="w-3 h-3" />
                {t(locale, 'ibe-cta', 'badge-date')}
              </span>
              <span className="flex items-center gap-2 text-white/50 border border-white/10 px-4 py-1.5 text-xs font-mono tracking-widest uppercase">
                <MapPin className="w-3 h-3" />
                Madrid
              </span>
            </div>

            <h2
              className="font-display font-black leading-none tracking-tighter mb-6 text-white"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              <span className="block text-fran-teal">{t(locale, 'ibe-cta', 'heading-line-1')}</span>
              <span className="block">{t(locale, 'ibe-cta', 'heading-line-2')}</span>
              <span
                className="block"
                style={{ color: 'transparent', WebkitTextStroke: '2px white' }}
              >
                {t(locale, 'ibe-cta', 'heading-line-3')}
              </span>
            </h2>

            <p className="text-white/50 text-base md:text-lg leading-relaxed border-l-2 border-fran-teal/40 pl-6 mb-10 max-w-lg">
              {t(locale, 'ibe-cta', 'description')}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`/${locale}/ibe`}
                className="group inline-flex items-center gap-3 bg-fran-teal text-fran-navy px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors clip-corner-br"
              >
                {t(locale, 'ibe-cta', 'watch-recap')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-white/20 text-white px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors"
              >
                {t(locale, 'ibe-cta', 'join-next')}
              </a>
            </div>
          </div>

          {/* Right: stats strip */}
          <div className="grid grid-cols-2 gap-px bg-white/5">
            {[
              { value: '16', label: t(locale, 'ibe-cta', 'stat-players') },
              { value: '4', label: t(locale, 'ibe-cta', 'stat-days') },
              { value: '2', label: t(locale, 'ibe-cta', 'stat-countries') },
              { value: '1', label: t(locale, 'ibe-cta', 'stat-methodology') },
            ].map((stat, i) => (
              <div key={i} className="bg-[#0a1e33] p-8 group hover:bg-fran-navy/60 transition-colors duration-300">
                <p
                  className="font-display font-black text-fran-teal leading-none mb-2"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {stat.value}
                </p>
                <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
