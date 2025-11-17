import { useEffect, useState } from 'react'
import logo from '../images/egenet.png' // LOGO EKLENDİ

const navItems = [
  { label: 'Ürünler', href: '#urunler' },
  { label: 'Özellikler', href: '#ozellikler' },
  { label: 'Uygulamalar', href: '#uygulamalar' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'İletişim', href: '#iletisim' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnResize = () => setMenuOpen(false)
    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur border-b border-black/5 shadow-card-lg'
          : 'bg-white/70 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Ege Net Prefabrik Logo"
            className="h-12 w-auto object-contain rounded-md"
          />
        </a>

        {/* NAV - Desktop */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-mid lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-brand-dark">
              {item.label}
            </a>
          ))}
          <a
            href="#iletisim"
            className="rounded-full border border-brand-dark px-5 py-2 text-brand-dark transition hover:bg-brand-dark hover:text-white"
          >
            Katalogu İncele
          </a>
        </nav>

        {/* BURGER - Mobile */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1 lg:hidden"
          aria-label="Menüyü aç"
        >
          <span className={`h-0.5 w-6 bg-brand-dark transition ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-brand-dark transition ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-brand-dark transition ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* MOBILE NAV */}
      <div className={`lg:hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
        <nav className="flex flex-col gap-4 border-t border-black/5 px-6 py-4 text-brand-dark">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="py-1 text-base">
              {item.label}
            </a>
          ))}
          <a
            href="#iletisim"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-brand-dark px-5 py-2 text-center text-white"
          >
            Katalogu İncele
          </a>
        </nav>
      </div>
    </header>
  )
}
