# Equinox Web - Trading Education Platform

A professional React-based website for Equinox Research & Advisors, providing comprehensive trading education, research services, and compliance information.

## 🚀 Features

- **Modern React Application** with Vite build system
- **Responsive Design** optimized for all devices
- **SEO-Friendly** with proper meta tags and routing
- **Professional UI** with TailwindCSS styling
- **Complete Content Management** with multiple pages

### 📄 Pages & Sections

- **Home**: Hero section with call-to-action
- **About Us**: Company information with founder details
- **Blog**: Educational articles with modal views
- **Disclaimers**: Comprehensive regulatory compliance
  - Grievance Redressal Escalation Matrix
  - Complaint Board with statistics
  - Research Analyst Disclaimer and Disclosure
- **Legal Pages**: Investor Charter, Terms & Conditions, Privacy Policy, Refund Policy
- **Contact**: Professional contact information

### 🛠️ Technology Stack

- **Frontend**: React 19, React Router DOM
- **Build Tool**: Vite
- **Styling**: Custom CSS with CSS variables
- **Deployment**: Docker + Nginx + Google Cloud Run

## 🏃‍♂️ Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Preview the build
npm run preview
```

The built files will be in the `dist/` directory.

## 🚀 Deployment

### Google Cloud Run

The application is configured for deployment to Google Cloud Run:

```bash
# Deploy to Cloud Run
./deploy.sh
```

### Docker Deployment

```bash
# Build Docker image
docker build -t equinox-web .

# Run container
docker run -p 80:80 equinox-web
```

## 📁 Project Structure

```
src/
├── App.jsx              # Main application component
├── App.css              # Global styles
├── pages/               # Page components
│   ├── DisclaimerPage.jsx
│   ├── InvestorCharterPage.jsx
│   ├── TermsConditionsPage.jsx
│   ├── PrivacyPolicyPage.jsx
│   └── RefundPolicyPage.jsx
└── index.css            # CSS variables and base styles

public/
└── images/              # Static images and assets
```

## 🔧 Configuration

- **Environment**: Production-ready with proper error handling
- **Security**: Security headers and CSP configuration
- **Performance**: Optimized build with code splitting
- **Accessibility**: Semantic HTML and ARIA labels

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## 📄 License

This project is proprietary software of Equinox Research & Advisors.

## 📞 Contact

- **Email**: prandad@gmail.com
- **Phone**: +91 83082 66666
- **Website**: equinoxresearch.in
