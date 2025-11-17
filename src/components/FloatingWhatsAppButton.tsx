import { useEffect, useState } from 'react'

export function FloatingWhatsAppButton() {
  const [open, setOpen] = useState(false)
  const phone = '905337429561' // ülke kodu ile, başında + olmadan
  const defaultMessage = 'Merhaba, EGENET Prefabrik 2025 katalog ve ürünleriniz hakkında bilgi ve fiyat teklifi almak istiyorum.'

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
  className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-soft-xl hover:bg-emerald-400 transition"
        aria-label="WhatsApp üzerinden teklif alın"
        title="WhatsApp ile yazın"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7"
  >
    <path d="M16.004 3.2c-7.06 0-12.8 5.648-12.8 12.6 0 2.32.648 4.56 1.88 6.52L3.2 28.8l6.624-1.728c1.88.992 3.992 1.52 6.184 1.52h.004c7.056 0 12.8-5.648 12.8-12.6 0-3.36-1.328-6.512-3.744-8.888C22.648 4.512 19.48 3.2 16.004 3.2zm0 22.864h-.004c-1.92 0-3.792-.512-5.432-1.488l-.392-.232-3.936 1.024 1.04-3.824-.256-.392a10.67 10.67 0 01-1.696-5.952c0-5.92 4.872-10.736 10.776-10.736 2.872 0 5.568 1.12 7.608 3.152 2.04 2.04 3.168 4.72 3.168 7.584 0 5.92-4.872 10.736-10.776 10.736zm5.656-8.064c-.304-.152-1.792-.88-2.072-.984-.28-.104-.48-.152-.68.152s-.784.984-.96 1.192c-.176.208-.352.224-.656.08-.304-.152-1.28-.472-2.432-1.504-1-.888-1.664-1.976-1.84-2.304-.176-.328-.02-.504.132-.656.136-.136.304-.352.456-.528.152-.176.2-.304.304-.504.104-.208.056-.392-.024-.544-.08-.152-.68-1.64-.928-2.24-.244-.584-.492-.504-.68-.512l-.584-.008c-.2 0-.528.072-.808.376-.28.304-1.064 1.04-1.064 2.536 0 1.496 1.088 2.944 1.24 3.152.152.208 2.152 3.44 5.216 4.8 3.064 1.36 3.064.904 3.616.848.552-.056 1.784-.728 2.04-1.432.256-.704.256-1.312.176-1.432-.08-.128-.28-.208-.584-.36z" />
  </svg>
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-sm w-full text-center space-y-4 shadow-soft-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-slate-900">WhatsApp ile İletişim</h3>
            <p className="text-slate-600">
              WhatsApp üzerinden ölçü ve ihtiyaçlarınızı paylaşın, ekibimiz en kısa sürede size dönüş yapsın.
            </p>
            <a
              className="block w-full py-3 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition"
              href={`https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp'ta Mesaj Başlat
            </a>
            <button type="button" onClick={() => setOpen(false)} className="text-sm text-slate-500 underline">
              Kapat
            </button>
          </div>
        </div>
      )}
    </>
  )
}

