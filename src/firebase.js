import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID
};

// Log config (without API key)
console.log('Firebase Config:', {
  ...firebaseConfig,
  apiKey: 'HIDDEN'
});

try {
  const app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

export const db = getFirestore();

// Verify Firestore connection
try {
  console.log('Firestore instance created:', db);
} catch (error) {
  console.error('Error creating Firestore instance:', error);
}