import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function TermsOfService() {
  return (
    <>
      <div className="herosection">
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
                <a href="#">home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">My Projects</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a className="Contact" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="terms-page">
        <div className="terms-header">
          <h1>Terms of Service</h1>
          <p className="last-updated">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="terms-content">
          <div className="intro-section">
            <p>
              Welcome to my portfolio. By accessing and using this website, you
              agree to comply with and be bound by the following terms and
              conditions.
            </p>
          </div>

          <div className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this portfolio website, you accept and
              agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily view the materials
              (information or software) on this portfolio website for personal,
              non-commercial transitory viewing only.
            </p>
            <div className="subsection">
              <p>
                <strong>Under this license you may not:</strong>
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for commercial purposes</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove copyright or proprietary notations</li>
                <li>Transfer materials to another person or mirror them</li>
              </ul>
            </div>
          </div>

          <div className="terms-section">
            <h2>3. Disclaimer</h2>
            <p>
              The materials on this portfolio website are provided on an 'as is'
              basis. I make no warranties, expressed or implied, and hereby
              disclaim and negate all other warranties including, without
              limitation, implied warranties or conditions of merchantability.
            </p>
          </div>

          <div className="terms-section">
            <h2>4. Limitations</h2>
            <p>
              In no event shall I or my suppliers be liable for any damages
              (including, without limitation, damages for loss of data or
              profit, or due to business interruption) arising out of the use or
              inability to use the materials on this portfolio website.
            </p>
          </div>

          <div className="terms-section">
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on this portfolio website could include
              technical, typographical, or photographic errors. I do not warrant
              that any of the materials on this website are accurate, complete
              or current.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Links</h2>
            <p>
              I have not reviewed all of the sites linked to this website and am
              not responsible for the contents of any such linked site. The
              inclusion of any link does not imply endorsement by me of the
              site.
            </p>
          </div>

          <div className="terms-section">
            <h2>7. Modifications</h2>
            <p>
              I may revise these terms of service for this website at any time
              without notice. By using this website you are agreeing to be bound
              by the then current version of these terms of service.
            </p>
          </div>

          <div className="terms-section">
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of your country/state and you irrevocably
              submit to the exclusive jurisdiction of the courts in that
              location.
            </p>
          </div>

          <div className="contact-section">
            <h2>Have Questions?</h2>
            <p>
              If you have any questions about these Terms of Service, please
              feel free to contact me.
            </p>
            <a href="#contact" className="contact-button">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h4 className="footer-name">Khaled Alahmad</h4>
            <p className="footer-description">
              Full Stack Developer passionate about building modern, clean, and
              high-performance web apps.
            </p>
            <p className="footer-address">Address: Amman, Jordan</p>
            <ul className="social-links2">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-columns">
            <div className="col">
              <h6>Site Map</h6>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About Me</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h6>Social Links</h6>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h6>Legal</h6>
              <ul>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-of-service">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Khaled Alahmad. All rights reserved. |
            <a href="/privacy-policy"> Privacy Policy</a> |
            <a href="/terms-of-service"> Terms of Service</a>
          </p>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .herosection {
          margin-bottom: 90px;
        }

        .herosection .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 90px;
          width: 100%;
          font-family: var(--title-main);
          background: rgb(235, 235, 235);
          backdrop-filter: blur(10px);
          box-shadow: 0 1px 5px rgba(85, 85, 85, 0.333);
        }

        .herosection .header nav ul {
          display: flex;
          font-family: var(--title-main);
          margin: 0;
          gap: 0px;
        }

        .herosection .header h3 {
          text-transform: uppercase;
          color: #222;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
          transition: transform 0.3s ease;
        }

        .herosection .header h3 img {
          height: 150px;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
          transition: filter 0.3s ease;
          padding-right: 200px;
        }

        .herosection .header nav ul li {
          position: relative;
        }

        .herosection .header nav ul li a {
          text-transform: capitalize;
          color: #222;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 10px 20px;
          display: block;
          font-family: "Nunito";
          transition: all 0.3s ease;
          margin-left: 0px;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
        }

        .herosection .header nav ul li a:not(.Contact)::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          height: 2px;
          width: 0;
          transition: all 0.4s ease;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #0b1d51, rgba(173, 147, 3, 0.849));
        }

        .herosection .header nav ul li a:not(.Contact):hover::before {
          width: 80%;
        }

        .herosection .header nav ul li a:not(.Contact):hover {
          color: #0b1d51;
          transform: translateY(-3px);
        }

        .herosection .header nav ul li .Contact {
          color: #fff;
          font-size: 1.1rem;
          background: linear-gradient(135deg, #0b1d51 0%, #1e3a8a 100%);
          border-radius: 15px;
          padding: 10px 25px;
          box-shadow: 0 4px 15px rgba(11, 29, 81, 0.3);
        }

        .herosection .header nav ul li .Contact:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(11, 29, 81, 0.4);
        }

        .terms-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          padding: 40px 20px 60px;
        }

        .terms-header {
          max-width: 900px;
          margin: 0 auto 40px;
          padding-bottom: 30px;
          border-bottom: 2px solid #e5e7eb;
        }

        .terms-header h1 {
          font-size: 2.5rem;
          color: #0b1d51;
          margin-bottom: 10px;
          font-family: "Playfair Display", serif;
          font-weight: 700;
        }

        .last-updated {
          color: #6b7280;
          font-size: 0.95rem;
          font-family: "Nunito", sans-serif;
        }

        .terms-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .intro-section {
          background: #f9fafb;
          padding: 25px;
          border-radius: 8px;
          margin-bottom: 40px;
          border-left: 4px solid #0b1d51;
        }

        .intro-section p {
          font-size: 1.05rem;
          color: #374151;
          line-height: 1.7;
          font-family: "Nunito", sans-serif;
          margin: 0;
        }

        .terms-section {
          margin-bottom: 35px;
          padding-bottom: 35px;
          border-bottom: 1px solid #e5e7eb;
        }

        .terms-section:last-of-type {
          border-bottom: none;
        }

        .terms-section h2 {
          font-size: 1.5rem;
          color: #0b1d51;
          margin-bottom: 15px;
          font-family: "Playfair Display", serif;
          font-weight: 600;
        }

        .terms-section p {
          color: #4b5563;
          line-height: 1.8;
          font-size: 1rem;
          font-family: "Nunito", sans-serif;
          margin-bottom: 15px;
        }

        .subsection {
          background: #f9fafb;
          padding: 20px;
          border-radius: 6px;
          margin-top: 15px;
        }

        .subsection p {
          color: #0b1d51;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .subsection ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .subsection li {
          padding: 8px 0;
          color: #4b5563;
          position: relative;
          padding-left: 25px;
          font-family: "Nunito", sans-serif;
        }

        .subsection li:before {
          content: "•";
          position: absolute;
          left: 8px;
          color: #0b1d51;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .contact-section {
          background: #f9fafb;
          padding: 40px;
          border-radius: 8px;
          text-align: center;
          margin-top: 50px;
          border: 1px solid #e5e7eb;
        }

        .contact-section h2 {
          font-size: 1.8rem;
          color: #0b1d51;
          margin-bottom: 15px;
          font-family: "Playfair Display", serif;
        }

        .contact-section p {
          font-size: 1.05rem;
          color: #4b5563;
          margin-bottom: 25px;
          font-family: "Nunito", sans-serif;
        }

        .contact-button {
          display: inline-block;
          padding: 12px 35px;
          background: #0b1d51;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: "Nunito", sans-serif;
        }

        .contact-button:hover {
          background: #1e3a8a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(11, 29, 81, 0.3);
        }

        .footer {
          background-color: #f5efe6;
          color: #000000;
          padding: 50px 20px 20px;
          width: 100%;
          box-sizing: border-box;
          margin-top: 60px;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
          gap: 40px;
        }

        .footer-left {
          max-width: 300px;
          flex: 1;
          min-width: 250px;
        }

        .footer-name {
          font-size: 20px;
          font-weight: bold;
          font-family: "Playfair Display";
          margin-bottom: 15px;
        }

        .footer-description {
          font-size: 15px;
          color: #333333;
          font-family: "Nunito";
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .footer-address {
          font-size: 14px;
          font-weight: 500;
          color: #333333;
          font-family: "Nunito";
        }

        .social-links2 {
          list-style: none;
          display: flex;
          gap: 15px;
          margin-top: 15px;
          padding: 0;
        }

        .social-links2 li a {
          color: #333333;
          font-size: 20px;
          transition: 0.3s;
        }

        .social-links2 li a:hover {
          color: #0b1d51;
        }

        .footer-columns {
          display: flex;
          gap: 60px;
          flex-wrap: wrap;
        }

        .footer-columns .col {
          min-width: 150px;
        }

        .footer-columns .col h6 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 15px;
          font-family: "Playfair Display";
          color: #0b1d51;
        }

        .footer-columns .col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-columns .col ul li {
          margin-bottom: 8px;
        }

        .footer-columns .col ul li a {
          text-decoration: none;
          color: #333333;
          font-size: 0.95rem;
          font-family: "Nunito";
          transition: 0.3s;
        }

        .footer-columns .col ul li a:hover {
          color: #0b1d51;
        }

        .footer-bottom {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .footer-bottom p {
          text-align: center;
          font-size: 0.875rem;
          font-family: "Nunito";
          color: #4b5563;
        }

        .footer-bottom a {
          color: #333333;
          text-decoration: none;
          margin: 0 5px;
        }

        .footer-bottom a:hover {
          color: #0b1d51;
        }

        @media (max-width: 1024px) {
          .terms-header h1 {
            font-size: 2rem;
          }

          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .footer-columns {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .terms-page {
            padding: 30px 15px 40px;
          }

          .terms-header h1 {
            font-size: 1.8rem;
          }

          .terms-section h2 {
            font-size: 1.3rem;
          }

          .intro-section,
          .contact-section {
            padding: 20px;
          }

          .footer-columns {
            gap: 30px;
          }
        }

        @media (max-width: 480px) {
          .terms-header h1 {
            font-size: 1.5rem;
          }

          .contact-section h2 {
            font-size: 1.5rem;
          }

          .footer-columns {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
}
