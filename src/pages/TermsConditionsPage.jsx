import './TermsConditionsPage.css';

function TermsConditionsPage() {
  return (
    <div className="terms-conditions-page">
      <div className="terms-header">
        <a href="/" className="back-link">← Back to Home</a>
        <h1>Terms and Conditions</h1>
      </div>
      
      <div className="terms-content">
        <div className="terms-intro">
          <p>Following are the terms and conditions for customers when availing of any of Mr. Pankaj Randad (Prop. Equinox Research & Advisors) Research Analysts' service(s):</p>
        </div>

        <section className="terms-section">
          <h2>Regulatory Compliance</h2>
          <p>Being a SEBI-registered intermediary, we shall strictly abide by rules and regulations put forth by the regulatory authority – Securities and Exchange Board of India (SEBI) and shall not deviate from these rules and regulations. We follow the existing guidelines set by SEBI and will adjust our practices as a research analyst when these guidelines are changed, notified by directions, circulars, amendments and notifications.</p>
        </section>

        <section className="terms-section">
          <h2>Recommendations and Liability</h2>
          <p>We shall give buy/hold/sell recommendations based on clients requirements. Mr. Pankaj Randad (Prop. Equinox Research & Advisors) shall not be liable for any mismatch between the customers' expectations and the calls given based on the communication between the two parties.</p>
        </section>

        <section className="terms-section">
          <h2>Data Sources and Accuracy</h2>
          <p>Mr. Pankaj Randad (Prop. Equinox Research & Advisors) gives its calls based on data from secondary sources, available openly in the market on NSE, BSE, etc. While Mr. Pankaj Randad (Prop. Equinox Research & Advisors) takes all necessary steps to ensure the accuracy of this data, this is not a foolproof practice and Mr. Pankaj Randad (Prop. Equinox Research & Advisors) shall not be liable for any inaccuracies in its calls or published reports. It will be Mr. Pankaj Randad (Prop. Equinox Research & Advisors)'s sincere effort to only use data from trusted/verified sources.</p>
        </section>

        <section className="terms-section">
          <h2>Website Platform</h2>
          <p>Mr. Pankaj Randad (Prop. Equinox Research & Advisors)'s website is merely a platform to provide its services and is within the permitted guidelines on advertisement and marketing as per relevant SEBI Circular.</p>
        </section>

        <section className="terms-section">
          <h2>Research Reports Content</h2>
          <p>The content of research reports/calls are subjective and probable in nature but backed by strong and real market data, research and market dynamics. Mr. Pankaj Randad (Prop. Equinox Research & Advisors)'s researchers are qualified to give their personal thoughts and opinions in the reports/calls and are not to be quoted to be objectively correct anywhere or anytime. Mr. Pankaj Randad (Prop. Equinox Research & Advisors) is not liable for a contradiction to any of its content in any of its published reports/calls.</p>
        </section>

        <section className="terms-section">
          <h2>Communication and Notifications</h2>
          <p>By subscribing to any of our services, the customer agrees to being sent notifications via SMS and periodic email communications which can be any of the following but not limited to: newsletters, promotional content and research report links.</p>
        </section>

        <section className="terms-section">
          <h2>Confidentiality and Redistribution</h2>
          <p>The content in the reports of Mr. Pankaj Randad (Prop. Equinox Research & Advisors) is confidential in nature and is meant only for the subscribers of the company. Any form of redistribution of these reports through unauthorized sources is liable to be taken legal action against.</p>
        </section>

        <section className="terms-section">
          <h2>Official Communication Channels</h2>
          <p>Any research reports published by Mr. Pankaj Randad (Prop. Equinox Research & Advisors) will only be mailed/notified to our customers through the official email address which will be intimated to the customer upon subscription. Any research reports/calls received by you from any email address or social media, other than the one communicated to you and on website is not representative of Mr. Pankaj Randad (Prop. Equinox Research & Advisors)'s content and Mr. Pankaj Randad (Prop. Equinox Research & Advisors) shall not be liable for any loss/damage that arises from such unauthorized sources.</p>
        </section>

        <section className="terms-section">
          <h2>Agreement to Terms</h2>
          <p>By subscribing to our services, you agree to all the clauses of the Terms & Conditions of Mr. Pankaj Randad (Prop. Equinox Research & Advisors) Research analysts.</p>
        </section>

        <div className="terms-footer">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p>For any questions regarding these Terms and Conditions, please contact us at <a href="mailto:prandad@gmail.com">prandad@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default TermsConditionsPage;
