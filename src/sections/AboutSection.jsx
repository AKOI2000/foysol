import AboutGrid from "../components/AboutGrid";


function AboutSection() {
  return (
    <div id="about-section">
      <div className="container">
        <div className="section-heading">
          <h5 className="heading-label">About us</h5>
          <h2 className="heading-2">Who we are</h2>
        </div>

        <div className="grid col-2-by-1">
          <div className="img-box">
            <img src="/Right Side.png" alt="" />
          </div>

         <AboutGrid />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
