import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: October 27, 2025</p>

        <p className="intro">
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure 
          of Your information when You use the Service and tells You about Your privacy rights and how the 
          law protects You.
        </p>

        <section className="terms-section">
          <h2>Interpretation and Definitions</h2>
          <p>
            The words whose initial letters are capitalized have meanings defined under the following 
            conditions. The following definitions shall have the same meaning regardless of whether they 
            appear in singular or in plural.
          </p>
        </section>

        <section className="terms-section">
          <h2>Collecting and Using Your Personal Data</h2>
          <p>
            While using Our Service, We may ask You to provide Us with certain personally identifiable 
            information that can be used to contact or identify You. Personally identifiable information 
            may include, but is not limited to:
          </p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Usage Data</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>Tracking Technologies and Cookies</h2>
          <p>
            We use Cookies and similar tracking technologies to track the activity on Our Service and 
            store certain information. We use both Session and Persistent Cookies for the purposes of 
            providing essential services, remembering cookie preferences, and functionality.
          </p>
        </section>

        <section className="terms-section">
          <h2>Use of Your Personal Data</h2>
          <p>The Company may use Personal Data for the following purposes:</p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To manage Your Account</li>
            <li>To contact You</li>
            <li>To manage Your requests</li>
            <li>For business transfers</li>
            <li>For other purposes such as data analysis</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>Retention of Your Personal Data</h2>
          <p>
            The Company will retain Your Personal Data only for as long as is necessary for the purposes 
            set out in this Privacy Policy. We will retain and use Your Personal Data to the extent 
            necessary to comply with our legal obligations.
          </p>
        </section>

        <section className="terms-section">
          <h2>Security of Your Personal Data</h2>
          <p>
            The security of Your Personal Data is important to Us, but remember that no method of 
            transmission over the Internet is 100% secure. While We strive to use commercially reasonable 
            means to protect Your Personal Data, We cannot guarantee its absolute security.
          </p>
        </section>

        <section className="terms-section">
          <h2>Children's Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 13. We do not knowingly collect 
            personally identifiable information from anyone under the age of 13.
          </p>
        </section>

        <section className="terms-section">
          <h2>Links to Other Websites</h2>
          <p>
            Our Service may contain links to other websites that are not operated by Us. If You click on a 
            third party link, You will be directed to that third party's site. We strongly advise You to 
            review the Privacy Policy of every site You visit.
          </p>
        </section>

        <section className="terms-section">
          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update Our Privacy Policy from time to time. We will notify You of any changes by 
            posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, You can contact us:</p>
          <p className="contact-email">
            By email: <a href="mailto:coderise0@gmail.com">coderise0@gmail.com</a>
          </p>
        </section>

        <div className="policy-footer">
          <p>Thank you for reviewing our Privacy Policy.</p>
        </div>
      </div>

      <style jsx>{`
        .terms-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .terms-content h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #2c3e50;
          text-align: center;
        }

        .last-updated {
          text-align: center;
          color: #666;
          margin-bottom: 3rem;
          font-style: italic;
        }

        .intro {
          color: #555;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 2rem;
          text-align: justify;
        }

        .terms-section {
          margin-bottom: 2.5rem;
        }

        .terms-section h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #34495e;
          border-bottom: 2px solid #ecf0f1;
          padding-bottom: 0.5rem;
        }

        .terms-section p {
          margin-bottom: 1rem;
          color: #555;
        }

        .terms-section ul {
          margin: 1rem 0;
          padding-left: 2rem;
        }

        .terms-section li {
          margin-bottom: 0.5rem;
          color: #555;
        }

        .contact-section {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 2px solid #ecf0f1;
        }

        .contact-section h2 {
          color: #2c3e50;
        }

        .contact-email a {
          color: #3498db;
          text-decoration: none;
        }

        .contact-email a:hover {
          text-decoration: underline;
        }

        .policy-footer {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #ecf0f1;
          text-align: center;
          color: #7f8c8d;
        }

        @media (max-width: 768px) {
          .terms-container {
            padding: 1rem;
          }

          .terms-content h1 {
            font-size: 2rem;
          }

          .terms-section h2 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  );
}

export default PrivacyPolicy;