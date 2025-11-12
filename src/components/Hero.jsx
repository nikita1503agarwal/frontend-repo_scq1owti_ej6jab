import { motion } from 'framer-motion'
import { Star, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-20 md:pb-28 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute top-20 -right-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-cyan-700 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full text-xs font-medium mb-5">
            <Sparkles size={14} /> Premium Care, Gentle Approach
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Hear clearly. Speak confidently.
          </h1>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            A modern clinic specializing in hearing health and speech therapy for all ages. Personalized treatment plans from certified experts with compassionate care.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-slate-800">
              Book an Assessment
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-700 px-6 py-3 text-sm font-medium hover:border-slate-400">
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <Star className="text-amber-500" size={16} /> 4.9 patient rating
            </div>
            <div className="text-slate-500">Over 5,000 sessions delivered</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200">
            <img src="https://images.unsplash.com/photo-1631248055158-edec7a3c072b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGluaWN8ZW58MHwwfHx8MTc2MjkyMTE0MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Clinic" className="w-full h-[420px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg ring-1 ring-slate-200 p-4 w-56">
            <p className="text-sm font-medium text-slate-700">Certified Audiologists</p>
            <p className="text-xs text-slate-500 mt-1">Internationally trained experts</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
