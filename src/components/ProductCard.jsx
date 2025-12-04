import { useRef } from 'react'
import { useInView } from '../hooks/useInView'

export function ProductCard({ product }) {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <article
      ref={ref}
      className={`flex flex-col gap-4 rounded-[28px] border border-black/5 bg-white p-6 shadow-card-lg transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.4em] text-brand-mid">{product.code}</span>
        <span className="rounded-full bg-brand-light px-3 py-1 text-xs text-brand-mid">{product.reference}</span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm text-brand-mid">
        <div className="space-y-1">
          <p className="text-brand-mid">Ölçü</p>
          <p className="text-lg font-semibold text-brand-dark">{product.size}</p>
        </div>
        <div className="space-y-1">
          <p>Kalınlık</p>
          <p className="text-lg font-semibold text-brand-dark">{product.thickness}</p>
        </div>
        <div className="space-y-1">
          <p>Alan</p>
          <p className="text-lg font-semibold text-brand-dark">{product.coverage}</p>
        </div>
        <div className="space-y-1">
          <p>Taşıma</p>
          <p className="text-lg font-semibold text-brand-dark">{product.capacity}</p>
        </div>
      </div>
      <p className="text-sm text-brand-mid">{product.description}</p>
    </article>
  )
}

