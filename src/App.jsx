import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import FraudAlert from './components/FraudAlert';

function LogoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 16l4-8 4 4 4-8" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconSchool() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      <path d="M12 6v6" />
    </svg>
  );
}

function IconGroups() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconLive() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

const features = [
  {
    icon: IconSchool,
    title: 'Courses',
    description: 'Learn trading and investing from structured courses designed by experts. Build your knowledge with video lessons, from basics to advanced strategies.',
  },
  {
    icon: IconGroups,
    title: 'Communities',
    description: 'Join curated trading communities and connect with like-minded investors. Share ideas, discuss markets, and grow together in exclusive groups.',
  },
  {
    icon: IconChart,
    title: 'Stock Recommendations',
    description: 'Get expert stock picks and market analysis. Access premium recommendations with rationale, target prices, and risk assessment.',
  },
  {
    icon: IconShield,
    title: 'KYC & Compliance',
    description: 'Complete your identity verification securely through our integrated KYC flow. Stay compliant and trade with confidence.',
  },
  {
    icon: IconLive,
    title: 'Live Streams',
    description: 'Watch live market analysis and trading sessions. Learn in real-time from experienced traders and stay updated on market moves.',
  },
];

function App() {
  const [activeBlog, setActiveBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: 'Nifty and Bank',
      thumbnail: '/images/blog1.png',
      content: 'Understanding Nifty and Bank Nifty indices is crucial for traders. These benchmark indices track the performance of the top companies in their respective sectors, providing valuable insights into market trends and helping investors make informed decisions about their portfolio allocations. Nifty 50 represents the top 50 companies across various sectors, while Bank Nifty focuses specifically on banking sector performance. These indices serve as key indicators for market sentiment and economic health, with many traders using them for technical analysis and trend identification. Regular monitoring of these indices helps in understanding market direction and sector rotation patterns.'
    },
    {
      id: 2,
      title: 'Futures and Equity',
      thumbnail: '/images/blog2.png',
      content: 'Futures trading offers leverage and the ability to profit from both rising and falling markets. Unlike equity trading, futures contracts have specific expiration dates and require understanding of margin requirements, making them suitable for more experienced traders who can manage higher risk levels. The futures market operates on margin, allowing traders to control larger positions with less capital, but this also amplifies potential losses. Key differences include daily mark-to-market settlement, contract specifications, and the need for active position management. Successful futures trading requires understanding market cycles, volatility patterns, and implementing strict stop-loss strategies to protect against adverse market movements.'
    },
    {
      id: 3,
      title: 'How to Start Trading',
      thumbnail: '/images/blog3.png',
      content: 'Starting your trading journey requires proper education, risk management, and a clear strategy. Begin with learning market fundamentals, practice with paper trading, develop a trading plan with defined entry/exit rules, and always implement proper risk management to protect your capital. Essential steps include understanding technical analysis basics, learning chart patterns, and mastering risk-reward ratios. Start with small position sizes and gradually increase as you gain experience. Keep detailed trading journals to track performance and identify patterns in your trading behavior. Remember that successful trading is a marathon, not a sprint – focus on consistency and continuous learning rather than quick profits.'
    }
  ];

  const disclaimers = [
    {
      id: 1,
      title: 'Grievance Redressal Escalation Matrix',
    },
    {
      id: 2,
      title: 'Complaint Board',
    },
    {
      id: 3,
      title: 'Research Analyst Disclaimer and Disclosure',
    }
  ];

  return (
    <div className="app">
      <FraudAlert />
      
      {/* Top Bar with Contact Info */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-item">
            <IconPhone />
            <span>(+91) 8308266666</span>
          </div>
          <div className="top-bar-item">
            <IconMail />
            <span>support@equinoxresearch.in</span>
          </div>
          <div className="top-bar-item">
            <IconClock />
            <span>Mon - Sat: 9am - 7pm</span>
          </div>
        </div>
      </div>

      <header className="header">
        <a href="/" className="logo">
          <img src="/images/equinox_logo.png" alt="Equinox Logo" className="logo-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
          <span className="logo-fallback" style={{ display: 'none' }}>
            <LogoIcon />
            EQUINOX
          </span>
          <span className="logo-text">EQUINOX</span>
        </a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <a href="#disclaimers">Disclaimers</a>
        </nav>
        <a href="#download" className="nav-cta">Get the App</a>
      </header>

      <section className="hero">
        <div className="hero-image-container">
          <img src="/images/hero-banner.png" alt="Equinox Trading Platform" className="hero-img" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <div className="hero-content">
          <h1>Your Trading & Investment Education Platform</h1>
          <p className="hero-tagline">
            Learn, connect, and grow. Equinox brings together courses, communities, and stock recommendations to help you make informed decisions.
          </p>
          <p className="hero-sub">
            Whether you're starting your investment journey or looking to refine your strategy, Equinox provides the tools and community you need.
          </p>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <h2>About Us</h2>
          <div className="about-grid">
            <div className="about-founder">
              <div className="founder-image-box">
                <img src="/images/pankajsir.jpg" alt="Pankaj R. Randad" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div className="founder-name">
                <strong>Pankaj R. Randad</strong>
              </div>
            </div>
            <div className="about-text">
              <p>
                Pankaj R Randad is an Indian-born Entrepreneur and Stocks Analyst & Consultant. He is the founder of Equinox Research and Advisors, Pune – a consulting firm offering a multitude of quality services to its clients in the areas of Stocks, Futures & Options, Equity and more.
              </p>
              <p>
                Before founding Equinox, Pankaj worked in prominent roles in eminent organizations including Motilal Oswal, PhillipCapital, and IndiaNivesh. He has gained immense exposure to technical analysis of stocks while working on hundreds of them over a career spanning 15+ years.
              </p>
              <p>
                At Equinox, we believe in empowering investors with knowledge and tools to make informed financial decisions. Our mission is to democratize financial education and provide accessible, high-quality trading education to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="app-download">
        <div className="app-download-content">
          <h2>Join the Equinox Community</h2>
          <p className="app-download-subtitle">
            Choose from a Wide Range of Our Services
          </p>
          <p className="app-download-description">
            Download the Equinox user app to access exclusive courses, join trading communities, get expert stock recommendations, and connect with like-minded investors. Your journey to informed trading starts here.
          </p>
          
          <div className="app-download-buttons">
            <a href="#" className="app-download-btn app-store">
              <div className="app-download-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div className="app-download-text">
                <div className="app-download-small">Download on the</div>
                <div className="app-download-large">App Store</div>
              </div>
            </a>
            
            <a href="#" className="app-download-btn play-store">
              <div className="app-download-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
              </div>
              <div className="app-download-text">
                <div className="app-download-small">Get it on</div>
                <div className="app-download-large">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>What Equinox Offers</h2>
        <div className="features-grid">
          {features.map((f) => {
            const Icon = f.icon;
            return (
            <article key={f.title} className="feature-card">
              <div className="feature-icon">
                <Icon />
              </div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </article>
            );
          })}
        </div>
      </section>

      <section className="blog" id="blog">
        <div className="blog-content">
          <h2>Blog</h2>
          <div className="blog-grid">
            {blogs.map((blog) => (
              <article key={blog.id} className="blog-card" onClick={() => setActiveBlog(blog)}>
                <div className="blog-thumbnail">
                  <img src={blog.thumbnail} alt={blog.title} onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)'; }} />
                </div>
                <div className="blog-info">
                  <h3>{blog.title}</h3>
                  <p className="blog-preview">{blog.content}</p>
                  <button className="blog-read-more">Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-content">
          <h2>Contact</h2>
          <h3 className="contact-subtitle">Get in touch</h3>
          <p className="contact-description">Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
          
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <IconPhone />
              </div>
              <h4>Call the helpline</h4>
              <a href="tel:+918308266666">(+91) 8308266666</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <IconLocation />
              </div>
              <h4>Location</h4>
              <p>Office No 8, 3rd Floor, Himagauri Sunanda Apartment, Above KFC Outlet, Karishma Chauk, Kothrud, 411038.</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <IconMail />
              </div>
              <h4>Email us</h4>
              <a href="mailto:support@equinoxresearch.in">support@equinoxresearch.in</a>
              <a href="mailto:prandad@gmail.com">prandad@gmail.com</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <IconClock />
              </div>
              <h4>Work Hours</h4>
              <p>Monday - Saturday: 9am - 7pm</p>
              <p>Sunday: 12pm — 6pm</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="download">
        <h2>Ready to Get Started?</h2>
        <p>Download the Equinox app on your phone to access courses, join communities, and receive stock recommendations.</p>
        <div className="cta-buttons">
          <a href="#" className="cta-btn cta-btn-primary">Download for Android</a>
          <a href="#" className="cta-btn cta-btn-secondary">Download for iOS</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SEBI Registration & Compliance</h3>
            <div className="compliance-info">
              <p><strong>SEBI Registered Research Analyst & Compliance Officer – "Pankaj R Randad"</strong></p>
              <p>SEBI Registration No: INH000008288</p>
              <p>BSE Enlistment No: 5439</p>
              <p className="tech-statement">At Equinox Research, we're using cutting-edge technology to transform the industry and deliver financial services that actually work for you.</p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Bank Details</h3>
            <div className="bank-info">
              <p><strong>Pankaj R Randad</strong></p>
              <p>Company name: Equinox Research And Advisors</p>
              <p>Account number: 10223032366</p>
              <p>IFSC: IDFB0041352</p>
              <p>SWIFT code: IDFBINBBMUM</p>
              <p>Bank name: IDFC FIRST</p>
              <p>Branch: Pune Law College Road Branch</p>
              <p className="payment-warning"><strong>Note:</strong> Any payment made to accounts other than the one stated above is not authorized by Equinox Research & Advisors. If you encounter any discrepancies or have concerns regarding payments, please contact us immediately</p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="quick-links">
              <div className="link-column">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#blog">Blog</a>
              </div>
              <div className="link-column">
                <a href="#disclaimers">Disclaimers</a>
                <a href="/investor-charter">Investor Charter</a>
                <a href="/terms">Terms & Conditions</a>
              </div>
              <div className="link-column">
                <a href="/privacy">Privacy Policy</a>
                <a href="/refund">Refund Policy</a>
                <Link to="/delete-account" className="footer-link">Delete my account</Link>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            All trades are your responsibility. Please trade responsibly. This platform is for educational purposes; always do your own research before making investment decisions.
          </p>
          <p className="copyright">
            © {new Date().getFullYear()} Equinox Research And Advisors. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Blog Detail Modal */}
      {activeBlog && (
        <div className="modal-overlay" onClick={() => setActiveBlog(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveBlog(null)}>×</button>
            <div className="modal-header">
              <img src={activeBlog.thumbnail} alt={activeBlog.title} className="modal-image" onError={(e) => { e.target.style.display = 'none'; }} />
              <h2>{activeBlog.title}</h2>
            </div>
            <div className="modal-body">
              <p>{activeBlog.content}</p>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimers Section */}
      <section className="disclaimers" id="disclaimers">
        <div className="disclaimers-content">
          <h2>Disclaimers</h2>
          <div className="disclaimer-list">
            {disclaimers.map((disclaimer) => (
              <div key={disclaimer.id} className="disclaimer-item">
                <a href={`/disclaimers/${disclaimer.id}`} className="disclaimer-link">
                  {disclaimer.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
