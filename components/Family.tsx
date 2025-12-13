'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Family() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.family-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
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
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 leaf-pattern opacity-15" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="family-content max-w-4xl mx-auto">
          {/* Card */}
          <div 
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
            <div className="text-center mb-10">
              <h2 className="font-script text-5xl md:text-6xl lg:text-7xl text-[#D4AF37] mb-4">
                Wedding
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>
            </div>

            {/* Two columns - Always side by side with avatars */}
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10">
              {/* Nhà Trai */}
              <div className="text-center flex flex-col items-center">
                <h3 className="font-playfair text-lg md:text-3xl text-navy mb-3 md:mb-6 font-medium">
                  Nhà Trai
                </h3>
                
                <div className="space-y-0.5 md:space-y-1 mb-3 md:mb-6">
                  <p className="font-montserrat text-xs md:text-base text-navy/70">
                    Ông: <span className="font-medium text-navy">Ngô Đăng Chính</span>
                  </p>
                  <p className="font-montserrat text-xs md:text-base text-navy/70">
                    Bà: <span className="font-medium text-navy">Bùi Thị Hà</span>
                  </p>
                </div>

                <p className="font-montserrat text-[10px] md:text-sm text-navy/50 mb-4 md:mb-8">
                  Ấp 6 - Đông Tân<br className="md:hidden" /> T. Đồng Nai
                </p>

                {/* Avatar - Above name */}
                <div className="relative mb-4 md:mb-6">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    {/* Outer glow effect */}
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-[#E8C547]/15 to-[#D4AF37]/20 blur-xl" style={{ borderRadius: '50%' }} />
                    
                    {/* Decorative SVG border frame */}
                    <svg className="absolute -inset-3 w-full h-full slow-rotate" style={{ borderRadius: '50%' }} viewBox="0 0 200 200">
                      <defs>
                        <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                          <stop offset="50%" stopColor="#E8C547" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
                        </linearGradient>
                        <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#E8C547" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                      
                      {/* Outer decorative ring with pattern */}
                      <circle cx="100" cy="100" r="95" fill="none" stroke="url(#goldGradient1)" strokeWidth="1.5" />
                      <circle cx="100" cy="100" r="88" fill="none" stroke="url(#goldGradient2)" strokeWidth="1" strokeDasharray="4 4" />
                      
                      {/* Decorative elements at cardinal points */}
                      <g>
                        {/* Top */}
                        <circle cx="100" cy="5" r="2.5" fill="#D4AF37" opacity="0.7" />
                        <path d="M 100 0 L 100 10 M 95 5 L 105 5" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
                        {/* Bottom */}
                        <circle cx="100" cy="195" r="2.5" fill="#D4AF37" opacity="0.7" />
                        <path d="M 100 190 L 100 200 M 95 195 L 105 195" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
                        {/* Left */}
                        <circle cx="5" cy="100" r="2.5" fill="#D4AF37" opacity="0.7" />
                        <path d="M 0 100 L 10 100 M 5 95 L 5 105" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
                        {/* Right */}
                        <circle cx="195" cy="100" r="2.5" fill="#D4AF37" opacity="0.7" />
                        <path d="M 190 100 L 200 100 M 195 95 L 195 105" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
                      </g>
                      
                      {/* Inner decorative ring */}
                      <circle cx="100" cy="100" r="82" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.4" />
                      <circle cx="100" cy="100" r="78" fill="none" stroke="url(#goldGradient1)" strokeWidth="1" />
                    </svg>
                    
                    {/* Middle ring with subtle pattern */}
                    <div className="absolute -inset-2 rounded-full border-2 border-[#D4AF37]/30" style={{ borderRadius: '50%' }} />
                    
                    {/* Inner decorative border with gradient */}
                    <div 
                      className="absolute -inset-1 rounded-full"
                      style={{
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.5) 0%, rgba(232, 197, 71, 0.3) 50%, rgba(212, 175, 55, 0.5) 100%)',
                        padding: '2px'
                      }}
                    >
                      <div className="w-full h-full rounded-full bg-transparent" style={{ borderRadius: '50%' }} />
                    </div>
                    
                    {/* Avatar image container with elegant inset border */}
                    <div className="relative w-full h-full rounded-full overflow-hidden z-10" style={{
                      boxShadow: `
                        0 8px 32px rgba(212, 175, 55, 0.25),
                        inset 0 0 0 3px rgba(255, 255, 255, 0.95),
                        inset 0 0 0 5px rgba(212, 175, 55, 0.4)
                      `,
                      borderRadius: '50%'
                    }}>
                      <Image
                        src="/images/avatar/cr.jpg"
                        alt="Chú rể"
                        fill
                        className="object-cover rounded-full"
                        style={{ borderRadius: '50%' }}
                      />
                    </div>
                    
                    {/* Subtle inner glow with continuous pulse */}
                    <div className="absolute -inset-0.5 rounded-full border border-[#D4AF37]/20 glow-pulse" style={{ borderRadius: '50%' }} />
                  </div>
                </div>

                {/* Groom name - Script font */}
                <p className="font-script text-2xl md:text-5xl text-[#D4AF37]">
                  Trung Kiên
                </p>
              </div>

              {/* Nhà Gái */}
              <div className="text-center flex flex-col items-center">
                <h3 className="font-playfair text-lg md:text-3xl text-navy mb-3 md:mb-6 font-medium">
                  Nhà Gái
                </h3>
                
                <div className="space-y-0.5 md:space-y-1 mb-3 md:mb-6">
                  <p className="font-montserrat text-xs md:text-base text-navy/70">
                    Ông: <span className="font-medium text-navy">Phạm Thanh Tâm</span>
                  </p>
                  <p className="font-montserrat text-xs md:text-base text-navy/70 invisible">
                    &nbsp;
                  </p>
                </div>

                <p className="font-montserrat text-[10px] md:text-sm text-navy/50 mb-4 md:mb-8">
                  Thôn 1 - Nghĩa Trung<br className="md:hidden" /> T. Đồng Nai
                </p>

                {/* Avatar - Above name */}
                <div className="relative mb-4 md:mb-6">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    {/* Outer glow effect */}
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-[#E8C547]/15 to-[#D4AF37]/20 blur-xl" style={{ borderRadius: '50%' }} />
                    
                    {/* Decorative SVG border frame */}
                    <svg className="absolute -inset-3 w-full h-full slow-rotate" style={{ borderRadius: '50%' }} viewBox="0 0 200 200">
                      <defs>
                        <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                          <stop offset="50%" stopColor="#E8C547" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
                        </linearGradient>
                        <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#E8C547" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                      
                      {/* Outer decorative ring with pattern */}
                      <circle cx="100" cy="100" r="95" fill="none" stroke="url(#goldGradient1)" strokeWidth="1.5" />
                      <circle cx="100" cy="100" r="88" fill="none" stroke="url(#goldGradient2)" strokeWidth="1" strokeDasharray="4 4" />
                      
                      {/* Decorative elements at cardinal points */}
                      <g>
                        {/* Top */}
                        <circle cx="100" cy="5" r="2.5" fill="#D4AF37" opacity="0.7" />
                        <path d="M 100 0 L 100 10 M 95 5 L 105 5" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
                        {/* Bottom */}
                        <circle cx="100" cy="195" r="2.5" fill="#D4AF37" opacity="0.7" />
                        <path d="M 100 190 L 100 200 M 95 195 L 105 195" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
                        {/* Left */}
                        <circle cx="5" cy="100" r="2.5" fill="#D4AF37" opacity="0.7" />
                        <path d="M 0 100 L 10 100 M 5 95 L 5 105" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
                        {/* Right */}
                        <circle cx="195" cy="100" r="2.5" fill="#D4AF37" opacity="0.7" />
                        <path d="M 190 100 L 200 100 M 195 95 L 195 105" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
                      </g>
                      
                      {/* Inner decorative ring */}
                      <circle cx="100" cy="100" r="82" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.4" />
                      <circle cx="100" cy="100" r="78" fill="none" stroke="url(#goldGradient1)" strokeWidth="1" />
                    </svg>
                    
                    {/* Middle ring with subtle pattern */}
                    <div className="absolute -inset-2 rounded-full border-2 border-[#D4AF37]/30" style={{ borderRadius: '50%' }} />
                    
                    {/* Inner decorative border with gradient */}
                    <div 
                      className="absolute -inset-1 rounded-full"
                      style={{
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.5) 0%, rgba(232, 197, 71, 0.3) 50%, rgba(212, 175, 55, 0.5) 100%)',
                        padding: '2px'
                      }}
                    >
                      <div className="w-full h-full rounded-full bg-transparent" style={{ borderRadius: '50%' }} />
                    </div>
                    
                    {/* Avatar image container with elegant inset border */}
                    <div className="relative w-full h-full rounded-full overflow-hidden z-10" style={{
                      boxShadow: `
                        0 8px 32px rgba(212, 175, 55, 0.25),
                        inset 0 0 0 3px rgba(255, 255, 255, 0.95),
                        inset 0 0 0 5px rgba(212, 175, 55, 0.4)
                      `,
                      borderRadius: '50%'
                    }}>
                      <Image
                        src="/images/avatar/cd.jpg"
                        alt="Cô dâu"
                        fill
                        className="object-cover rounded-full"
                        style={{ borderRadius: '50%' }}
                      />
                    </div>
                    
                    {/* Subtle inner glow with continuous pulse */}
                    <div className="absolute -inset-0.5 rounded-full border border-[#D4AF37]/20 glow-pulse" style={{ borderRadius: '50%' }} />
                  </div>
                </div>

                {/* Bride name - Script font */}
                <p className="font-script text-2xl md:text-5xl text-[#D4AF37]">
                  Ngọc Thùy
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/30" />
              <p className="font-script text-3xl text-[#D4AF37]">Thư Mời</p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/30" />
            </div>

            {/* Invitation text */}
            <p className="text-center font-montserrat text-base text-navy/70 mb-8 max-w-xl mx-auto">
              Trân trọng kính mời quý khách đến dự lễ thành hôn của chúng tôi
            </p>

            {/* Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-[512px] md:w-80 md:h-[640px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/60x120/60x120 (1).jpg"
                  alt="Wedding couple"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Message */}
            <div className="text-center">
              <p className="font-playfair text-xl md:text-2xl text-navy/80 italic">
                "Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
