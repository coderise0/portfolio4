import "../styles/Footer.css";
import logo from "../styles/Logo.jpg";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';

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

        <div className=" footer-columns">
          <div className="col col-3 col-md-1 mb-6 ">
            <h6>Site Map</h6>
            <ul>
                     <li><Link smooth to="/#home">Home</Link></li>
          <li><Link smooth to="/#about">About Me</Link></li>
          <li><Link smooth to="/#skills">Skills</Link></li>
          <li><Link smooth to="/#experience">Experience</Link></li>
          <li><Link smooth to="/#projects">Projects</Link></li>
          <li><Link smooth to="/#testimonials">Testimonials</Link></li>
          <li><Link smooth to="/#contact" className="Contact">Contact</Link></li>
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
                <a href="/privacy-policy"> Privacy Policy</a>
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
          <a href="/privacy-policy"> Privacy Policy</a> |<a href="/terms-of-service"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
