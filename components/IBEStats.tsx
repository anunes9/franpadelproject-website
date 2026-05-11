'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 3, suffix: '', label: 'Days of Training' },
  { value: 14, suffix: '', label: 'Players' },
  { value: 6, suffix: '+', label: 'Court Hours Daily' },
  { value: 2, suffix: '', label: 'Countries' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      obs.disconnect()
      let v = 0
      const inc = target / (1400 / 16)
      const t = setInterval(() => {
        v += inc
        if (v >= target) { setCount(target); clearInterval(t) }
        else setCount(Math.floor(v))
      }, 16)
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function IBEStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
      {STATS.map((s, i) => (
        <div
          key={i}
          className={`relative px-8 py-8 border-white/5 ${i > 0 ? 'border-l' : ''}`}
        >
          <div className="font-display font-black text-5xl md:text-7xl text-fran-teal leading-none tabular-nums mb-2">
            <Counter target={s.value} suffix={s.suffix} />
          </div>
          <div className="text-white/40 text-xs font-mono tracking-widest uppercase">{s.label}</div>
          <div className="absolute top-0 left-0 w-0.5 h-8 bg-fran-teal/40" />
        </div>
      ))}
    </div>
  )
}
