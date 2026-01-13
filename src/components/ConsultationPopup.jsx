import { useEffect, useState } from "react";
import { useConsultation } from "../context/consultationContext";

function ConsultationPopup() {
  const { setOnclick, onClick } = useConsultation();
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);


  const data = { name, phone: number, email, description };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      setSuccess(false);
      setLoading(true);
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      const response = await res.json();

      if (response.success) {
        setSuccess(true);

        setTimeout(() => {
          setOnclick(false);
        }, 2500);

        setTimeout(() => {
          setSuccess(false);
        }, 3500);
      }
    } catch (error) {
      console.error(error, error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (onClick) {
      setVisible(true);
      timer = setTimeout(() => setActive(true), 100);
    } else {
      setActive(false);
      timer = setTimeout(() => setVisible(false), 700); // match CSS transition
    }
    return () => clearTimeout(timer); // cleanup old timer
  }, [onClick]);

  if (!visible) return null;

  return (
    <div className={`modal-bg ${active ? "active" : ""}`}>
      <form
        action=""
        className={`modal ${active ? "active" : ""} ${
          success ? "success" : ""
        }`}
        onSubmit={submitForm}
      >
        {success && (
          <h3 className="success">Consultation successfully booked ✅</h3>
        )}


        {!success && (
          <>
            <div
              className="btn-back"
              role="button"
              onClick={() => setOnclick((onclick) => !onclick)}
            >
              <span className="span-1"></span>
              <span className="span-2"></span>
            </div>
            <h3 className="heading-3">Request Consultation</h3>
            <p>
              Fill out this form below to request a consultation with one of our
              experts. We will get back to you shortly
            </p>

            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name=""
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Telephone Number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              name=""
              id=""
              placeholder="Brief description of your inquiry"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button className={`btn btn-main ${loading && "disabled"}`} disabled={loading}>
              {loading ? "Booking Consultation ..." : "Submit"}
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default ConsultationPopup;
