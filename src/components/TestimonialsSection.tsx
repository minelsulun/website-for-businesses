const testimonials = [
    {
      name: 'Selin A.',
      city: 'İzmir',
      quote: 'Villa projemiz için her aşamada doğru yönlendirmeler yaptılar. Teslim süresi şaşırtıcı derecede hızlıydı.',
    },
    {
      name: 'Baran E.',
      city: 'İstanbul',
      quote: 'Şantiye ofislerimizi 3 hafta içinde kurdular. Kalite hissi ve detaylara verdikleri önem çok değerli.',
    },
    {
      name: 'Nehir K.',
      city: 'Ankara',
      quote: 'Fiyatlandırma şeffaftı, render çalışmaları sayesinde projeyi baştan net gördük. Tavsiye ederim.',
    },
  ]
  
  export function TestimonialsSection() {
    return (
      <section className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">Müşteri Görüşleri</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Güvenilen deneyimler</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <p className="text-slate-600 mb-6">“{testimonial.quote}”</p>
                <div className="text-sm font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{testimonial.city}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  