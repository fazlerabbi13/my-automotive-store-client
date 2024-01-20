// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB99SQUOy6dBnDBl3QqFIsnAxxzUIg_NG8",
  authDomain: "automotive-store-2264f.firebaseapp.com",
  projectId: "automotive-store-2264f",
  storageBucket: "automotive-store-2264f.appspot.com",
  messagingSenderId: "843460287481",
  appId: "1:843460287481:web:1915402efee70ea8f13b28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;