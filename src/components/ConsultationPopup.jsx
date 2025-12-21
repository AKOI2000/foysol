import { useEffect, useState } from "react";

function ConsultationPopup({ setOnclick, onClick }) {
  const [active, setActive] = useState(false);


  useEffect(() => {
    if (!onClick) return;

    const timer = setTimeout(() => {
      setActive(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [onClick]);
  return (
    <div className="modal-bg">
      <form action="" className={`modal ${active ? "active" : ""}`}>
        <h3 className="heading-3">Request Consultation</h3>
        <p>
          Fill out this form below to request a consultation with one of our
          experts. We will get back to you shortly
        </p>

        <div
          className="btn-back"
          role="button"
          onClick={() => setOnclick((onclick) => !onclick)}
        >
          <span className="span-1"></span>
          <span className="span-2"></span>
        </div>

        <input type="text" placeholder="Name" />
        <input type="email" name="" placeholder="example@gmail.com" />
        <input type="tel" placeholder="Telephone Number" />
        <textarea
          name=""
          id=""
          placeholder="Brief description of your inquiry"
          
        ></textarea>

        <button className="btn btn-main">Submit</button>
      </form>
    </div>
  );
}

export default ConsultationPopup;
