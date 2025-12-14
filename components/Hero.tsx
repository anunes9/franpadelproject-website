import { ArrowDown, Crosshair } from 'lucide-react'
import { t } from '@/lib/i18n'

interface HeroProps {
  locale: string
}

export default function Hero({ locale }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center overflow-hidden pt-20 lg:pt-32 grid-bg"
    >
      <div className="container px-6 py-6 relative z-10 grid grid-cols-1 gap-12 items-center max-w-7xl w-full mx-auto">
        {/* Left Text */}
        <div className="flex flex-col justify-center">
          <h1 className="font-display font-black text-5xl md:text-8xl lg:text-9xl leading-[0.85] text-white mb-8 tracking-tighter">
            FRAN
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fran-teal to-white text-pretty word-break-keep">
              PADEL PROJECT
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10 border-l border-white/70 pl-6">
            {t(locale, 'hero', 'intro-text')}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#clinics"
              className="group flex items-center gap-4 bg-white text-fran-navy px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-fran-teal transition-colors"
            >
              {t(locale, 'hero', 'explore-clinics')}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#bio"
              className="flex items-center gap-4 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-white border border-white/20 hover:bg-white/5 transition-colors"
            >
              {t(locale, 'hero', 'meet-fran')}
            </a>
          </div>
        </div>

        {/* Right Image Composition */}
        <div className="relative mt-12 lg:mt-0">
          {/* Main Image Frame */}
          <div className="relative z-10 border border-white/10 p-2 bg-white/5 backdrop-blur-sm">
            <video
              className="w-full object-cover filter contrast-125 hover:grayscale-0 transition-all duration-700"
              autoPlay
              loop
              muted
              src="/assets/video.mov"
            />

            {/* Overlay UI elements */}
            <div className="absolute top-6 right-6">
              <Crosshair className="text-fran-teal w-8 h-8 animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
