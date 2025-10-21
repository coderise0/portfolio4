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
   
    <div className="bg-gray-800 min-h-screen flex justify-center items-center">
      {/* الفورم نفسه */}
      <form
        onSubmit={handleSubmit}
       // className="bg-gray-800 text-white w-full max-w-3xl p-8 rounded-lg"
      ><h2 >Contact Me</h2>

       
        <div >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            //className="w-1/2 p-2 bg-white text-black rounded outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
           // className="w-1/2 p-2 bg-white text-black rounded outline-none"
          />
        </div>

        {/* حقل الإيميل */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          //className="w-full p-2 mb-4 bg-white text-black rounded outline-none"
          required
        />

        {/* حقل الموضوع */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          //className="w-full p-2 mb-4 bg-white text-black rounded outline-none"
        />

        {/* حقل الرسالة (textarea) */}
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          //className="w-full p-2 mb-4 bg-white text-black rounded outline-none resize-none"
          required
        ></textarea>

        {/* زر الإرسال */}
        <button
          type="submit"
         // className="w-full bg-gray-300 text-red-500 font-semibold py-2 rounded hover:bg-gray-400 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
