'use client'

import { useState, FormEvent } from 'react'
import { Mail, MapPin, Instagram, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-fran-teal to-teal-700 rounded-[3rem] p-8 md:p-20 shadow-2xl relative overflow-hidden">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-fran-navy/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="text-fran-navy">
              <h2 className="font-display font-black text-4xl md:text-6xl uppercase mb-8 leading-tight">
                Start Your <br /> <span className="text-white">Evolution</span>
              </h2>
              <p className="text-fran-navy/80 text-lg mb-12 font-medium">
                Ready to take your padel game to the professional level? <br /> Reach out to us for clinic availability
                and personalized training plans.
              </p>

              <div className="space-y-6">
                <div
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => (window.location.href = 'mailto:fran@franpadelproject.com')}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-fran-navy group-hover:bg-fran-navy group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-60">Email</div>
                    <div className="font-bold text-lg group-hover:underline transition-colors">
                      fran@franpadelproject.com
                    </div>
                  </div>
                </div>

                <a
                  className="flex items-center gap-4 group cursor-pointer"
                  href="https://www.instagram.com/franfreitas.padel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-fran-navy group-hover:bg-fran-navy group-hover:text-white transition-colors">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-60">Instagram</div>
                    <div className="font-bold text-lg group-hover:underline transition-colors">@franfreitas.padel</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-fran-navy group-hover:bg-fran-navy group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-60">Base</div>
                    <div className="font-bold text-lg">Lisbon, Portugal</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2">
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2">
                    <AlertCircle size={20} />
                    <span className="text-sm font-medium">
                      {errorMessage || 'Failed to send message. Please try again.'}
                    </span>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-fran-teal transition-colors rounded-t-lg"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-fran-teal transition-colors rounded-t-lg"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-fran-teal transition-colors rounded-t-lg"
                    placeholder="Tell us about your level..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-fran-navy text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
