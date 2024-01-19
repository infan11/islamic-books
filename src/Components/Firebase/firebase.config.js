// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAayOHm0_B9AlL8A1G5IwPJf7Dxpuzj0k",
  authDomain: "islamicbook-f35f1.firebaseapp.com",
  projectId: "islamicbook-f35f1",
  storageBucket: "islamicbook-f35f1.appspot.com",
  messagingSenderId: "402104221035",
  appId: "1:402104221035:web:c516fa1bc4c0215072602e",
  measurementId: "G-74T0LPXJG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;