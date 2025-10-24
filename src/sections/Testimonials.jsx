import { useState, useEffect } from 'react';
import '../styles/Testimonisls.css';

export function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/testimonials.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error('Error fetching testimonials:', err));
  }, []);

  return (
    <div className="container my-5">
      <h5 className="text-center text-secondary">Happy Customers</h5>
      <h1 className="text-center mb-4">Testimonials</h1>
      <p className="text-center mb-5">
        Authentic testimonials from incredible clients and co-workers who trusted me with their
        digital dreams.
        <span> Building relationships through exceptional work</span>
      </p>

      <div className="row g-3">
        {testimonials.length === 0 ? (
          <p className="text-center">Loading testimonials...</p>
        ) : (
          testimonials.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div className="card shadow-sm border-0 h-100">
                <img src={item.image} className="card-img-top testimonial-img" alt={item.name} />
                <div className="card-body text-center">
                  <h4 className="card-title">{item.name}</h4>
                  <h6 className="card-subtitle text-center">{item.specialization}</h6>
                  <div className="stars">
                    {'★'.repeat(item.rating) + '☆'.repeat(5 - item.rating)}
                  </div>
                  <p className="card-text">“{item.text}”</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
