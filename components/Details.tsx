'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Details() {
  const sectionRef = useRef<HTMLElement>(null)
  const receptionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(receptionRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
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

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden bg-cream"
    >
      {/* Subtle pattern with animation */}
      <div className="absolute inset-0 leaf-pattern opacity-15" style={{
        animation: 'float 20s ease-in-out infinite',
        backgroundPosition: '0% 0%'
      }} />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 opacity-10 floating-element">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37]">
          <path d="M50 30 Q60 20 70 30 Q70 40 60 50 Q50 60 50 70 Q50 60 40 50 Q30 40 30 30 Q40 20 50 30" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-20 h-20 opacity-10 floating-element" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37] slow-rotate">
          <circle cx="50" cy="30" r="12" fill="currentColor" />
          <circle cx="50" cy="70" r="12" fill="currentColor" />
          <circle cx="30" cy="50" r="12" fill="currentColor" />
          <circle cx="70" cy="50" r="12" fill="currentColor" />
          <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Elegant Wedding Reception Card */}
        <div className="max-w-4xl mx-auto">
          <div 
            ref={receptionRef} 
            className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #FFFFFF 0%, #FDF9F3 50%, #FAF6EE 100%)',
              boxShadow: '0 20px 40px rgba(25, 47, 74, 0.12), 0 0 0 1px rgba(25, 47, 74, 0.1)'
            }}
          >
            {/* VIP Decorative corner elements - Ornate */}
            <div className="absolute top-6 left-6 w-12 h-12">
              <svg viewBox="0 0 48 48" className="w-full h-full text-[#D4AF37]/50">
                <path d="M0 0 L48 0 L48 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="48" cy="0" r="3" fill="currentColor" />
                <circle cx="0" cy="48" r="3" fill="currentColor" />
                <path d="M8 8 L16 8 M8 8 L8 16" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="absolute top-6 right-6 w-12 h-12 rotate-90">
              <svg viewBox="0 0 48 48" className="w-full h-full text-[#D4AF37]/50">
                <path d="M0 0 L48 0 L48 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="48" cy="0" r="3" fill="currentColor" />
                <circle cx="0" cy="48" r="3" fill="currentColor" />
                <path d="M8 8 L16 8 M8 8 L8 16" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="absolute bottom-6 left-6 w-12 h-12 -rotate-90">
              <svg viewBox="0 0 48 48" className="w-full h-full text-[#D4AF37]/50">
                <path d="M0 0 L48 0 L48 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="48" cy="0" r="3" fill="currentColor" />
                <circle cx="0" cy="48" r="3" fill="currentColor" />
                <path d="M8 8 L16 8 M8 8 L8 16" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="absolute bottom-6 right-6 w-12 h-12 rotate-180">
              <svg viewBox="0 0 48 48" className="w-full h-full text-[#D4AF37]/50">
                <path d="M0 0 L48 0 L48 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="48" cy="0" r="3" fill="currentColor" />
                <circle cx="0" cy="48" r="3" fill="currentColor" />
                <path d="M8 8 L16 8 M8 8 L8 16" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            
            {/* VIP Ornamental border - Double line with pattern */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Outer border */}
              <div className="absolute inset-2 rounded-3xl border border-[#D4AF37]/30" />
              {/* Inner border */}
              <div className="absolute inset-4 rounded-3xl border border-[#D4AF37]/20" />
              
              {/* Decorative dots at corners */}
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#D4AF37]/40" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#D4AF37]/40" />
              <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#D4AF37]/40" />
              <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#D4AF37]/40" />
              
              {/* Ornamental pattern on sides */}
              <div className="absolute top-1/2 left-2 -translate-y-1/2">
                <div className="flex flex-col gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
                </div>
              </div>
              <div className="absolute top-1/2 right-2 -translate-y-1/2">
                <div className="flex flex-col gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
                </div>
              </div>
              <div className="absolute left-1/2 top-2 -translate-x-1/2">
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
                </div>
              </div>
              <div className="absolute left-1/2 bottom-2 -translate-x-1/2">
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
                </div>
              </div>
            </div>
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="font-script text-5xl md:text-6xl lg:text-7xl text-[#D4AF37] mb-4">
                Tiệc Cưới
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10">
              {/* Time Section */}
              <div className="text-center">
                <p className="font-montserrat text-xs text-navy/60 uppercase tracking-[0.3em] mb-8 font-semibold">
                  Thời Gian
                </p>
                <div className="min-h-[200px] md:min-h-[240px] flex flex-col justify-center items-center">
                  <p className="font-playfair text-6xl md:text-7xl text-[#D4AF37] font-light mb-6 leading-none">
                    11:00
                  </p>
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6" />
                  <p className="font-script text-2xl md:text-3xl text-navy/80 mb-3">
                    Thứ Bảy
                  </p>
                  <p className="font-playfair text-3xl md:text-4xl text-navy font-medium">
                    03.01.2026
                  </p>
                </div>
              </div>

              {/* Location Section */}
              <div className="text-center">
                <p className="font-montserrat text-xs text-navy/60 uppercase tracking-[0.3em] mb-8 font-semibold">
                  Địa Điểm
                </p>
                <div className="min-h-[200px] md:min-h-[240px] flex flex-col justify-center items-center">
                  <p className="font-playfair text-4xl md:text-5xl text-[#D4AF37] font-light mb-6 leading-tight">
                    Điểm Dừng Chân<br />Hương Nhung
                  </p>
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6" />
                  <p className="font-montserrat text-base md:text-lg text-navy/70 leading-relaxed">
                    KM 20, QL 14 - Ấp 6<br />
                    Xã Đồng Nai - T. Đồng Nai
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/30" />
              <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/30" />
            </div>

            {/* Map Link */}
            <div className="text-center">
              <a
                href="https://maps.google.com/maps?q=Diem+Dung+Chan+Huong+Nhung+Dong+Nai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent to-accent-light text-cream font-montserrat text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Xem trên Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
