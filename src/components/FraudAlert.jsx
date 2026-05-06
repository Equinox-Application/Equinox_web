import React, { useState, useEffect } from 'react';
import './FraudAlert.css';

const FraudAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Show after 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fraud-alert-backdrop" onClick={handleBackdropClick}>
      <div className="fraud-alert-modal">
        <div className="fraud-alert-header">
          <div className="fraud-alert-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <h2 className="fraud-alert-title">
            <span className="fraud-word">Fraud</span> Alert - Beware of Scams!
          </h2>
          <button className="fraud-alert-close" onClick={handleClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        
        <div className="fraud-alert-content">
          <div className="fraud-alert-section">
            <h3>Dear Valued Clients, Investors, and the General Public,</h3>
            <p>
              We want to bring to your attention some critical information regarding fraudulent activities that are currently circulating. It has come to our notice that unscrupulous individuals and entities, completely unrelated to our organization, are engaging in deceptive practices aimed at the general public.
            </p>
            <p>
              Their typical mode of operation includes making unsolicited contact via phone calls, emails, SMS, WhatsApp, Instagram direct messages, social media advertisements, look-alike apps, and even publishing misleading content. These fraudsters are pretending to be Mr. Pankaj Randad, the proprietor of Equinox Research & Advisors and a SEBI Registered Research Analyst. They are luring unsuspecting individuals with promises of unrealistically high profits, misusing Mr. Randad's name and reputation for their personal financial gain while tarnishing his image and reputation with regulatory authorities and the public.
            </p>
          </div>

          <div className="fraud-alert-section">
            <h4>Important Notice</h4>
            <p>
              Please be aware that anyone dealing with these fraudulent individuals does so entirely at their own risk and responsibility. Neither Mr. Pankaj Randad nor any of his employees at Equinox Research & Advisors will be held accountable for any losses incurred in such dealings. It is essential to note that Mr. Pankaj Randad does not operate any such apps or make any illicit promises of extraordinary profits through his research analyst services, as regulated by SEBI guidelines and circulars.
            </p>
          </div>

          <div className="fraud-alert-section">
            <h4>Official Contact Details</h4>
            <p>
              For those interested in availing Mr. Pankaj Randad's services as the proprietor of Equinox Research & Advisors, a SEBI Registered Research Analyst, we strongly urge you to verify the authenticity of any communication received before taking any action. The official contact details for Mr. Pankaj Randad are as follows:
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> prandad@gmail.com
              </div>
              <div className="contact-item">
                <strong>Instagram:</strong> equinoxresearch
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong> Pankaj Randad
              </div>
            </div>
            <p>
              Please be assured that we will take vigorous and appropriate legal action against any individuals or entities attempting to impersonate Mr. Pankaj Randad.
            </p>
          </div>

          <div className="fraud-alert-section">
            <h4>Where to Report Suspected Fraud</h4>
            <p>
              If you encounter any suspicious incidents or have fallen victim to fraudulent activities, we encourage you to report them immediately to the relevant authorities in your jurisdiction, including:
            </p>
            <ul className="fraud-alert-list">
              <li>Your local police department</li>
              <li>The Cyber Crime Cell</li>
            </ul>
          </div>

          <div className="fraud-alert-section">
            <h4>Contact Us</h4>
            <p>
              We value your security and are here to assist you. Whether you have questions, feedback, or suggestions, please feel free to contact us:
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> prandad@gmail.com
              </div>
              <div className="contact-item">
                <strong>Website:</strong> www.equinoxresearch.in
              </div>
              <div className="contact-item">
                <strong>Telephone:</strong> +91 83082 66666
              </div>
            </div>
          </div>

          <div className="fraud-alert-footer">
            <p>
              This advisory is issued in the interest of public awareness and safety by Mr. Pankaj Randad, the proprietor of Equinox Research & Advisors, SEBI Reg. No. INH000008288.
            </p>
          </div>
        </div>

        <div className="fraud-alert-actions">
          <button className="fraud-alert-button fraud-alert-primary" onClick={handleClose}>
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default FraudAlert;
