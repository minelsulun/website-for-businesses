import { useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'

const initialForm = { name: '', phone: '', email: '', message: '' }

export function Contact() {
  // Şimdilik kullanılmıyor ama istersen ileride tekrar form ekleyebilirsin
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ sending: false, success: false })

  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const leftInView = useInView(leftRef)
  const rightInView = useInView(rightRef)

  return (
    <section id="iletisim" className="bg-brand-light py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
        {/* SOL: metin ve iletişim bilgileri */}
        <div
          ref={leftRef}
          className={`space-y-6 transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none ${
            leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-brand-mid">İletişim</p>
          <h2 className="text-3xl font-semibold text-brand-dark">Teklif ve yerinde keşif için bize ulaşın</h2>
          <p className="text-brand-mid">
            Prefabrik yapılar ve çelik çözümler için lokasyonumuza gelerek yüz yüze görüşme ve yerinde keşif planlayabilirsiniz.
          </p>
          <div className="grid gap-4 text-sm text-brand-mid">
            <div>
              <p className="text-xs uppercase tracking-[0.4em]">Telefon</p>
              <a href="tel:+902324567890" className="text-lg font-semibold text-brand-dark">
                +90 232 456 78 90
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em]">E-posta</p>
              <a href="mailto:info@egenetprefabrik.com" className="text-lg font-semibold text-brand-dark">
                info@egenetprefabrik.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em]">Adres</p>
              <p className="text-lg font-semibold text-brand-dark">Bayraklı / İzmir</p>
            </div>
          </div>
        </div>

        {/* SAĞ: Google Maps & Yol Tarifi */}
        <div
          ref={rightRef}
          className={`rounded-[32px] border border-black/5 bg-white p-4 md:p-6 shadow-card-lg space-y-4 transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none ${
            rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-mid">Konum</p>
              <h3 className="text-lg font-semibold text-brand-dark">Harita ve Yol Tarifi</h3>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Bayraklı,İzmir"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-dark px-4 py-2 text-xs font-semibold text-white hover:bg-black transition"
            >
              Yol Tarifi Al
            </a>
          </div>

          <div className="relative w-full overflow-hidden rounded-3xl border border-black/10">
            <div className="aspect-[4/3]">
              <iframe
                title="Ege Net Prefabrik Konum"
                src="https://www.google.com/maps?q=Bayraklı,İzmir&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <p className="text-xs text-brand-mid">
            Konuma tıklayarak Google Haritalar üzerinden navigasyon başlatabilir, yol tarifi ile doğrudan tesisimize
            ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  )
}
