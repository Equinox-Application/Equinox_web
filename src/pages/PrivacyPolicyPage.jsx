import './PrivacyPolicyPage.css';

function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-header">
        <a href="/" className="back-link">← Back to Home</a>
        <h1>Privacy Policy</h1>
      </div>
      
      <div className="privacy-content">
        <div className="privacy-intro">
          <p>Equinox Research & Advisors, owned by Mr. Pankaj Randad, prioritizes the confidentiality and protection of customer information. Our privacy policy is designed to ensure transparency and safeguard your data. Please review the details below:</p>
        </div>

        <section className="privacy-section">
          <h2>Data Collection</h2>
          <p>Equinox Research & Advisors, represented by Mr. Pankaj Randad, does not share or sell any customer information gathered through online forms or telephonic conversations. The collected data is utilized solely to understand customer profiles and needs, enabling us to provide tailored services.</p>
        </section>

        <section className="privacy-section">
          <h2>Cookies Usage</h2>
          <p>We employ 'cookies' on our website, which are files stored in the browser's device storage to collect information. You have the right to reject the use of cookies, though this may limit access to specific sections of our website.</p>
        </section>

        <section className="privacy-section">
          <h2>Data Security</h2>
          <p>Equinox Research & Advisors, under the proprietorship of Mr. Pankaj Randad, employs secure servers to protect your credentials and continually enhances data protection measures. While we make every effort to secure your information, it's important to note that no method is entirely foolproof, and compromises may occur. Equinox Research & Advisors is not liable for data loss or modification due to such instances.</p>
        </section>

        <section className="privacy-section">
          <h2>Privacy Policy Amendments</h2>
          <p>We reserve the right to amend our privacy policy as needed. Any modifications will be communicated to customers via email.</p>
        </section>

        <section className="privacy-section">
          <h2>Subscription Agreement</h2>
          <p>By subscribing to our services, you acknowledge and agree to adhere to all clauses outlined in this privacy policy.</p>
        </section>

        <section className="privacy-section">
          <h2>Contact Information</h2>
          <p>For any queries or concerns regarding our privacy practices, please contact us through the provided contact details.</p>
        </section>

        <div className="privacy-footer">
          <p>Thank you for entrusting Equinox Research & Advisors with your information.</p>
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p>For any questions regarding this Privacy Policy, please contact us at <a href="mailto:prandad@gmail.com">prandad@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
