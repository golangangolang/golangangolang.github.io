import React from 'react'
import { HeroSectionProps } from '../types'

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, bgImage }) => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
      <div className="relative z-10 px-6 max-w-xl mx-auto text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-wide mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

export default HeroSection