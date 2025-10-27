import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message sent successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex justify-center items-center"
      style={{
        paddingTop: "80px",
        paddingBottom: "40px",
        backgroundColor: "#faf7f2",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
          width: "95%",
          maxWidth: "3000px",
        }}
      >
        
        <div
          style={{
            flex: 1,
            color: "#333",
            fontFamily: "Nunito",
            padding: "20px",
          }}
        >
      <h2
  style={{
    fontFamily: "Playfair Display",
    fontSize: "2.5rem",
    color: "#6d94c5",
    marginBottom: "15px",
    textAlign: "center",
  }}
>
  Let’s Connect 🤝
</h2>
<p
  style={{
    fontSize: "1.1rem",
    lineHeight: "1.7",
    textAlign: "center",
    marginBottom: "10px",
  }}
>
  Have any questions, ideas, or opportunities?  
  <br />I’d love to hear from you! Whether it’s a collaboration,  
  a project inquiry, or just a friendly hello —  
  feel free to reach out anytime.
</p>

<p
  style={{
    marginTop: "20px",
    fontSize: "1rem",
    color: "#666",
    textAlign: "center",
  }}
>
  📧 Email me directly at:
  <br />
  <strong style={{ color: "#6d94c5" }}>KHaledalahmad@gmail.com</strong>
</p>

<hr
  style={{
    width: "50%",
    margin: "15px auto",
    borderTop: "2px solid #6d94c5",
    opacity: 0.3,
  }}
/>

        </div>

        <form
          onSubmit={handleSubmit}
          className="shadow-lg"
          style={{
            flex: 1,
            backgroundColor: "#f5efe6",
            borderRadius: "14px",
            padding: "25px 40px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          
          }}
        >
          <h2
            className="text-center mb-2"
            style={{
              color: "#6d94c5",
              fontSize: "2.2rem",
              fontWeight: "bold",
              fontFamily: "Playfair Display",
            }}
          >
            Contact Me
          </h2>

          <p
            className="text-center mb-3"
            style={{
              fontFamily: "Nunito",
              fontSize: "1.1rem",
              color: "#444",
              marginBottom: "10px",
            }}
          >
            Get in touch and let’s build something amazing together.
          </p>

          <div className="d-flex gap-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
              style={{ padding: "10px", fontSize: "0.95rem" }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              style={{ padding: "10px", fontSize: "0.95rem" }}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
            style={{ padding: "10px", fontSize: "0.95rem" }}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control"
            style={{ padding: "10px", fontSize: "0.95rem" }}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            required
            style={{ padding: "10px", fontSize: "0.95rem" }}
          ></textarea>

          <button
            type="submit"
            className="btn w-100 mt-2"
            style={{
              backgroundColor: "#6d94c5",
              color: "#fdebd0",
              fontWeight: 600,
              padding: "10px",
              fontSize: "1rem",
              borderRadius: "8px",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
