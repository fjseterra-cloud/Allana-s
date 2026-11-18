import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SoftwareStack from './components/SoftwareStack';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import BlueprintFooter from './components/BlueprintFooter';
import ScrollMarker from './components/ScrollMarker';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ScrollMarker />
      <BlueprintFooter />
      <Navbar />
      <main>
        <Hero />
        <SoftwareStack />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
