import { productCategories } from '../data/products'

export function ProductCategories() {
  return (
    <section id="urunler" className="bg-brand-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-mid">Ürün Kategorileri</p>
          <h2 className="text-3xl font-semibold text-brand-dark">Portföy ve sistem çözümleri</h2>
          <p className="max-w-2xl text-brand-mid">
            2024–2025 kataloğundaki tüm prefabrik modüller, zemin panelleri ve çelik elemanlar için ölçü ve kalite
            değerlerini birebir koruyarak dijital deneyime aktardık.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {productCategories.map((category) => (
            <article
              key={category.title}
              className="group rounded-[28px] border border-black/5 bg-white p-6 shadow-card-lg transition hover:-translate-y-1"
            >
              <div className="mb-6 overflow-hidden rounded-2xl bg-[#efefef]">
                <img src={category.image} alt={category.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark">{category.title}</h3>
                  <p className="text-sm text-brand-mid">{category.description}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-brand-mid">
                  {category.measurements.map((measurement) => (
                    <span key={measurement} className="rounded-full border border-black/5 px-3 py-1">
                      {measurement}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


