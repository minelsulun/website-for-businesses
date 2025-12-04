import { useEffect, useState } from 'react'

export default function Products() {
  const [files, setFiles] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/EGENET%20FOTO/index.json', { cache: 'no-cache' })
        if (!res.ok) throw new Error('index.json okunamadı')
        const data = await res.json()
        if (Array.isArray(data)) setFiles(data)
      } catch (e) {
        setError('Görseller yüklenemedi')
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const items = files.map((file) => {
    const name = String(file)
      .replace(/\.(png|jpe?g|webp|gif|bmp|svg)$/i, '')
      .replace(/[-_]+/g, ' ')
    return {
      title: name,
      description: 'Ürün görseli',
      measurements: [],
      image: `/EGENET%20FOTO/${encodeURIComponent(file)}`,
    }
  })

  return (
    <section id="urunler" className="bg-brand-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-mid">Ürünler</p>
          <h2 className="text-3xl font-semibold text-brand-dark">Tüm ürün görselleri</h2>
          {loading && <p className="text-brand-mid">Yükleniyor…</p>}
          {error && <p className="text-red-600">{error}</p>}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.image}
              className="group rounded-[28px] border border-black/5 bg-white p-6 shadow-card-lg transition hover:-translate-y-1"
            >
              <div className="mb-6 overflow-hidden rounded-2xl bg-[#efefef]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-brand-dark line-clamp-2">{item.title}</h3>
                {item.description ? (
                  <p className="text-sm text-brand-mid">{item.description}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {!loading && items.length === 0 && (
          <p className="text-brand-mid">Henüz görüntülenecek ürün bulunamadı.</p>
        )}
      </div>
    </section>
  )
}