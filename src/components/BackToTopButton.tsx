import { useEffect, useState } from 'react'

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-24 w-12 h-12 rounded-full bg-white text-slate-900 border border-slate-200 shadow-soft-xl hover:-translate-y-1 transition"
      aria-label="Yukarı dön"
    >
      ↑
    </button>
  )
}

