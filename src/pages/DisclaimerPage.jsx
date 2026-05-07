import { useParams } from 'react-router-dom';
import './DisclaimerPage.css';

const disclaimers = [
  {
    id: 1,
    title: 'Grievance Redressal Escalation Matrix',
    content: `<div class="grievance-content">
      <table class="grievance-table">
        <thead>
          <tr>
            <th>Details of Designation</th>
            <th>Contact Person</th>
            <th>Address</th>
            <th>Contact No</th>
            <th>Email ID</th>
            <th>Working Hours when Complainant can call</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Head of Customer Care</td>
            <td>Pankaj R Randad</td>
            <td>Equinox Research And Advisors Office No 8, 3rd Floor, Himagauri Sunanda Apartment, Above KFC Outlet, Karishma Chauk, Kothrud, 411038.</td>
            <td>+91 83082 66666</td>
            <td>prandad@gmail.com</td>
            <td>10 AM to 4 PM</td>
          </tr>
          <tr>
            <td>Customer Support</td>
            <td>Pankaj R Randad</td>
            <td>Equinox Research And Advisors Office No 8, 3rd Floor, Himagauri Sunanda Apartment, Above KFC Outlet, Karishma Chauk, Kothrud, 411038.</td>
            <td>+91 83082 66666</td>
            <td>prandad@gmail.com</td>
            <td>10 AM to 4 PM</td>
          </tr>
          <tr>
            <td>Compliance Officer</td>
            <td>Pankaj R Randad</td>
            <td>Equinox Research And Advisors Office No 8, 3rd Floor, Himagauri Sunanda Apartment, Above KFC Outlet, Karishma Chauk, Kothrud, 411038.</td>
            <td>+91 83082 66666</td>
            <td>prandad@gmail.com</td>
            <td>10 AM to 4 PM</td>
          </tr>
        </tbody>
      </table>
      
      <div class="escalation-info">
        <p>If, for any reason, we are unable to address the issue within 30 working days, clients are welcome to escalate their concerns to SEBI through the SEBI SCORES platform at <a href="https://scores.sebi.gov.in/" target="_blank">https://scores.sebi.gov.in/</a></p>
        
        <p>If in case the client is not satisfied with the resolution provided through SCORES the client may use the ODR Portal to lodge a complaint and get resolution through Alternate Dispute Resolution (ADR). Your attention is drawn to the SEBI circular no. SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131 dated July 31, 2023, on "Online Resolution of Disputes in the Indian Securities Market" – Refer to this Link (<a href="https://www.sebi.gov.in/legal/circulars/jul-2023/online-resolution-of-disputes-in-the-indian-securities-market_74794.html" target="_blank">https://www.sebi.gov.in/legal/circulars/jul-2023/online-resolution-of-disputes-in-the-indian-securities-market_74794.html</a>)</p>
        
        <p>A common Online Dispute Resolution Portal ("ODR Portal") which harnesses conciliation and online arbitration for resolution of disputes arising in the Indian Securities Market has been established.</p>
        
        <p>ODR Portal can be accessed via the following link – <a href="https://smartodr.in/" target="_blank">https://smartodr.in/</a></p>
      </div>
    </div>`
  },
  {
    id: 2,
    title: 'Complaint Board',
    content: `<div class="complaint-content">
      <h3>Monthly Complaint Statistics</h3>
      <table class="complaint-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Received from</th>
            <th>Pending at the end of last month</th>
            <th>Received</th>
            <th>Resolved*</th>
            <th>Total Pending#</th>
            <th>Pending Complaints > 3 Months</th>
            <th>Average Resolution Time^ (in days)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Directly from Investors</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>SEBI Scores</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Other Sources (if any)</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr class="grand-total">
            <td>Grand Total</td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      
      <div class="complaint-notes">
        <p>Number of complaints received during month against the RA due to impersonation by some other entity:</p>
        <ul>
          <li>* Inclusive of complaints of previous months resolved in the current month.</li>
          <li># Inclusive of complaints pending as on the last day of the month.</li>
          <li>^ Average Resolution time is the sum total of time taken to resolve each complaint, in days, in the current moth divided by total number of complaints resolved in the current month.</li>
        </ul>
      </div>

      <h3>Monthly Complaint Trend</h3>
      <table class="complaint-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Received from</th>
            <th>Carried forward from previous month</th>
            <th>Received</th>
            <th>Resolved*</th>
            <th>Pending#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>January, 2026</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>4</td>
            <td>February, 2026</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>5</td>
            <td>March, 2026</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>6</td>
            <td>April, 2026</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>7</td>
            <td>May, 2026</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr class="grand-total">
            <td>Grand Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <h3>Trend of annual disposal of complaints</h3>
      <table class="complaint-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Year</th>
            <th>Carried forward from previous year</th>
            <th>Received</th>
            <th>Resolved*</th>
            <th>Pending#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>2021-22</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2022-23</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
                  </tbody>
      </table>
    </div>`
  },
  {
    id: 3,
    title: 'Research Analyst Disclaimer and Disclosure',
    content: `<div class="disclaimer-content">
      <p>Investments in securities are subject to market risks, and there is no assurance or guarantees that the objectives of any of the schemes will be achieved. Mr. Pankaj Randad (Prop. Equinox Research & Advisors) a SEBI Registered Research Analyst, its Website, and any other constituents of the Website, including but not limited to Research Analysts, do not offer any guaranteed or indicative returns through the Services provided by the Website. The past performance displayed if any is not indicative of future performance. There is no assurance that past performances indicated with respect to Services will be repeated. The names of the Funds, Portfolio, and Schemes/option do not in any manner indicate their prospects or returns. The valuation of your investments may fluctuate due to market volatility in the equity and bond markets, fluctuations in interest rates, prevailing political and economic environment, changes in government policy, factors specific to the issuer of the securities, tax laws, and liquidity of the underlying instruments, settlement periods, and trading volumes. The investments made are subject to external risks such as war, natural calamities, and policy changes of local/international markets that affect stock markets.</p>
      
      <p>The information and views on this website & all the services provided are believed to be reliable, but we do not accept any responsibility (or liability) for errors of fact or opinion. Users have the right to choose the product/s that suits their individual risk appetite. Mr. Pankaj Randad (Prop. Equinox Research & Advisors) advises users to take investment decisions based on the recommendations of certified experts at Pankaj Randad (Prop. Equinox Research & Advisors). However, Pankaj Randad (Prop. Equinox Research & Advisors) does not guarantee the consistency, adequacy, or completeness of any information and is not responsible for any errors or omissions or for the results obtained from the use of such information. Pankaj Randad (Prop. Equinox Research & Advisors) especially states that it has no financial liability whatsoever to any user on account of the use of information provided on its website.</p>
      
      <p>You should strictly abide by the consultation provided by the qualified advisors at Pankaj Randad (Prop. Equinox Research & Advisors) and trade only as per the levels provided by us. You agree not to make actual stock trades based on comments on the site, nor on any techniques presented nor discussed on this site or any other form of information presentation. All information is for educational and informational use only. Unlike an actual performance record, simulated results do not represent actual trading.</p>
      
      <p>There are risks associated with utilizing internet and short messaging system (SMS) based information and research dissemination services. Subscribers are advised to understand that the services can fail due to the failure of hardware, software, and Internet connection. While Mr. Pankaj Randad (Prop. Equinox Research & Advisors) a SEBI Registered Research Analyst, ensures that the messages are delivered in time to the subscriber's Mobile Network, the delivery of these messages to the customer's mobile phone/handset is the responsibility of the customer's Mobile Network. SMS may be delayed and/or not delivered to the customer's mobile phone/handset on certain days, owing to technical reasons, and Mr. Pankaj Randad (Prop. Equinox Research & Advisors) a SEBI Registered Research Analyst cannot be held responsible for the same.</p>
      
      <p>Our Clients (Paid or Unpaid), any third party, or anyone else has no rights to forward or share our calls or SMS or Reports or Any Information Provided by us to/with anyone which is received directly or indirectly by them. If found to have done so, then serious legal actions can be taken. You understand and agree that, to the fullest extent permissible by law, Mr. Pankaj Randad (Prop. Equinox Research & Advisors) a SEBI Registered Research Analyst, including its employees, affiliates, and representatives, shall not be liable for any loss or damage, of any kind, direct or indirect, in connection with or arising from the use of the website or from these terms of use, including, but not limited to, compensatory, consequential, incidental, indirect, special, or punitive damages. Any action taken or not taken by you on the basis of the information contained on the Website or by any other means of communication made available to you by the Website is your responsibility alone, and the Website will not be liable in any manner whatsoever for the direct or indirect consequences of such action taken or not taken.</p>
      
      <p>Any surfing and reading of the information are considered as the acceptance of this disclaimer.</p>
      
      <div class="disclosure-section">
        <h3>DISCLOSURE</h3>
        <p>Equinox Research & Advisors, with proprietor Mr. Pankaj Randad (SEBI Reg. No. INH000008288), provides the following advisory for public awareness and safety. For further inquiries, please contact:</p>
        
        <div class="contact-info">
          <h4>Contact Information:</h4>
          <p><strong>Email:</strong> prandad@gmail.com<br>
          <strong>Website:</strong> equinoxresearch.in<br>
          <strong>Telephone:</strong> +91 83082 66666</p>
        </div>
        
        <div class="important-info">
          <h4>Important Information:</h4>
          
          <p><strong>SEBI Registration:</strong><br>
          Pankaj Randad (Prop. Equinox Research & Advisors) Research Analysts is a SEBI Registered Research Analyst with SEBI Registration Number: INH000008288.</p>
          
          <p><strong>Market Risks:</strong><br>
          Investments in the securities market are subject to market risks. It is essential to read all related documents carefully before making any investment decisions.</p>
          
          <p><strong>SEBI Registration and NISM Certification:</strong><br>
          SEBI registration and certification from NISM do not guarantee the performance of the intermediary or assure returns to investors.</p>
          
          <p><strong>Illustrative Securities:</strong><br>
          Securities quoted are for illustration only and are not recommendatory.</p>
          
          <p><strong>Risk Disclaimer:</strong><br>
          Different types of investments involve varying degrees of risk, and there is no assurance that future performance will be profitable or equal to historical performance.</p>
          
          <p><strong>Liability Disclaimer:</strong><br>
          Pankaj Randad (Prop. Equinox Research & Advisors) Research Analysts shall not be liable for misrepresentation, falsification, and deception availability through the website.</p>
          
          <p><strong>Employee Restrictions:</strong><br>
          Employees are restricted from participating in trading businesses or related activities to ensure unbiased services to clients.</p>
          
          <p><strong>Content Modification:</strong><br>
          Pankaj Randad (Prop. Equinox Research & Advisors) Research Analysts reserves the right to modify/change the content of its website, and clients are advised to update themselves regularly.</p>
          
          <p><strong>Conflicts of Interest:</strong><br>
          There are no material conflicts of interest at the time of publication of research reports or public appearances.</p>
          
          <p><strong>Market Activities:</strong><br>
          Pankaj Randad (Prop. Equinox Research & Advisors) Research Analysts and/or its associates have not served as officers, directors, or employees of the subject company and have not engaged in market making activities.</p>
        </div>
        
        <p>This advisory is issued in compliance with regulatory requirements and in the interest of transparent communication with the public.</p>
      </div>
    </div>`
  },
  {
    id: 4,
    title: 'Compliance Audit Status',
    content: `<div class="disclaimer-content">
      <h3>Compliance Audit Status</h3>
      <p>As communicated by BSE to all RAs, Compliance audit status is to be displayed on your website. The same be added in any page of your choice.</p>
      
      <p>Disclosure with respect to compliance with Annual compliance audit requirement under Regulation 25(3) of SEBI (Research Analyst) Regulations, 2014 for last financial years are as under:</p>
      
      <table class="complaint-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Financial Year</th>
            <th>Compliance Audit Status</th>
            <th>Remarks, If any</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>FY 2023-24</td>
            <td>Conducted</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>FY 2024-25</td>
            <td>Conducted</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>`
  },
  {
    id: 5,
    title: 'Grievance Mechanism for PwD',
    content: `<div class="disclaimer-content">
      <h3>Grievance Redressal Mechanism for Persons with Disabilities</h3>
      
      <p>In compliance with the SEBI circular, Equinox Research & Advisors has established a dedicated grievance redressal mechanism to address accessibility-related complaints from persons with disabilities (PwDs).</p>
      
      <h4>1. Dedicated Channels</h4>
      <ul>
        <li><strong>Email:</strong> prandad@gmail.com</li>
        <li><strong>Helpline:</strong> +91-8308266666 (operational Mon–Fri, 9:30 AM – 6:00 PM)</li>
        <li><strong>Web Form:</strong> Available on www.equinoxresearch.in/accessibility</li>
      </ul>
      
      <h4>2. Process</h4>
      <ul>
        <li>All accessibility-related grievances will be acknowledged within 2 working days.</li>
        <li>Resolution/response will be provided within 15 working days.</li>
        <li>Complex issues requiring longer timelines will be communicated clearly to the complainant.</li>
      </ul>
      
      <h4>3. Escalation Matrix</h4>
      <p><strong>Level 1: Nodal Officer</strong><br>
      Mr. Pankaj Randad<br>
      Email: prandad@gmail.com<br>
      Contact: +91-8308266666</p>
    </div>`
  }
];

function DisclaimerPage() {
  const { id } = useParams();
  const disclaimerId = parseInt(id);
  const disclaimer = disclaimers.find(d => d.id === disclaimerId);

  if (!disclaimer) {
    return <div>Disclaimer not found</div>;
  }

  return (
    <div className="disclaimer-page">
      <div className="disclaimer-header">
        <a href="/" className="back-link">← Back to Home</a>
        <h1>{disclaimer.title}</h1>
      </div>
      <div className="disclaimer-body" dangerouslySetInnerHTML={{ __html: disclaimer.content }}></div>
    </div>
  );
}

export default DisclaimerPage;
