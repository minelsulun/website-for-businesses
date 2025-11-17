const values = [
    {
      title: 'Mimari estetik',
      description: 'Geometrik çizgiler, doğal dokular ve premium malzeme seçimi ile yüksek standart.',
    },
    {
      title: 'Hızlı kurulum',
      description: 'Endüstriyel üretim süreçleri sayesinde haftalar içinde anahtar teslim.',
    },
    {
      title: 'Şeffaf fiyat',
      description: 'Net teklif, detaylı kalemler ve sürpriz maliyetlere yer bırakmayan yapı.',
    },
    {
      title: 'Ulusal hizmet ağı',
      description: 'Türkiye genelinde keşif, nakliye ve montaj desteği.',
    },
  ]
  
  export function WhyUsSection() {
    return (
      <section id="neden-biz" className="py-24 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold-500 mb-4">Neden Ege Net?</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Mimariden üretime premium süreç yaklaşımı</h2>
            <p className="text-slate-300 leading-relaxed">
              Prefabrik yapıları yüksek mimari standartla yorumluyor, tasarımdan teslimata dek tüm süreçleri sizinle
              şeffaf biçimde planlıyoruz.
            </p>
          </div>
          <div className="grid gap-6">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                <span className="w-10 h-10 rounded-full border border-gold-500 flex items-center justify-center text-gold-500 text-sm font-semibold">
                  •
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  