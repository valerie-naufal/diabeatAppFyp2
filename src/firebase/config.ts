import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDh8g6bh0aw2BVWGp7TQWcjsSp4JUVZ7Os',
  authDomain: 'diabeatappfyp.firebaseapp.com',
  projectId: 'diabeatappfyp',
  storageBucket: 'diabeatappfyp.firebasestorage.app',
  messagingSenderId: '46906753998',
  appId: '1:46906753998:android:7142dfafff313675a1e19f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and firestore
export const auth = getAuth(app);
export const db = getFirestore(app);