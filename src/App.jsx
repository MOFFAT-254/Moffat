
import './styles/global.css';
import Navbar from './components /Navbar';
import Hero from './components /Hero';
import TrustedBy from './components /TrustedBy';
import Services from './components /Services';
import WhyUs from './components /WhyUs';
import Process from './components /Services';
import Testimonials from './components /Testimonials';
import ContactCTA from './components /ContactCTA';
import Footer from './components /Footer';
import WhatsAppFAB from './components /WhatsAppFAB';

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <TrustedBy />
            <Services />
            <WhyUs />
            <Process />
            <Testimonials />
            <ContactCTA />
            <Footer />
            <WhatsAppFAB />
        </>
    );
}
