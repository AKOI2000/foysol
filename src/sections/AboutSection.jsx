import AboutGrid from "../components/AboutGrid";
import Videoplayer from "../components/Videoplayer";
function AboutSection() {
  return (
    <div id="about-section">
      <div className="container">
        <div className="section-heading">
          <h5 className="heading-label">About us</h5>
          <h2 className="heading-2">Who we are</h2>
        </div>

        <div className="grid col-2-by-1">
          <Videoplayer />
          <AboutGrid />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
