import Cta from "./Cta";

function Footer() {
  return (
      <footer id="footer" className="container">
        <div className="newsletter">
          <div className="newsletter_text-box">
            <h2 className="heading-2">Subscribe to 
             <br /> our newsletter</h2>
            <p>
              Subscribe to our newsletter and be the first to recieve insights,
              updates, and expert tips on optimizing your financial management.
            </p>
          </div>

          <div className="newsletter_form-box">
            <form className="newsletter-form">
              <input
                type="email"
                name=""
                id=""
                placeholder="example@gmail.com"
              />
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
            <img src="/Logo.png" alt="" />
          </div>

          <div className="footer-links">
            <h4 className="footer_links-heading">Quick Links</h4>
            <a href="" className="footer_links-link">Home</a>
            <a href="" className="footer_links-link">Who we are</a>
            <a href="" className="footer_links-link">Our services</a>
            <a href="" className="footer_links-link">Why choose us</a>
            <a href="" className="footer_links-link">Leadership</a>
          </div>
          <div className="footer-links">
          <h4 className="footer_links-heading">Supports</h4>
            <a href="" className="footer_links-link">FAQ</a>
            <a href="" className="footer_links-link">Privacy Policy</a>
            <a href="" className="footer_links-link">Terms & conditions</a>
            <a href="" className="footer_links-link">Contact us</a>
          </div>
          <div className="footer-links">
          <h4 className="footer_links-heading">Our Services</h4>
            <a href="" className="footer_links-link">Insurance Consultancy</a>
            <a href="" className="footer_links-link">Risk Advisory Services</a>
            <a href="" className="footer_links-link">Strategic Placement</a>
            <a href="" className="footer_links-link">Claims Management & Advocacy</a>
            <a href="" className="footer_links-link">Regulatory Advisory</a>
          </div>
        </div>

        <div className="footer-copyrights">
            <p>© 2025 FOYSOL CONSULTING & ADVISORY. All rights reserved</p>
        </div>
      </footer>
  
  );
}

export default Footer;
