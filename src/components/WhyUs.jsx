export default function WhyUs() {
  const items = [
    {
      title: 'Clinically led care',
      desc: 'Evaluations and therapy by certified audiologists and speech-language pathologists.'
    },
    {
      title: 'Personalized plans',
      desc: 'Tailored programs that fit your goals, lifestyle, and pace.'
    },
    {
      title: 'Family-friendly',
      desc: 'Comfortable spaces and gentle, engaging sessions for children.'
    },
    {
      title: 'Modern technology',
      desc: 'From advanced diagnostics to discreet hearing aids with app support.'
    }
  ]

  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Care that feels premium, results that feel personal</h2>
          <p className="mt-3 text-slate-600">Every visit is designed to be calm, clear, and caring—so you can focus on progress.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
