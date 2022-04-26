// Import the functions you need from the SDKs you need
import { initializeApp } from "../firebase/app";
import { getAnalytics } from "../firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNY0drJfhyqxBiuONq-AMTjCR1pA0U810",
  authDomain: "justwin-2e222.firebaseapp.com",
  projectId: "justwin-2e222",
  storageBucket: "justwin-2e222.appspot.com",
  messagingSenderId: "319970877026",
  appId: "1:319970877026:web:cb144129664f9aec707b3b",
  measurementId: "G-4QSJ5VJBWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);