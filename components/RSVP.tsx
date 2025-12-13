'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function RSVP() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(formRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format message for Messenger
    const messengerMessage = formData.name 
      ? `Xin chào! Tôi là ${formData.name}.\n\n${formData.message || 'Chúc mừng cô dâu chú rể!'}`
      : formData.message || 'Chúc mừng cô dâu chú rể!'
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(messengerMessage)
    
    // Open Messenger with pre-filled message
    const messengerUrl = `https://www.facebook.com/messages/t/7183761618419290?text=${encodedMessage}`
    window.open(messengerUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-cream overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="leaf-pattern w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-navy mb-4">
            Gửi Lời Chúc
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
            <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
          <p className="font-montserrat text-sm text-navy/60 max-w-md mx-auto">
            Gửi lời chúc đến cô dâu chú rể qua Messenger
          </p>
        </div>

        {/* Message Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-navy/10"
        >
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block font-montserrat text-sm text-navy mb-2">
                Họ và Tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-montserrat text-navy bg-white"
                placeholder="Nhập họ tên của bạn (tùy chọn)"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block font-montserrat text-sm text-navy mb-2">
                Lời Chúc <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-montserrat text-navy bg-white resize-none"
                placeholder="Gửi lời chúc đến cô dâu chú rể..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="glow-button w-full py-4 bg-accent text-cream font-montserrat font-medium uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-accent-dark flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Gửi Lời Chúc qua Messenger
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <p className="font-montserrat text-sm text-navy/60 mb-2">
            Nếu có thắc mắc, vui lòng liên hệ:
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <a href="tel:0397813774" className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-montserrat">Chú Rể: 0397 813 774</span>
            </a>
            <a href="tel:0965542727" className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-montserrat">Cô Dâu: 0965 542 727</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Flower and Heart Elements */}
      {/* Flower - top left */}
      <svg className="absolute top-20 left-10 w-24 h-24 opacity-12 rotate-12 animate-float" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="rsvpFlower1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="30" r="10" fill="url(#rsvpFlower1)" />
        <circle cx="50" cy="70" r="10" fill="url(#rsvpFlower1)" />
        <circle cx="30" cy="50" r="10" fill="url(#rsvpFlower1)" />
        <circle cx="70" cy="50" r="10" fill="url(#rsvpFlower1)" />
        <circle cx="50" cy="50" r="7" fill="#FFD700" opacity="0.5" />
        <circle cx="50" cy="50" r="3" fill="#D4AF37" />
      </svg>
      {/* Heart - bottom right */}
      <svg className="absolute bottom-20 right-10 w-28 h-28 opacity-10 -rotate-12 animate-float" style={{ animationDelay: '1s' }} viewBox="0 0 100 100">
        <defs>
          <linearGradient id="rsvpHeart1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </defs>
        <path d="M50 30 Q60 20 70 30 Q70 40 60 50 Q50 60 50 70 Q50 60 40 50 Q30 40 30 30 Q40 20 50 30" fill="url(#rsvpHeart1)" />
        <circle cx="45" cy="35" r="2.5" fill="#FFD700" opacity="0.6" />
        <circle cx="55" cy="35" r="2.5" fill="#FFD700" opacity="0.6" />
      </svg>
    </section>
  )
}

