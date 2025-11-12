export default function Testimonials() {
  const quotes = [
    {
      name: 'Aisha K.',
      role: 'Parent of 6-year-old',
      text: 'The team was incredibly patient and our daughter looked forward to every session. Her confidence has soared.'
    },
    {
      name: 'Martin L.',
      role: 'Hearing Aid Fitting',
      text: 'I forgot what clarity felt like. The fitting was seamless and the follow-up support was outstanding.'
    },
    {
      name: 'Priya S.',
      role: 'Adult Speech Therapy',
      text: 'Practical exercises that fit my work life. I hear and speak better—and feel better.'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">What our patients say</h2>
          <p className="mt-3 text-slate-600">Real stories from people who trusted us with their care.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">
                <span className="font-medium text-slate-700">{q.name}</span> · {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
