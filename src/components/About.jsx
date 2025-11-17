
export function About() {
  return (
    <section id="hakkimizda" className="bg-white py-24 text-black">
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-mid">Hakkımızda</p>
        <h2 className="text-3xl font-semibold text-brand-dark">Modern üretim, ölçülebilir kalite</h2>
        <p className="text-lg text-brand-mid">
          Ege Net Prefabrik, prefabrik sistemlerin tüm katmanlarında uzmanlaşmış mühendislik ekibiyle İzmir üretim
          tesisinde faaliyet gösterir. Katlanabilir modüller, çelik karkaslı yapılar ve kataloğunuzdaki endüstriyel karo
          çözümlerini tek tedarikçi üzerinden sunarak sahadaki süreyi kısaltır. Kurumsal müşteriler için BIM tabanlı
          üretim verileri, kalite kontrol raporları ve teslim sonrası bakım planları hazırlarız.
        </p>
        <div className="grid gap-6 border-t border-black/5 pt-6 text-sm text-brand-mid sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-mid">Üretim</p>
            <p className="text-lg font-semibold text-brand-dark">10.000 m² tesis</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-mid">Teslim</p>
            <p className="text-lg font-semibold text-brand-dark">4-12 hafta arası</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-mid">Hizmet</p>
            <p className="text-lg font-semibold text-brand-dark">Türkiye geneli</p>
          </div>
        </div>
      </div>
    </section>
  )
}

