import React from 'react';

export default function TermsOfService() {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this portfolio website, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily view the materials (information or software) on this 
            portfolio website for personal, non-commercial transitory viewing only.
          </p>
          <p>
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose;</li>
            <li>attempt to decompile or reverse engineer any software contained on this website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>3. Disclaimer</h2>
          <p>
            The materials on this portfolio website are provided on an 'as is' basis. I make no warranties, 
            expressed or implied, and hereby disclaim and negate all other warranties including, without 
            limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
            or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Limitations</h2>
          <p>
            In no event shall I or my suppliers be liable for any damages (including, without limitation, 
            damages for loss of data or profit, or due to business interruption) arising out of the use or 
            inability to use the materials on this portfolio website.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on this portfolio website could include technical, typographical, or 
            photographic errors. I do not warrant that any of the materials on this website are accurate, 
            complete or current.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Links</h2>
          <p>
            I have not reviewed all of the sites linked to this website and am not responsible for the 
            contents of any such linked site. The inclusion of any link does not imply endorsement by me 
            of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Modifications</h2>
          <p>
            I may revise these terms of service for this website at any time without notice. By using this 
            website you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of your 
            country/state and you irrevocably submit to the exclusive jurisdiction of the courts in that 
            location.
          </p>
        </section>

        <section className="contact-section">
          <h2>Contact Me</h2>
          <p>
            If you have any questions about these Terms of Service, please contact me through the 
            contact information provided on this portfolio.
          </p>
        </section>
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