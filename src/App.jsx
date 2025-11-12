import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
        <footer className="bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Auralis Clinic. All rights reserved.</p>
            <div className="text-sm text-slate-500">
              Designed for clarity and comfort.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
