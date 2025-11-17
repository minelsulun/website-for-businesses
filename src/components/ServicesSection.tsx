const services = [
    {
      title: 'Prefabrik Evler',
      description: 'Modern villalar, tiny house çözümleri ve yazlık konseptler ile konforlu yaşam alanları.',
    },
    {
      title: 'Ofis & Şantiye Yapıları',
      description: 'Modüler ofis, satış ofisi, şantiye ve lojistik birimleriyle işletmenize hızlı kurulum.',
    },
    {
      title: 'Çelik Konstrüksiyon',
      description: 'Dayanıklı çelik karkas sistemler ile endüstriyel ve özel amaçlı projeler.',
    },
    {
      title: 'Özel Tasarım Projeler',
      description: 'Mimari danışmanlık, render ve proje yönetimi desteğiyle uçtan uca çözümler.',
    },
  ]
  
  export function ServicesSection() {
    return (
      <section id="hizmetler" className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">Hizmetler</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Uzmanlık Alanlarımız</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-soft-xl transition relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/5 opacity-0 hover:opacity-100 transition pointer-events-none" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center mb-6 text-sm font-semibold tracking-[0.2em]">
                    {service.title.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  