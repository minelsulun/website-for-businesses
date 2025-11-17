import { FormEvent, useState } from 'react'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  projectType: 'Prefabrik Ev',
  budget: '',
  message: '',
}

export function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSuccess(false)
    setTimeout(() => {
      setIsSubmitting(false)
      setSuccess(true)
      setForm(initialForm)
    }, 1200)
  }

  return (
    <section id="iletisim" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">İletişim</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Bize projenizi anlatın</h2>
          <p className="text-slate-600">
            Prefabrik villa, ofis, şantiye ve çelik konstrüksiyon projeleriniz için keşif randevusu alabilirsiniz.
          </p>
          <div className="space-y-4 text-slate-900">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Telefon</p>
              <a href="tel:+902324567890" className="text-lg font-semibold hover:text-gold-600 transition">
                +90 232 456 78 90
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">E-posta</p>
              <a href="mailto:info@egenetprefabrik.com" className="text-lg font-semibold hover:text-gold-600 transition">
                info@egenetprefabrik.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Adres</p>
              <p className="text-lg font-semibold">Bayraklı / İzmir</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-stone-100 border border-stone-200 space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Ad Soyad
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-900 transition"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Telefon
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-900 transition"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              E-posta
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-900 transition"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Proje Türü
              <select
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-900 transition"
              >
                <option>Prefabrik Ev</option>
                <option>Ofis</option>
                <option>Şantiye</option>
                <option>Diğer</option>
              </select>
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Bütçe Aralığı
            <input
              type="text"
              placeholder="Örn: 2-4 Milyon TL"
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-900 transition"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Mesaj / Proje Detayları
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-900 transition resize-none"
            />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-full bg-slate-900 text-white font-semibold shadow-soft-xl hover:bg-slate-800 transition disabled:opacity-70"
          >
            {isSubmitting ? 'Gönderiliyor...' : 'Talep Gönder'}
          </button>
          {success && (
            <p className="text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3">
              Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

