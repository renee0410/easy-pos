import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDeQsyUR29xsvvg6XShC_Pkn-QnKBEcYY",
  authDomain: "posapi-e9d0f.firebaseapp.com",
  databaseURL: "https://posapi-e9d0f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "posapi-e9d0f",
  storageBucket: "posapi-e9d0f.appspot.com",
  messagingSenderId: "1028469950815",
  appId: "1:1028469950815:web:dd405dda1a866f79374eea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };