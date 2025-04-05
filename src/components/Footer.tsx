import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-champagne text-neutral-700 text-center py-6 text-sm">
      <p className="mb-2">
        © {new Date().getFullYear()} Emma & Liam — All rights reserved
      </p>
      <div className="flex justify-center gap-4 text-rose-700">
        <a
          href="mailto:emmaandliam@wedding.com"
          className="hover:underline"
          aria-label="Email us"
        >
          emmaandliam@wedding.com
        </a>
        <a
          href="https://instagram.com/emmaandliam"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          aria-label="Instagram"
        >
          @emmaandliam
        </a>
      </div>
    </footer>
  )
}

export default Footer