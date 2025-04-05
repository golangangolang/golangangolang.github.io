import React, { useState } from 'react'
import { RSVPFormProps, RSVPData } from '../types'

const RSVPForm: React.FC<RSVPFormProps> = ({ onSubmit, status = 'idle' }) => {
  const [form, setForm] = useState<RSVPData>({
    name: '',
    email: '',
    attending: true,
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <section className="py-12 px-4 bg-white text-neutral-800">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-6">
          RSVP
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 border rounded-md"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 border rounded-md"
          />
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="attending"
              checked={form.attending}
              onChange={handleChange}
              className="accent-rose-600"
            />
            Attending
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
            className="p-3 border rounded-md"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-rose-600 text-white py-3 px-6 rounded-md hover:bg-rose-700 transition-all"
          >
            {status === 'submitting' ? 'Sending...' : 'Send RSVP'}
          </button>
        </form>
        {status === 'success' && (
          <p className="text-green-600 mt-4 text-center">Thanks! We’ve received your RSVP 💌</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-4 text-center">Oops! Something went wrong. Try again.</p>
        )}
      </div>
    </section>
  )
}

export default RSVPForm