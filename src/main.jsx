import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import DeleteAccountPage from './pages/DeleteAccountPage.jsx'
import DisclaimerPage from './pages/DisclaimerPage.jsx'
import InvestorCharterPage from './pages/InvestorCharterPage.jsx'
import TermsConditionsPage from './pages/TermsConditionsPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import RefundPolicyPage from './pages/RefundPolicyPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
        <Route path="/disclaimers/:id" element={<DisclaimerPage />} />
        <Route path="/investor-charter" element={<InvestorCharterPage />} />
        <Route path="/terms" element={<TermsConditionsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/refund" element={<RefundPolicyPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
