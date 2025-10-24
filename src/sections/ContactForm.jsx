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
    <div className="#f75270 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="card shadow p-4 w-100"
        style={{
          maxWidth: "600px",
          backgroundColor: "#f5efe6",
          borderRadius: "12px",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#6d94c5" }}>
          Contact Me
        </h2>

        <div className="d-flex gap-2 mb-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
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
          />
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn w-100"
          style={{
            backgroundColor: "#6d94c5",
            color: "#fdebd0",
            fontWeight: 600,
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
