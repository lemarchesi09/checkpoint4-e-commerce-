// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkuEuuCwjVZ9UgPIQ0SWjCpG_P2DAMKPI",
  authDomain: "checkpoint4-e-commerce.firebaseapp.com",
  projectId: "checkpoint4-e-commerce",
  storageBucket: "checkpoint4-e-commerce.appspot.com",
  messagingSenderId: "395730090398",
  appId: "1:395730090398:web:05c2012865f60e28bebe8f",
  measurementId: "G-80VY2L4DVH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);

export default firebaseApp;