import { useState } from 'react'
import { Menu, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
          <div className="leading-tight">
            <p className="font-semibold text-slate-900">Auralis Clinic</p>
            <p className="text-xs text-slate-500">Hearing & Speech Therapy</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <button onClick={() => scrollTo('services')} className="hover:text-slate-900">Services</button>
          <button onClick={() => scrollTo('why-us')} className="hover:text-slate-900">Why Us</button>
          <button onClick={() => scrollTo('testimonials')} className="hover:text-slate-900">Stories</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-slate-900">Contact</button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-400">
            <Phone size={16} /> Call Us
          </a>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800">
            <Mail size={16} /> Book Now
          </a>
        </div>

        <button className="md:hidden inline-flex p-2 rounded-md border border-slate-300" onClick={()=>setOpen(!open)}>
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-6 py-4 grid gap-3 text-slate-700">
            <button onClick={() => scrollTo('services')} className="text-left">Services</button>
            <button onClick={() => scrollTo('why-us')} className="text-left">Why Us</button>
            <button onClick={() => scrollTo('testimonials')} className="text-left">Stories</button>
            <button onClick={() => scrollTo('contact')} className="text-left">Contact</button>
          </div>
        </div>
      )}
    </header>
  )
}
