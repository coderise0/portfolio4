import "../styles/Footer.css";
import logo from "../styles/Logo.jpg";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
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
                <a href="#hero">Home</a>
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
                <a href="#"> Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 Khaled Alahmad. All rights reserved. |
          <a href="#"> Privacy Policy</a> |<a href="#"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
