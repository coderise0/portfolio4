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
        backgroundColor: "",
        paddingTop: "100px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="shadow-lg"
        style={{
          width: "85%",
          maxWidth: "1200px",
          backgroundColor: "#f5efe6",
          borderRadius: "16px",
          padding: "30px 60px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginLeft: "110px",
          height: "70%",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ color: "#6d94c5", fontSize: "2rem", fontWeight: "bold" }}
        >
          Contact Me
        </h2>

        <div className="d-flex gap-3 mb-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
            style={{ padding: "12px", fontSize: "1rem" }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            style={{ padding: "12px", fontSize: "1rem" }}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
            style={{ padding: "12px", fontSize: "1rem" }}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control"
            style={{ padding: "12px", fontSize: "1rem" }}
          />
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            required
            style={{ padding: "12px", fontSize: "1rem" }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn w-100"
          style={{
            backgroundColor: "#6d94c5",
            color: "#fdebd0",
            fontWeight: 600,
            padding: "12px",
            fontSize: "1.1rem",
            borderRadius: "10px",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
export default ContactForm