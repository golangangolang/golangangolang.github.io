export interface EventDetails {
  title: string
  date: string
  time: string
  location: string
  mapUrl: string
}

export interface RSVPData {
  name: string
  email: string
  attending: boolean
  message?: string
}

export interface HeroSectionProps {
  title: string
  subtitle?: string
  bgImage: string
}

export interface GalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export interface RSVPFormProps {
  onSubmit: (data: RSVPData) => void
  status?: 'idle' | 'submitting' | 'success' | 'error'
}
