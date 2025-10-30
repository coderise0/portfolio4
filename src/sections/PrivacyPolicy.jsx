import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function PrivacyPolicy() {
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
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: October 27, 2025</p>
        </div>

        <div className="terms-content">
          <div className="intro-section">
            <p>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
          </div>

          <div className="terms-section">
            <h2>Interpretation and Definitions</h2>
            <p>
              The words whose initial letters are capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
          </div>

          <div className="terms-section">
            <h2>Collecting and Using Your Personal Data</h2>
            <p>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>
            <div className="subsection">
              <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Usage Data</li>
              </ul>
            </div>
          </div>

          <div className="terms-section">
            <h2>Tracking Technologies and Cookies</h2>
            <p>
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. We use both
              Session and Persistent Cookies for the purposes of providing
              essential services, remembering cookie preferences, and
              functionality.
            </p>
          </div>

          <div className="terms-section">
            <h2>Use of Your Personal Data</h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            <div className="subsection">
              <ul>
                <li>To provide and maintain our Service</li>
                <li>To manage Your Account</li>
                <li>To contact You</li>
                <li>To manage Your requests</li>
                <li>For business transfers</li>
                <li>For other purposes such as data analysis</li>
              </ul>
            </div>
          </div>

          <div className="terms-section">
            <h2>Retention of Your Personal Data</h2>
            <p>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations.
            </p>
          </div>

          <div className="terms-section">
            <h2>Security of Your Personal Data</h2>
            <p>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet is 100%
              secure. While We strive to use commercially reasonable means to
              protect Your Personal Data, We cannot guarantee its absolute
              security.
            </p>
          </div>

          <div className="terms-section">
            <h2>Children's Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13.
            </p>
          </div>

          <div className="terms-section">
            <h2>Links to Other Websites</h2>
            <p>
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </p>
          </div>

          <div className="terms-section">
            <h2>Changes to this Privacy Policy</h2>
            <p>
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date.
            </p>
          </div>

          <div className="contact-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <p className="contact-email">
              By email:{" "}
              <a href="mailto:coderise0@gmail.com">coderise0@gmail.com</a>
            </p>
            <div className="thank-you">
              <p>Thank you for reviewing our Privacy Policy.</p>
            </div>
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
          margin-bottom: 15px;
          font-family: "Nunito", sans-serif;
        }

        .contact-email {
          margin-bottom: 30px;
        }

        .contact-email a {
          color: #0b1d51;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .contact-email a:hover {
          text-decoration: underline;
        }

        .thank-you {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
        }

        .thank-you p {
          color: #6b7280;
          font-style: italic;
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
