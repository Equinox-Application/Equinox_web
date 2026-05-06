import './InvestorCharterPage.css';

function InvestorCharterPage() {
  return (
    <div className="investor-charter-page">
      <div className="charter-header">
        <a href="/" className="back-link">← Back to Home</a>
        <h1>Investor Charter</h1>
        <h2>Annexure-A</h2>
        <h3>Investor Charter in respect of Research Analyst (RA)</h3>
      </div>
      
      <div className="charter-content">
        <section className="vision-mission">
          <h4>Vision and Mission Statements for investors</h4>
          
          <div className="section-content">
            <h5>Vision</h5>
            <p>Invest with knowledge & safety.</p>
            
            <h5>Mission</h5>
            <p>Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>
          </div>
        </section>

        <section className="business-details">
          <h4>Details of business transacted by the Research Analyst with respect to the investors</h4>
          <ul>
            <li>To publish research report based on the research activities of the RA</li>
            <li>To provide an independent unbiased view on securities.</li>
            <li>To offer unbiased recommendation, disclosing the financial interests in recommended securities.</li>
            <li>To provide research recommendation, based on analysis of publicly available information and known observations.</li>
            <li>To conduct audit annually</li>
            <li>To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.</li>
            <li>To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.</li>
          </ul>
        </section>

        <section className="services-details">
          <h4>Details of services provided to investors (No Indicative Timelines)</h4>
          <ul>
            <li>Onboarding of Clients</li>
            <li>Sharing of terms and conditions of research services</li>
            <li>Completing KYC of fee paying clients</li>
          </ul>
          
          <div className="disclosure-section">
            <h5>Disclosure to Clients:</h5>
            <ul>
              <li>To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any</li>
              <li>To disclose the extent of use of Artificial Intelligence tools in providing research services</li>
              <li>To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures</li>
              <li>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.</li>
              <li>To distribute research reports and recommendations to the clients without discrimination.</li>
              <li>To maintain confidentiality w.r.t publication of the research report until made available in the public domain.</li>
              <li>To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information</li>
              <li>To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines</li>
              <li>To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services</li>
              <li>To treat all clients with honesty and integrity</li>
              <li>To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information.</li>
            </ul>
          </div>
        </section>

        <section className="grievance-mechanism">
          <h4>Details of grievance redressal mechanism and how to access it</h4>
          <p>Investor can lodge complaint/grievance against Research Analyst in the following ways:</p>
          
          <div className="complaint-modes">
            <h5>Mode of filing the complaint with research analyst</h5>
            <p>In case of any grievance/complaint, an investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.</p>
            
            <h5>Mode of filing the complaint on SCORES or with Research Analyst</h5>
            <p>Administration and Supervisory Body (RAASB)</p>
            <p>SCORES 2.0 (a web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner) (<a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer">https://scores.sebi.gov.in</a>)</p>
            
            <h5>Two level review for complaint/grievance against Research Analyst:</h5>
            <ul>
              <li>First review done by designated body (RAASB)</li>
              <li>Second review done by SEBI</li>
              <li>Email to designated email ID of RAASB</li>
            </ul>
            
            <p>If the Investor is not satisfied with the resolution provided by the Market Participants, then the Investor has the option to file the complaint/ grievance on SMARTODR platform for its resolution through online conciliation or arbitration.</p>
            
            <p>With regard to physical complaints, investors may send their complaints to:</p>
            <p>Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai-400 051</p>
          </div>
        </section>

        <section className="investor-rights">
          <h4>Rights of investors</h4>
          <div className="rights-grid">
            <div className="rights-column">
              <h5>Basic Rights</h5>
              <ul>
                <li>Right to Privacy and Confidentiality</li>
                <li>Right to Transparent Practices</li>
                <li>Right to fair and Equitable Treatment</li>
                <li>Right to Adequate Information</li>
                <li>Right to Initial and Continuing Disclosure</li>
                <li>Right to receive information about all the statutory and regulatory disclosures</li>
                <li>Right to Fair & True Advertisement</li>
                <li>Right to Awareness about Service Parameters and Turnaround Times</li>
                <li>Right to be informed of the timelines for each service</li>
                <li>Right to be Heard and Satisfactory Grievance Redressal</li>
                <li>Right to have timely redressal</li>
                <li>Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst</li>
                <li>Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services</li>
              </ul>
            </div>
            
            <div className="rights-column">
              <h5>Additional Rights to vulnerable consumers</h5>
              <ul>
                <li>Right to get access to services in a suitable manner even if differently abled</li>
                <li>Right to provide feedback on the financial products and services used</li>
                <li>Right against coercive, unfair, and one-sided clauses in financial agreements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="investor-responsibilities">
          <h4>Expectations from the investors (Responsibilities of investors)</h4>
          
          <div className="responsibilities-grid">
            <div className="responsibilities-column">
              <h5>Do's</h5>
              <ol>
                <li>Always deal with SEBI registered Research Analyst.</li>
                <li>Ensure that the Research Analyst has a valid registration certificate.</li>
                <li>Check for SEBI registration number.</li>
                <li>Please refer to the list of all SEBI registered Research Analyst which is available on SEBI website in the following link: <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmld=14" target="_blank" rel="noopener noreferrer">https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmld=14</a></li>
                <li>Always pay attention towards disclosures made in the research reports before investing.</li>
                <li>Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCOM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only)</li>
                <li>Before buying/ selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst.</li>
                <li>Ask all relevant questions and clear your doubts with your Research Analyst before acting on recommendation.</li>
                <li>Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.</li>
                <li>Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.</li>
                <li>Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.</li>
                <li>Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions.</li>
                <li>Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
              </ol>
            </div>
            
            <div className="responsibilities-column">
              <h5>Don'ts</h5>
              <ol>
                <li>Do not provide funds for investment to the Research Analyst.</li>
                <li>Don't fall prey to luring advertisements or market rumors.</li>
                <li>Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.</li>
                <li>Do not share login credential and password of your trading, demat or bank accounts with the Research Analyst.</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default InvestorCharterPage;
