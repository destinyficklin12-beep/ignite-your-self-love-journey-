// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase Configuration for Self-Love Course
const firebaseConfig = {
    apiKey: "YOUR_NEW_API_KEY",
    authDomain: "self-love-course.firebaseapp.com",
    projectId: "self-love-course",
    storageBucket: "self-love-course.appspot.com",
    messagingSenderId: "YOUR_NEW_SENDER_ID",
    appId: "YOUR_NEW_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

console.log("Firebase initialized successfully");
