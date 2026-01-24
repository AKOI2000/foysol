import ConsultationPopup from "../components/ConsultationPopup";
import SchemaLocalBusiness from "../components/SchemaLocalBusiness";
import SchemaOrganization from "../components/SchemaOrganization";
import Seo from "../components/Seo";
import AboutSection from "../sections/AboutSection";
import Cta from "../sections/Cta";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import Services from "../sections/Services";
import Testimonial from "../sections/Testimonial";

function Home() {
  return (
    <>
      <Seo
        title="Independent Insurance Advisory & Consulting for Individuals and Businesses | Foysol Consulting and Advisory Co. Ltd"
        description="Independent insurance advisory and consulting firm providing policy reviews, risk assessment, and coverage guidance. We do not sell insurance policies."
        canonical="https://foysolconsulting.com"
      />
      <SchemaOrganization />
      <SchemaLocalBusiness />

      <Navbar />
      <main>
        <ConsultationPopup />
        <Hero />
        <AboutSection />
        <Services />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default Home;
