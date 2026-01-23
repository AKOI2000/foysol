import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Thanks for subscribing!");
        setEmail("");
      } else {
        if (data.error.message === "Email is already in your audience.")
          return setMessage("You have subscribed with this email");
      }
    } catch (error) {
      setMessage("Error subscribing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {message && <small className="small">{message}</small>}
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name=""
          id=""
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`btn btn-main ${loading && "disabled"}`}
          disabled={loading}
        >
          {loading ? "Subscribing" : "Subscribe"}
        </button>
      </form>
    </>
  );
}

export default Newsletter;
