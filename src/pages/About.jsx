
import AboutGrid from "../components/AboutGrid";
import ConsultationPopup from "../components/ConsultationPopup";
import FAQs from "../components/FAQs";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

function About() {


  return (
    <div id="about">
      <Navbar />
      <ConsultationPopup />
      <div className="sub-hero">
        <img src="/about-subhero.png" alt="" loading="lazy"/>
        <h1 className="sub-hero_text heading-2">
          Home<span>/About Us</span>
        </h1>
      </div>
      <div className="container">
        <div className="about-hero">
          <h1 className="heading-1">Who We Are</h1>
          <p>
            FOYSOL Consulting & Advisory Co. Ltd is a dynamic insurance
            consulting and risk advisory firm committed to helping organizations
            make smarter, safer, and more strategic business decisions. We
            provide end-to-end insurance guidance, tailored risk solutions, and
            practical training programs that strengthen resilience and support
            long-term growth.
          </p>
        </div>
        <AboutGrid />
      </div>
      <div className="container">
        <h5 className="heading-label">Our Story</h5>

        <div className="grid col-1-by-2">
        <div className="grid col-2-by-1">
          <div className="story_text-box">
            <div className="text-flex">
              <h2 className="heading-2">Your Risks.</h2>
              <h2 className="heading-2">Our Expertise.</h2>
            </div>
            <div className="text-flex">
              <h2 className="heading-2">Your Growth.</h2>
              <h2 className="heading-2"> Our Priority.</h2>
            </div>
            <div className="text-flex">
              <h2 className="heading-2">Businesses Thrive.</h2>
            </div>
            <div className="text-flex">
              <h2 className="heading-2">
                <span>Confidence Leads.</span>
              </h2>
            </div>
          </div>
          <div className="grid col-2-by-1">
                <img src="/story-1.png" alt="" />
                <img src="/story-2.png" alt="" />
            </div>
        </div>

        <div className="grid col-2-by-1">
          <div className="img-box">
            <img src="/about-stats.png" alt="" />
          </div>

          <div className="text-box">
            <h4 className="heading-4">
              We help organizations navigate uncertainty with clarity,
              precision, and strategic insight. FOYSOL Consulting & Advisory
              delivers tailored insurance solutions, risk management strategies,
              and advisory support that keep businesses protected, compliant,
              and positioned for long-term success.
            </h4>

            <div className="about-stats-box">
              <div className="about-stats-row">
                <div className="about-stat">
                    <h2 className="heading-2">200+</h2>
                    <h4 className="heading-4 span">Clients Guided</h4>
                </div>
                <div className="about-stat">
                    <h2 className="heading-2">350+</h2>
                    <h4 className="heading-4 span">Insurance Portfolios Reviewed</h4>
                </div>
              </div>
              <div className="about-stats-row">
                <div className="about-stat">
                    <h2 className="heading-2">15+</h2>
                    <h4 className="heading-4 span">Industries Served</h4>
                </div>
                <div className="about-stat">
                    <h2 className="heading-2">98%</h2>
                    <h4 className="heading-4 span">Client Retention Rate</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="container">
        <FAQs />
      </div>
      <Footer />
    </div>
  );
}

export default About;
