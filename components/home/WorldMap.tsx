import React from 'react'
import { WORLD_LOCATIONS } from '@/lib/constants'
import Image from 'next/image'

const WorldMap: React.FC = () => {
  return (
    <section id="world" className="bg-fran-navy pt-32 relative overflow-hidden">
      {/* Decorative Abstract Map Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(#68bfa3 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="font-display font-black text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 uppercase mb-4">
            Global <br /> Reach
          </h2>
          <p className="text-fran-teal text-xl max-w-2xl">The Fran Padel Project methodology is spreading worldwide.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {WORLD_LOCATIONS.map((loc, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl w-full md:w-[300px] hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="font-bold text-fran-teal tracking-widest uppercase text-sm">{loc.country}</span>
              </div>
              <h3 className="font-display font-black text-3xl text-white uppercase mb-4">{loc.name}</h3>
              <div className="space-y-2">
                {loc.products.map((p, i) => (
                  <div key={i} className="text-xs text-gray-400 uppercase tracking-wide border-t border-white/5 pt-2">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Image
        src="/assets/mapa.png"
        alt="World Map"
        width={1200}
        height={600}
        className="container mx-auto mt-20 object-cover opacity-70"
      />
    </section>
  )
}

export default WorldMap
