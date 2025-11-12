import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const formData = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thanks! We will reach out shortly.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Book a consultation</h2>
          <p className="mt-3 text-slate-600">Tell us about your needs and a coordinator will contact you within one business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-slate-700">Full Name</label>
            <input name="name" required className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input name="email" type="email" required className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Phone</label>
            <input name="phone" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Service</label>
            <select name="service_type" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-200">
              <option>Comprehensive Hearing Assessment</option>
              <option>Speech Therapy</option>
              <option>Hearing Aids & Fittings</option>
              <option>Pediatric Care</option>
              <option>Tinnitus Management</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" required rows="4" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Preferred Date</label>
            <input name="preferred_date" type="date" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Subject</label>
            <input name="subject" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-200" />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-slate-500">By submitting, you agree to be contacted by our team.</p>
            <button className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-slate-800">Submit</button>
          </div>
          {status && <p className="md:col-span-2 text-sm text-slate-600">{status}</p>}
        </form>
      </div>
    </section>
  )
}
