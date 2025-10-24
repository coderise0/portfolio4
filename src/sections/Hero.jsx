import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <section className="herosection">
      <header className="header">
        <h3>
          <img
            src="/public/images.svg/WhatsApp Image 2025-10-22 at 22.14.54_88006938 (2).png"
            alt=""
          />
        </h3>

        <nav>
          <ul>
            <li>
              <a href="">About me</a>
            </li>

            <li>
              <a href="">skills</a>
            </li>

            <li>
              <a href="">My project</a>
            </li>
            <li>
              <a href="">experience</a>
            </li>

            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a className="Contact" href="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="dis">
          <div className="div1">
            <h1> Hi, I'm Khaled... </h1>
            <p>
              highly motivated <span> Full Stack Web Developer</span> and experienced UI/UX
              Designer. I currently work as a Freelancer while also contributing to a specialized
              tech company. My passion lies in building modern, user-friendly web solutions that
              bring creative ideas to life, achieved through a blend of clean code and aesthetic
              design principles. My expertise covers both the Frontend, ensuring intuitive user
              interaction and exceptional performance, and the Backend, where I focus on creating
              robust and scalable infrastructures to deliver reliable speed and functionality.
            </p>

            <button>
              <a href="public/images.svg/full-stack-developer.png" download="Khaled_Ahmed_CV.pdf">
                Download CV
              </a>
            </button>
          </div>

          <div className="div2">
            <img src="public\images.svg\istockphoto-1399565382-612x612.png" alt="" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
