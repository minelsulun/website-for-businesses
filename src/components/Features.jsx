import { technicalSpecs } from '../data/products'

export function Features() {
  return (
    <section id="ozellikler" className="bg-brand-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-mid">Teknik Özellikler</p>
          <h2 className="text-3xl font-semibold text-brand-dark">Mühendislik tabloları</h2>
        </div>
        <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-card-lg">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-brand-light/60 text-brand-mid">
                <th className="px-6 py-4 font-medium">Parametre</th>
                <th className="px-6 py-4 font-medium">Değer</th>
                <th className="px-6 py-4 font-medium">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              {technicalSpecs.map((spec) => (
                <tr key={spec.parameter} className="border-t border-black/5 text-brand-dark">
                  <td className="px-6 py-4 text-brand-dark">{spec.parameter}</td>
                  <td className="px-6 py-4">{spec.value}</td>
                  <td className="px-6 py-4 text-brand-mid">{spec.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}


