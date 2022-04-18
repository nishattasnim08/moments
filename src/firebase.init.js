// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-4tKk6_dihYdcB2MmesgYESXX7gtIp0w",
  authDomain: "moments-c202a.firebaseapp.com",
  projectId: "moments-c202a",
  storageBucket: "moments-c202a.appspot.com",
  messagingSenderId: "932887999720",
  appId: "1:932887999720:web:57b0156fe3e95db4e3455d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;