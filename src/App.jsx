import { About } from './components/About'
import { Applications } from './components/Applications'
import { Contact } from './components/Contact'
import { Features } from './components/Features'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.tsx'
import { ProductCard } from './components/ProductCard'
import { ProductCategories } from './components/ProductCategories'
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton.tsx'
import { productDetails } from './data/products'

export function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <ProductCategories />
        <section className="bg-white py-24 text-black">
          <div className="mx-auto max-w-6xl space-y-8 px-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-mid">Ürün Detayları</p>
              <h2 className="text-3xl font-semibold text-brand-dark">Katalogdaki ölçü ve kapasite kartları</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {productDetails.map((product) => (
                <ProductCard key={product.code} product={product} />
              ))}
            </div>
          </div>
        </section>
        <Features />
        <Applications />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  )
}



