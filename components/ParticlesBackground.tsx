'use client'

export default function ParticlesBackground() {
  // Simplified particles background - can be enhanced later
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Simple animated background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  )
}
