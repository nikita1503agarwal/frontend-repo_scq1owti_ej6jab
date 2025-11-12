import { useEffect, useState } from 'react'
import { Stethoscope, Mic2, Headphones, Baby, Waves } from 'lucide-react'

const iconMap = {
  ear: Stethoscope,
  mic: Mic2,
  headphones: Headphones,
  baby: Baby,
  waveform: Waves,
}

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data.services || [])
      } catch (e) {
        setServices([
          { id: 'hearing-assessment', title: 'Hearing Assessment', desc: 'Full diagnostic evaluation.', icon: 'ear' },
          { id: 'speech-therapy', title: 'Speech Therapy', desc: 'Personalized, evidence-based therapy.', icon: 'mic' },
          { id: 'hearing-aids', title: 'Hearing Aids', desc: 'Latest technology, custom fitting.', icon: 'headphones' },
        ])
      }
    }
    load()
  }, [])

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Services designed for every age</h2>
          <p className="mt-3 text-slate-600">From diagnosis to ongoing care, our team supports you at every step.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Stethoscope
            return (
              <div key={s.id} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-cyan-100 text-cyan-700 grid place-items-center">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <button className="mt-4 text-sm font-medium text-cyan-700 hover:text-cyan-800">Learn more →</button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
