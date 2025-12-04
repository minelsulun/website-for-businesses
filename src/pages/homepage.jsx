import {Header} from "../components/Header.jsx";
import {Hero} from "../components/Hero.js";
import {About} from "../components/About.jsx";
import {ProductCategories} from "../components/ProductCategories.jsx";
import {Applications} from "../components/Applications.jsx";
import {Contact} from "../components/Contact.jsx";
import {Footer} from "../components/Footer.jsx";
import {FloatingWhatsAppButton} from "../components/FloatingWhatsAppButton.js";

export default function Homepage() {
    return (
        <>

            <main className="pt-20">
                <Hero />
                <About />
                <Applications />
                <Contact />
            </main>
            <Footer />
            <FloatingWhatsAppButton />
        </>
    )

}