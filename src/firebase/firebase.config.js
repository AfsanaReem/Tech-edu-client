// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCauZNOj6HsflNiZS19hZgayB9kzCL50OE",
    authDomain: "tech-edu-ccaec.firebaseapp.com",
    projectId: "tech-edu-ccaec",
    storageBucket: "tech-edu-ccaec.appspot.com",
    messagingSenderId: "476959062708",
    appId: "1:476959062708:web:4360e7aa85ff8ff5f575e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;