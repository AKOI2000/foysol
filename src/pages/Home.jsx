import AboutSection from "../sections/AboutSection"
import Cta from "../sections/Cta"
import Footer from "../sections/Footer"
import Hero from "../sections/Hero"
import Navbar from "../sections/Navbar"
import Services from "../sections/Services"
import Testimonial from "../sections/Testimonial"

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
}

export default Home;
