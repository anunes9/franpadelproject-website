import { CheckCircle2, GraduationCap, Trophy } from 'lucide-react'
import { BIO_DATA } from '@/lib/constants'
import Image from 'next/image'

export default function About() {
  return (
    <section id="bio" className="py-20 md:py-32 relative grid-bg">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4 mb-20 text-center">
          <Image
            src="/assets/fran-padel-project-logo.svg"
            alt="Fran Padel Project"
            width={128}
            height={128}
            className="h-20 md:h-32 w-auto"
          />
          <h2 className="text-white font-display font-black text-4xl md:text-6xl lg:text-7xl uppercase pt-4 ">
            Methodology
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Profile */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/assets/fran-face.png"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain aspect-square bg-white"
                  alt="Francisco Freitas"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h3 className="font-display font-black text-2xl text-black uppercase mb-6 flex items-center gap-3">
                  <GraduationCap className="text-fran-teal" /> Philosophy
                </h3>

                <p className="text-slate-600 leading-relaxed text-lg">
                  "We don't just teach shots; we teach <span className="text-fran-teal font-bold">decision making</span>
                  . The court is a chessboard."
                </p>
                <p className="text-slate-500 mt-4 leading-relaxed">
                  With over 15 years of experience, Fran has developed a unique training system that adapts to every
                  player's level. Combining psychological insights with elite WPT coaching experience to create complete
                  athletes.
                </p>
              </div>

              <h3 className="font-display font-black text-2xl text-black uppercase mb-6 flex items-center gap-3">
                <Trophy className="text-fran-teal" /> Pro Experience
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BIO_DATA.experience.slice(0, 4).map((exp, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-fran-teal shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{exp}</span>
                  </div>
                ))}
              </div>

              <div className="md:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-xl mb-4 text-fran-navy">Main Coach For:</h4>
                <div className="flex flex-wrap gap-3">
                  {BIO_DATA.coached.map((player, i) => (
                    <span
                      key={i}
                      className="bg-fran-navy/5 px-3 py-1 rounded-full text-sm font-semibold text-fran-navy"
                    >
                      {player}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
