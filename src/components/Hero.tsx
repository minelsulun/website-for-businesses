import heroVideo from '../images/Drone_Çekimi_Video_Üretimi.mp4'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-[#111111] to-black text-white"
    >
      {/* kırmızı glow */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,_rgba(171,0,0,0.25),_transparent_65%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid gap-16 lg:grid-cols-2">
        
        {/* TEXT SIDE */}
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-[#ab0000] mb-6 font-medium">
            YENİ NESİL YAŞAM
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 text-white drop-shadow-lg">
            Yeni Nesil Prefabrik Yaşam Alanları
          </h1>

          <p className="text-lg text-[#e5e5e5] mb-12 leading-relaxed">
            Ege Net Prefabrik ile villa, ofis ve yaşam alanlarınızı hızlı,
            sağlam ve mimari çizgide hayata geçirin.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#ab0000] text-white font-semibold shadow-lg hover:bg-[#8c0000] transition"
            >
              Ücretsiz Teklif Al
            </a>

            <a
              href="/egenet-katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition"
            >
              Projelerimizi İncele
            </a>
          </div>

          {/* CONTACT AREA */}
          <div className="mt-8">
            <div className="flex items-center gap-3 text-white mt-2">
              <a
                href="https://wa.me/905337429561"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 hover:bg-white/10 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.49 0 .17 5.32.17 11.9c0 2.09.55 4.14 1.6 5.95L0 24l6.33-1.72a11.85 11.85 0 0 0 5.73 1.47h.01c6.58 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.16-3.45-8.37Z" />
                </svg>
                <span className="text-sm tracking-wide">WHATSAPP İLETİŞİM</span>
              </a>
            </div>
          </div>
        </div>

        {/* VIDEO SIDE */}
        <div className="relative">
          <div className="absolute -inset-8 bg-red-900/20 blur-3xl rounded-full" aria-hidden />
          
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <video
              src={heroVideo}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
