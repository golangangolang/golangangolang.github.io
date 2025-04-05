import HeroSection from './components/HeroSection'
import EventInfo from './components/EventInfo'
import Gallery from './components/Gallery'
import RSVPForm from './components/RSVPForm'
import Footer from './components/Footer'
import { useState } from 'react'
import { RSVPData } from './types'

const imageData = [
  { src: '/assets/photo1.jpg', alt: 'Emma and Liam dancing' },
  { src: '/assets/photo2.jpg', alt: 'Engagement ring close-up' },
  { src: '/assets/photo3.jpg', alt: 'Proposal moment' },
  { src: '/assets/photo4.jpg', alt: 'Couple at sunset' }
]

function App() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleRSVP = async (data: RSVPData) => {
    setStatus('submitting')
    try {
      console.log('RSVP Submitted:', data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <HeroSection
        title="Emma & Liam"
        subtitle="June 21, 2025 — You're Invited"
        bgImage="/assets/hero.jpg"
      />

      <EventInfo
        event={{
          title: 'Wedding Ceremony',
          date: 'Saturday, June 21, 2025',
          time: '4:00 PM',
          location: 'Meadow View Gardens, San Luis Obispo, CA',
          mapUrl: 'https://maps.google.com?q=Meadow+View+Gardens+San+Luis+Obispo'
        }}
      />

      <Gallery images={imageData} />
      <RSVPForm onSubmit={handleRSVP} status={status} />
      <Footer />
    </>
  )
}

export default App