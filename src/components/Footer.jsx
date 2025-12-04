const footerLinks = [
  { label: 'Ürünler', href: '#urunler' },
  { label: 'Uygulamalar', href: '#uygulamalar' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'İletişim', href: '#iletisim' },
]

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 border-t border-black/5 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-brand-mid">Ege Net Prefabrik</p>
          <p className="text-lg font-semibold text-brand-dark">Prefabrik sistemlerde kurumsal yaklaşım</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-brand-mid">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-brand-dark">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-brand-mid">
            IG
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-brand-mid">
            IN
          </span>
        </div>
      </div>
      <div className="border-t border-black/5 py-6 text-center text-xs text-brand-mid">
        © {new Date().getFullYear()} Ege Net Prefabrik. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}


