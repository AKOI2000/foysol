import ConsultationPopup from "../components/ConsultationPopup"
import AboutSection from "../sections/AboutSection"
import Cta from "../sections/Cta"
import Footer from "../sections/Footer"
import Hero from "../sections/Hero"
import Navbar from "../sections/Navbar"
import Services from "../sections/Services"
import Testimonial from "../sections/Testimonial"

function Home({setOnclick, onClick}) {
  return (
    <div>
      <Navbar  setOnclick={setOnclick}/>
     <ConsultationPopup onClick={onClick} setOnclick={setOnclick}/>
      <Hero  setOnclick={setOnclick}/>
      <AboutSection />
      <Services />
      <Testimonial />
      <Cta  setOnclick={setOnclick}/>
      <Footer/>
    </div>
  );
}

export default Home;
