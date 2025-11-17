const steps = [
    {
      title: 'Keşif & İhtiyaç Analizi',
      description: 'Arazi, metrekare ve kullanım senaryosu analiz edilir.',
    },
    {
      title: 'Mimari Tasarım & Teklif',
      description: 'Render ve metrajlara dayalı net teklif paylaşılır.',
    },
    {
      title: 'Üretim & Kurulum',
      description: 'Modüller fabrikada üretilir ve sahada kurulumu yapılır.',
    },
    {
      title: 'Teslim & Son Kontrol',
      description: 'Tüm detaylar kontrol edilerek proje teslim edilir.',
    },
  ]
  
  export function ProcessSection() {
    return (
      <section id="surec" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">Teslim Süreci</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Şeffaf ve planlı adımlar</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative pl-10 lg:pl-0">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-900 text-white text-2xl font-semibold mb-6 shadow-soft-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <span className="hidden lg:block absolute top-8 left-[calc(100%-32px)] h-px w-[calc(100%+32px)] bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  