import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  console.log(pathname);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });

    console.log(id);
  }
  return (
    <footer id="footer" className="container">
      <div className="newsletter">
        <div className="newsletter_text-box">
          <h2 className="heading-2">
            Subscribe to
            <br /> our newsletter
          </h2>
          <p>
            Subscribe to our newsletter and be the first to recieve insights,
            updates, and expert tips on optimizing your financial management.
          </p>
        </div>

        <div className="newsletter_form-box">
          <form className="newsletter-form">
            <input type="email" name="" id="" placeholder="example@gmail.com" />
            <button className="btn btn-main">Subscribe</button>
          </form>
          <p>
            Join 2,000+ professionals receiving monthly insights on insurance,
            risk, business continuity, and claims strategy.
          </p>
        </div>
      </div>

      <div className="footer-box">
        <div className="footer-logo">
          <img src="/Logo.png" alt="Foysol Consulting || Independent insurance advisory and consulting firm || We are not an insurance company, we are an INSURANCE ADVISORY AND CONSULTING firm" />
        </div>

        <div className="footer-links">
          <h4 className="footer_links-heading">Quick Links</h4>
          {pathname === "/" && (
            <>
              <button
                onClick={() => scrollTo("hero")}
                className="footer_links-link"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo("about-section")}
                className="footer_links-link"
              >
                Who we are
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="footer_links-link"
              >
                Our services
              </button>
              <button
                onClick={() => scrollTo("testimonials")}
                className="footer_links-link"
              >
                Why choose us
              </button>
              <button
                onClick={() => scrollTo("cta-section")}
                className="footer_links-link"
              >
                Next step
              </button>
            </>
          )}

          {pathname === "/about" && (
            <>
              <button
                onClick={() => scrollTo("about-section")}
                className="footer_links-link"
              >
                Who we are
              </button>
              <button
                onClick={() => scrollTo("story")}
                className="footer_links-link"
              >
                Our story
              </button>
              <button
                onClick={() => scrollTo("faq")}
                className="footer_links-link"
              >
                Frequently asked questions
              </button>
            </>
          )}

          {pathname === "/contact" && (
            <>
              <button
                onClick={() => scrollTo("contact-us")}
                className="footer_links-link"
              >
                Contact Info
              </button>
            </>
          )}
        </div>

        <div className="footer-links">
          <h4 className="footer_links-heading">Supports</h4>
          <a href="" className="footer_links-link">
            FAQ
          </a>
          <a href="" className="footer_links-link">
            Privacy Policy
          </a>
          <a href="" className="footer_links-link">
            Terms & conditions
          </a>
          <a href="" className="footer_links-link">
            Contact us
          </a>
        </div>
        <div className="footer-links">
          <h4 className="footer_links-heading">Our Services</h4>
          <a href="" className="footer_links-link">
            Insurance Consultancy
          </a>
          <a href="" className="footer_links-link">
            Risk Advisory Services
          </a>
          <a href="" className="footer_links-link">
            Strategic Placement
          </a>
          <a href="" className="footer_links-link">
            Claims Management & Advocacy
          </a>
          <a href="" className="footer_links-link">
            Regulatory Advisory
          </a>
        </div>
      </div>

      <div className="footer-copyrights">
        <p>© 2025 FOYSOL CONSULTING & ADVISORY. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
