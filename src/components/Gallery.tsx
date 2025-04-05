import React from 'react'
import { GalleryProps } from '../types'

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className="py-12 px-4 bg-blush">
      <h2 className="text-center text-3xl sm:text-4xl font-serif font-bold text-rose-900 mb-8">
        Our Memories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full h-auto rounded-xl shadow-md object-cover aspect-[4/3] hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery