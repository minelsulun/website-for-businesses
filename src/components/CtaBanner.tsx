export function CtaBanner() {
    return (
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900 text-white p-10 md:p-14 text-center flex flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.45em] text-gold-500">Planlama</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Projenizi Birlikte Planlayalım</h2>
          <p className="text-slate-300">
            Bize metrekare, arazi ve ihtiyaçlarınızı iletin; size en uygun modüler çözümü tasarlayalım.
          </p>
          <a
            href="#iletisim"
            className="self-center inline-flex items-center justify-center px-8 py-3 rounded-full bg-gold-500 text-slate-900 font-semibold shadow-soft-xl hover:bg-gold-600 transition"
          >
            Hemen İletişime Geç
          </a>
        </div>
      </section>
    )
  }
  
  