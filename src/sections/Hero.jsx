import { useConsultation } from "../context/consultationContext";

function Hero() {
  const { setOnclick } = useConsultation();
  return (
    <div id="hero" className="container">
      <div className="hero-text">
        <h5 className="heading-label">Dynamic Consulting</h5>

        <h1 className="heading-1">
          Secure Your Growth <br />
          With Expert Risk & <br /> Insurance Consulting
        </h1>
        <p className="hero-paragraph">
          Empowering organizations with clarity, confidence, and control through
          data-driven insurance strategies, risk advisory, and decades of
          industry expertise.
        </p>
        <button
          className="btn btn-main"
          onClick={() => setOnclick((onClick) => !onClick)}
        >
          Book a Consultation
        </button>
      </div>
      <div className="hero-image">
        <img
          src="https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597219/Right_Side_uyaciz.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
