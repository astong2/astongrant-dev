import { useState } from "react";

export default function Contact() {

  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mnjbeglj", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      e.target.reset();
    } else {
      setStatus("ERROR");
    }
  }

  return (
    <section className="contact">

      <h1>Get in touch!</h1>

      <p>
        If you’re interested in working together, discussing oppurtunities
         or simply connecting, feel free to reach out below.
      </p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="You@example.com"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          required
        />

        <button type="submit">
          Send Message
        </button>

      </form>

      {status === "SUCCESS" && (
        <p className="form-success">
          Message sent successfully!
        </p>
      )}

      {status === "ERROR" && (
        <p className="form-error">
          Something went wrong. 
          <br />
          Please ensure all fields are filled correctly.
          <br />
          alternatively, you can email me directly at <a href="mailto:aston.g@hotmail.co.uk">aston.g@hotmail.co.uk</a>
        </p>
      )}

    </section>
  );
}
