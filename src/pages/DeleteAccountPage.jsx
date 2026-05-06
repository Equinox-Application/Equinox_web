import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../firebase';
import './DeleteAccountPage.css';

const BACKEND_URL = 'https://equinox-backend-1082756404987.asia-south1.run.app';

function LogoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3v18h18" />
      <path d="M7 16l4-8 4 4 4-8" />
    </svg>
  );
}

export default function DeleteAccountPage() {
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [jwt, setJwt] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [deleted, setDeleted] = useState(false);

  const normalizePhone = (p) => {
    const digits = p.replace(/\D/g, '');
    return digits.startsWith('91') ? `+${digits}` : `+91${digits}`;
  };

  const setupRecaptcha = () => {
    if (window.recaptchaVerifier) return window.recaptchaVerifier;
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      'recaptcha-container',
      {
        size: 'invisible',
        callback: () => {},
      }
    );
    return window.recaptchaVerifier;
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    const raw = phone.trim();
    if (!raw) {
      setError('Enter your phone number');
      return;
    }
    setLoading(true);
    try {
      const verification = setupRecaptcha();
      const phoneNumber = normalizePhone(raw);
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, verification);
      setVerificationId(confirmation.verificationId);
      setStep('otp');
    } catch (err) {
      setError(err?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (!otp || otp.length !== 6) {
      setError('Enter the 6-digit OTP');
      return;
    }
    setLoading(true);
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
      const user = auth.currentUser;
      if (!user) throw new Error('Not signed in');
      const idToken = await user.getIdToken(true);
      const res = await fetch(`${BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firebase_token: idToken }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.detail || `Login failed: ${res.status}`);
      }
      const data = await res.json();
      setJwt(data.access_token);
      setStep('confirm');
    } catch (err) {
      setError(err?.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (confirmText.toLowerCase() !== 'delete') {
      setError('Type DELETE to confirm');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/auth/account`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${jwt}` },
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.detail || `Failed: ${res.status}`);
      }
      await auth.signOut();
      setDeleted(true);
    } catch (err) {
      setError(err?.message || 'Failed to delete account');
    } finally {
      setLoading(false);
    }
  };

  if (deleted) {
    return (
      <div className="delete-account-page">
        <header className="delete-header">
          <Link to="/" className="logo">
            <LogoIcon />
            EQUINOX
          </Link>
        </header>
        <div className="delete-success">
          <h1>Account deleted</h1>
          <p>All your data has been permanently removed from the application.</p>
          <Link to="/" className="delete-back-link">Back to Equinox</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="delete-account-page">
      <header className="delete-header">
        <Link to="/" className="logo">
          <LogoIcon />
          EQUINOX
        </Link>
      </header>

      <main className="delete-main">
        <h1>Delete my account</h1>
        <p className="delete-intro">
          Permanently remove all your data from Equinox. You will need to sign in with your phone number to confirm.
        </p>

        <div id="recaptcha-container" />

        {step === 'phone' && (
          <form className="delete-form" onSubmit={handleSendOtp}>
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              disabled={loading}
            />
            <button type="submit" className="delete-btn" disabled={loading}>
              {loading ? 'Sending…' : 'Send OTP'}
            </button>
          </form>
        )}

        {step === 'otp' && (
          <form className="delete-form" onSubmit={handleVerifyOtp}>
            <label htmlFor="otp">Enter the 6-digit code sent to your phone</label>
            <input
              id="otp"
              type="text"
              inputMode="numeric"
              placeholder="000000"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              disabled={loading}
            />
            <button type="submit" className="delete-btn" disabled={loading}>
              {loading ? 'Verifying…' : 'Verify'}
            </button>
            <button
              type="button"
              className="delete-link-btn"
              onClick={() => setStep('phone')}
            >
              Use different number
            </button>
          </form>
        )}

        {step === 'confirm' && (
          <form className="delete-form" onSubmit={handleDelete}>
            <div className="delete-warning">
              <p>This will permanently delete:</p>
              <ul>
                <li>Your profile and account</li>
                <li>All purchases and memberships</li>
                <li>Group memberships and messages</li>
              </ul>
              <p>This action cannot be undone.</p>
            </div>
            <label htmlFor="confirm">Type <strong>DELETE</strong> to confirm</label>
            <input
              id="confirm"
              type="text"
              placeholder="Type DELETE"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              className="delete-btn delete-btn-danger"
              disabled={loading || confirmText.toLowerCase() !== 'delete'}
            >
              {loading ? 'Deleting…' : 'Delete all my data'}
            </button>
          </form>
        )}

        {error && <p className="delete-error">{error}</p>}
      </main>
    </div>
  );
}
