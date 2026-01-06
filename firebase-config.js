// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
// Firebase Configuration for Self-Love Course
const firebaseConfig = {
  apiKey: "YOUR_NEW_API_KEY",
  authDomain: "self-love-course.firebaseapp.com",
  projectId: "self-love-course",
  storageBucket: "self-love-course.appspot.com",
  messagingSenderId: "YOUR_NEW_SENDER_ID",
  appId: "YOUR_NEW_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export for use in other files
export { app, auth, db, analytics };
