import { useEffect, useState } from 'react'

export function useInView(ref, options) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    // SSR / ref yokken çalışmasın
    if (typeof window === 'undefined') return
    if (!ref.current || inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect() // bir kere görünsün yeter
        }
      },
      {
        threshold: 0.15,
        root: null,
        rootMargin: '0px',
        ...(options || {}),
      }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, inView, options])

  return inView
}
