import {
  MapPin,
  Calendar,
  Play,
  ChevronRight,
  Globe,
  Zap,
  Target,
  Users,
} from 'lucide-react'
import Image from 'next/image'
import IBEStats from './IBEStats'
import { getSignedImageUrls } from '@/lib/backblaze'
import { IBE_GALLERY_IMAGES } from '@/lib/constants'

interface IBERecapProps {
  locale: string
}

const MOMENTS = [
  {
    icon: <Target className='w-6 h-6' />,
    tag: 'Training',
    title: 'FRAN Methodology in Action',
    desc: 'Full-day training sessions led by Francisco Freitas, applying the core FRAN methodology with advanced technical and tactical drills on the courts of Madrid.',
  },
  {
    icon: <Users className='w-6 h-6' />,
    tag: 'Community',
    title: 'International Player Mix',
    desc: 'Players from across Portugal and Spain came together, forming lasting connections through shared passion for padel and high-performance training.',
  },
  {
    icon: <Zap className='w-6 h-6' />,
    tag: 'Analysis',
    title: 'Video & Tactical Breakdowns',
    desc: 'Deep-dive coaching sessions analyzing real match footage, uncovering technical gaps and tactical opportunities with immediate on-court application.',
  },
]

export default async function IBERecap({ locale: _locale }: IBERecapProps) {
  const imageUrls = await getSignedImageUrls(IBE_GALLERY_IMAGES)

  return (
    <>
      <style>{`
        @keyframes ibe-up {
          from { opacity: 0; transform: translateY(2rem); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ibe-reveal {
          animation: ibe-up 0.7s ease both;
          animation-timeline: view();
          animation-range: entry 0% entry 35%;
        }
        .ibe-reveal-delay-1 { animation-delay: 100ms; }
        .ibe-reveal-delay-2 { animation-delay: 200ms; }
      `}</style>

      <div
        className='min-h-screen overflow-x-hidden'
        style={{ background: '#0a1e33' }}
      >
        {/* ── HERO ── */}
        <section className='relative min-h-[100svh] flex flex-col justify-end overflow-hidden'>
          <div className='absolute inset-0 grid-bg opacity-60' />
          <div
            className='absolute inset-0'
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(104,191,163,0.08) 0%, transparent 70%)',
            }}
          />
          <div
            className='absolute inset-0 pointer-events-none'
            style={{
              background:
                'linear-gradient(160deg, transparent 55%, rgba(104,191,163,0.04) 55.1%, rgba(104,191,163,0.04) 100%)',
            }}
          />
          <div
            className='absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden'
            aria-hidden
          >
            <span
              className='font-display font-black leading-none'
              style={{
                fontSize: '28vw',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(104,191,163,0.07)',
                letterSpacing: '-0.05em',
              }}
            >
              IBE
            </span>
          </div>

          <div className='relative z-10 container max-w-7xl mx-auto px-6 pb-20 pt-40'>
            <div className='flex flex-wrap items-center gap-3 mb-8'>
              <span className='flex items-center gap-2 text-fran-teal border border-fran-teal/30 px-4 py-1.5 text-xs font-mono tracking-widest uppercase bg-fran-teal/5'>
                <Globe className='w-3 h-3' />
                Edition 2025
              </span>
              <span className='flex items-center gap-2 text-white/50 border border-white/10 px-4 py-1.5 text-xs font-mono tracking-widest uppercase'>
                <MapPin className='w-3 h-3' />
                Madrid, Spain
              </span>
              <span className='flex items-center gap-2 text-white/50 border border-white/10 px-4 py-1.5 text-xs font-mono tracking-widest uppercase'>
                <Calendar className='w-3 h-3' />
                September 2025
              </span>
            </div>

            <h1
              className='font-display font-black leading-none tracking-tighter mb-4'
              style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}
            >
              <span className='block text-white'>IBERIAN</span>
              <span
                className='block'
                style={{
                  background:
                    'linear-gradient(90deg, #68bfa3 0%, #a8dfd0 50%, #68bfa3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                PADEL
              </span>
              <span className='block text-white'>EXPERIENCE</span>
            </h1>

            <div className='flex flex-col sm:flex-row items-start sm:items-end gap-8 mt-8'>
              <p className='text-white/50 text-base md:text-lg max-w-md leading-relaxed border-l-2 border-fran-teal/40 pl-6'>
                An intensive padel experience bringing together players,
                coaches, and the FRAN methodology in the heart of Madrid.
              </p>
              <div className='ml-auto hidden sm:block'>
                <div className='w-px h-24 bg-gradient-to-b from-fran-teal/60 to-transparent mx-auto mb-2' />
                <p className='text-white/20 text-xs font-mono tracking-widest uppercase rotate-90 origin-top-left translate-x-full -translate-y-2'>
                  Scroll
                </p>
              </div>
            </div>
          </div>

          <div className='absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a1e33] to-transparent' />
        </section>

        {/* ── STATS BAR ── */}
        <section className='relative z-10 border-y border-white/5'>
          <div className='container max-w-7xl mx-auto px-6 py-16'>
            <IBEStats />
          </div>
        </section>

        {/* ── OVERVIEW ── */}
        <section className='py-24 md:py-36 ibe-reveal'>
          <div className='container max-w-7xl mx-auto px-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <div>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-8 h-px bg-fran-teal' />
                  <span className='text-fran-teal text-xs font-mono tracking-widest uppercase'>
                    About the Event
                  </span>
                </div>
                <h2
                  className='font-display font-black leading-tight tracking-tighter mb-8 text-white'
                  style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                >
                  MORE THAN A CLINIC.
                  <br />
                  <span className='outline-text-teal'>A FULL EXPERIENCE.</span>
                </h2>
                <div className='space-y-4 text-white/60 leading-relaxed text-base md:text-lg'>
                  <p>
                    The Iberian Padel Experience is one of the most intensive
                    padel events in the FRAN Padel Project calendar — a
                    multi-day immersion in Madrid designed for players who want
                    to train, think, and compete at a higher level.
                  </p>
                  <p>
                    Guided by Francisco Freitas and the full FRAN technical
                    team, each edition brings together groups of 8 to 16 players
                    for an experience that goes beyond the court — combining
                    technical coaching, tactical analysis, physical
                    conditioning, and shared competition.
                  </p>
                </div>
                <div className='mt-10'>
                  <a
                    href='#contact'
                    className='group inline-flex items-center gap-3 bg-fran-teal text-fran-navy px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors clip-corner-br'
                  >
                    Join Next Edition
                    <ChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  </a>
                </div>
              </div>

              <div className='relative'>
                <div className='relative w-full aspect-[4/3] clip-corner-br overflow-hidden'>
                  <Image
                    src={imageUrls[0]}
                    alt='IBE 2026'
                    fill
                    unoptimized
                    className='object-cover'
                  />
                </div>
                <div className='absolute -bottom-6 -left-6 glass-panel px-6 py-5 clip-corner-tl hidden md:block'>
                  <p className='text-fran-teal text-xs font-mono tracking-widest uppercase mb-1'>
                    Location
                  </p>
                  <p className='text-white font-display font-black text-xl'>
                    Madrid, Spain
                  </p>
                  <p className='text-white/40 text-sm mt-0.5'>September 2025</p>
                </div>
                <div className='absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-fran-teal/30' />
              </div>
            </div>
          </div>
        </section>

        {/* ── PHOTO GALLERY ── */}
        <section className='py-24 relative overflow-hidden'>
          <div
            className='absolute inset-0 opacity-30'
            style={{
              background:
                'radial-gradient(ellipse 100% 50% at 50% 50%, rgba(18,44,73,0.8) 0%, transparent 100%)',
            }}
          />
          <div className='relative z-10 container max-w-7xl mx-auto px-6'>
            <div className='flex items-end justify-between mb-12 ibe-reveal'>
              <div>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-8 h-px bg-fran-teal' />
                  <span className='text-fran-teal text-xs font-mono tracking-widest uppercase'>
                    Gallery
                  </span>
                </div>
                <h2 className='font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter leading-tight'>
                  Captured
                  <br />
                  <span className='outline-text'>Moments</span>
                </h2>
              </div>
              <p className='text-white/30 text-sm font-mono tracking-widest uppercase hidden md:block text-right'>
                Photos
                <br />
                Arriving Soon
              </p>
            </div>

            <div className='grid grid-cols-12 grid-rows-[auto_auto] gap-3 ibe-reveal'>
              <div className='relative col-span-12 md:col-span-7 row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[480px] overflow-hidden'>
                <Image
                  src={imageUrls[1]}
                  alt='IBE 2026'
                  fill
                  unoptimized
                  className='object-cover'
                />
              </div>
              <div className='relative col-span-6 md:col-span-5 aspect-square overflow-hidden'>
                <Image
                  src={imageUrls[2]}
                  alt='IBE 2026'
                  fill
                  unoptimized
                  className='object-cover'
                />
              </div>
              <div className='relative col-span-6 md:col-span-5 aspect-square overflow-hidden'>
                <Image
                  src={imageUrls[3]}
                  alt='IBE 2026'
                  fill
                  unoptimized
                  className='object-cover'
                />
              </div>
            </div>

            <div className='grid grid-cols-4 gap-3 mt-3 ibe-reveal ibe-reveal-delay-1'>
              {imageUrls.slice(4).map((url, i) => (
                <div
                  key={i}
                  className='relative col-span-1 aspect-video overflow-hidden'
                >
                  <Image
                    src={url}
                    alt={`IBE 2026 photo ${i + 5}`}
                    fill
                    unoptimized
                    className='object-cover'
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── KEY MOMENTS ── */}
        <section className='py-24 border-t border-white/5'>
          <div className='container max-w-7xl mx-auto px-6'>
            <div className='flex items-center gap-3 mb-4 ibe-reveal'>
              <div className='w-8 h-px bg-fran-teal' />
              <span className='text-fran-teal text-xs font-mono tracking-widest uppercase'>
                Highlights
              </span>
            </div>
            <h2 className='font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter mb-16 ibe-reveal'>
              Key Moments
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5'>
              {MOMENTS.map((m, i) => (
                <div
                  key={i}
                  className='relative bg-[#0a1e33] p-8 md:p-10 group hover:bg-fran-navy/80 transition-colors duration-500 ibe-reveal'
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div
                    className='absolute top-8 right-8 font-display font-black leading-none select-none'
                    style={{
                      color: 'rgba(104,191,163,0.06)',
                      fontSize: '6rem',
                    }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='text-fran-teal'>{m.icon}</div>
                    <span className='text-fran-teal text-xs font-mono tracking-widest uppercase border border-fran-teal/20 px-2 py-0.5'>
                      {m.tag}
                    </span>
                  </div>
                  <h3 className='font-display font-black text-xl md:text-2xl text-white uppercase tracking-tight mb-4 leading-snug'>
                    {m.title}
                  </h3>
                  <p className='text-white/50 text-sm leading-relaxed'>
                    {m.desc}
                  </p>
                  <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-fran-teal group-hover:w-full transition-all duration-500' />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VIDEO ── */}
        <section className='py-24 border-t border-white/5'>
          <div className='container max-w-7xl mx-auto px-6'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-8 h-px bg-fran-teal' />
              <span className='text-fran-teal text-xs font-mono tracking-widest uppercase'>
                Video
              </span>
            </div>
            <h2 className='font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter leading-tight mb-10 ibe-reveal'>
              Watch the
              <br />
              Recap
            </h2>

            {/* pure-CSS hover via group */}
            <div
              className='relative overflow-hidden cursor-pointer group ibe-reveal'
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cpath d='M0 0h80v80H0z' fill='%230f2640'/%3E%3Cpath d='M20 20h40v40H20z' fill='%231a3c5e' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px',
              }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-fran-navy via-fran-dark to-black opacity-90' />
              <div
                className='absolute inset-0 opacity-5'
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(104,191,163,0.5) 2px, rgba(104,191,163,0.5) 3px)`,
                }}
              />
              <div className='relative z-10 flex flex-col items-center justify-center min-h-[320px] md:min-h-[480px] gap-6 p-12'>
                <div className='w-20 h-20 rounded-full border-2 border-fran-teal flex items-center justify-center bg-fran-teal/10 group-hover:bg-fran-teal group-hover:scale-110 transition-all duration-300'>
                  <Play
                    className='w-8 h-8 ml-1 text-fran-teal group-hover:text-fran-navy transition-colors duration-300'
                    fill='currentColor'
                  />
                </div>
                <div className='text-center'>
                  <p className='text-white font-display font-black text-2xl md:text-3xl uppercase tracking-tight mb-2'>
                    Event Highlights Reel
                  </p>
                  <p className='text-white/40 text-sm font-mono tracking-widest uppercase'>
                    Video Coming Soon
                  </p>
                </div>
                <div className='flex gap-1 mt-2'>
                  {[18, 10, 28, 14, 22, 8, 30, 16, 24, 12, 20, 26].map(
                    (h, i) => (
                      <div
                        key={i}
                        className='w-1 rounded-full bg-fran-teal/40'
                        style={{ height: `${h}px` }}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUOTE ── */}
        <section className='py-24 relative overflow-hidden'>
          <div
            className='absolute inset-0'
            style={{
              background:
                'linear-gradient(135deg, rgba(104,191,163,0.04) 0%, transparent 50%)',
            }}
          />
          <div className='relative z-10 container max-w-5xl mx-auto px-6 text-center ibe-reveal'>
            <div className='relative inline-block'>
              <span
                className='absolute -top-8 -left-4 font-display font-black text-fran-teal/10 select-none'
                style={{ fontSize: '10rem', lineHeight: 1 }}
                aria-hidden
              >
                "
              </span>
              <blockquote className='relative font-display font-black text-2xl md:text-4xl lg:text-5xl text-white uppercase tracking-tighter leading-tight mb-10'>
                Every player who steps onto that court in Madrid leaves a
                different athlete.
              </blockquote>
            </div>
            <div className='flex items-center justify-center gap-4'>
              <div className='w-12 h-px bg-fran-teal/40' />
              <div>
                <p className='text-white font-bold text-sm uppercase tracking-wider'>
                  Francisco Freitas
                </p>
                <p className='text-fran-teal text-xs font-mono tracking-widest uppercase mt-0.5'>
                  Founder, FRAN Padel Project
                </p>
              </div>
              <div className='w-12 h-px bg-fran-teal/40' />
            </div>
          </div>
        </section>

        {/* ── NEXT EDITION CTA ── */}
        <section className='py-24 border-t border-white/5 relative overflow-hidden'>
          <div className='absolute inset-0 grid-bg opacity-30' />
          <div
            className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none'
            style={{ background: 'rgba(104,191,163,0.04)' }}
          />
          <div className='relative z-10 container max-w-7xl mx-auto px-6'>
            <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 ibe-reveal'>
              <div className='max-w-xl'>
                <span className='text-fran-teal text-xs font-mono tracking-widest uppercase mb-4 block'>
                  Next Edition
                </span>
                <h2 className='font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter leading-tight mb-4'>
                  Ready for Your
                  <br />
                  <span className='outline-text-teal'>IBE Experience?</span>
                </h2>
                <p className='text-white/50 text-base md:text-lg leading-relaxed'>
                  Spots are limited to 8–16 players. Get in touch to reserve
                  your place in the next edition of the Iberian Padel Experience
                  in Madrid.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <a
                  href='#contact'
                  className='group inline-flex items-center gap-3 bg-fran-teal text-fran-navy px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors clip-corner-br'
                >
                  Get in Touch
                  <ChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </a>
                <a
                  href='/'
                  className='inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors'
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
