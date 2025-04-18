// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgHqeC3Q8mWrj55-VCI8YOElT63PMRCHo",
  authDomain: "blog-voyage-b40bb.firebaseapp.com",
  projectId: "blog-voyage-b40bb",
  storageBucket: "blog-voyage-b40bb.firebasestorage.app",
  messagingSenderId: "1037380131900",
  appId: "1:1037380131900:web:c1c0898713de015cd2f739",
  measurementId: "G-5NJNXZ8EML",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
