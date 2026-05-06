import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBRFCXMviw64RnafFyWsU3f2HbV-52n93U',
  appId: '1:1082756404987:web:46fb09c7c851dc9dba025e',
  messagingSenderId: '1082756404987',
  projectId: 'conductive-ward-485009-u9',
  authDomain: 'conductive-ward-485009-u9.firebaseapp.com',
  storageBucket: 'conductive-ward-485009-u9.firebasestorage.app',
  measurementId: 'G-02X3RPJJSK',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
