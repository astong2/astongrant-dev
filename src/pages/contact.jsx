import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

function handleSubmit(e) {
  e.preventDefault();

  if (!e.target.checkValidity()) {
    e.target.reportValidity();
    return;
  }

  setStatus("✅ Message captured (form wiring coming soon).");
  e.target.reset();
}





  return (
    <section className="page">
      <h1>Contact</h1>

      <p>
        If you’re interested in working together, discussing oppurtunities or simply connecting, feel free to reach out below.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            pattern=".+@.+\..+"
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Send message
        </button>

        {status && <p style={{ marginTop: "14px" }}>{status}</p>}
      </form>

      <p> Alternatively, you can contact me directly via email:
        <br></br>
         <a href="mailto:aston.g@hotmail.co.uk">aston.g@hotmail.co.uk</a></p>

    </section>
  );
}

export default Contact;
