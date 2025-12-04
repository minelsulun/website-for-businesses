import { About } from './components/About'
import { Applications } from './components/Applications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.tsx'
import { ProductCategories } from './components/ProductCategories'
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton.tsx'
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/homepage.jsx";

export function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={
                  <Homepage />
              }/>
              <Route path="/urunler" element={<ProductCategories />} />
          </Routes>
      </>

  )
}



