import './RefundPolicyPage.css';

function RefundPolicyPage() {
  return (
    <div className="refund-policy-page">
      <div className="refund-header">
        <a href="/" className="back-link">← Back to Home</a>
        <h1>Refund Policy</h1>
      </div>
      
      <div className="refund-content">
        <section className="refund-section">
          <h2>No-Refund Policy</h2>
          <p>Equinox Research & Advisors adheres to a no-refund policy for subscriptions to our services, irrespective of the reason. Once a service is subscribed, it is non-refundable and non-cancelable. However, upon a specific written request from the subscriber, a service may be placed on hold for a reasonable period. After the holding period expires, the service will be considered as rendered and closed.</p>
        </section>

        <section className="refund-section">
          <h2>Ethical Business Practices</h2>
          <p>At Equinox Research & Advisors, we uphold ethical business practices and maintain a high standard of moral and ethical conduct in all our day-to-day operations and dealings. Should clients encounter any specific issues related to their business with Equinox Research & Advisors, we encourage them to communicate with us via our support email for a prompt and effective resolution of their grievances within a reasonable timeframe.</p>
        </section>

        <section className="refund-section">
          <h2>Grievance Escalation</h2>
          <p>If, for any reason, we are unable to address the issue within 30 working days, clients are welcome to escalate their concerns to SEBI through the SEBI SCORES platform at <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer">https://scores.sebi.gov.in/</a></p>
        </section>

        <div className="refund-footer">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p>For any questions regarding this Refund Policy, please contact us at <a href="mailto:prandad@gmail.com">prandad@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicyPage;
