import React from 'react'
import { EventDetails } from '../types'

interface Props {
  event: EventDetails
}

const EventInfo: React.FC<Props> = ({ event }) => {
  return (
    <section className="py-12 px-6 bg-white text-center text-neutral-800">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4">
          {event.title}
        </h2>
        <p className="text-lg sm:text-xl mb-1">{event.date}</p>
        <p className="text-lg sm:text-xl mb-4">{event.time}</p>
        <a
          href={event.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-rose-600 hover:underline text-lg sm:text-xl"
        >
          {event.location}
        </a>
      </div>
    </section>
  )
}

export default EventInfo