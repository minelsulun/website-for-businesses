import { applicationAreas } from '../data/products'

export function Applications() {
  return (
    <section id="uygulamalar" className="bg-white py-24 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-mid">Örnek Uygulamalar</p>
          <h2 className="text-3xl font-semibold text-brand-dark">Saha referansları ve kullanım alanları</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {applicationAreas.map((application) => (
            <article
              key={application.title}
              className="group overflow-hidden rounded-[26px] border border-black/5 bg-brand-light shadow-card-lg"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={application.image}
                  alt={application.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-1 px-5 py-6">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-mid">{application.title}</p>
                <p className="text-brand-dark">{application.area}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


