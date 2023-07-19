
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpS8-NNz-6MgcpzG9IW63n60w-t6jVItE",
  authDomain: "fb-imp3dser-react.firebaseapp.com",
  projectId: "fb-imp3dser-react",
  storageBucket: "fb-imp3dser-react.appspot.com",
  messagingSenderId: "594332724621",
  appId: "1:594332724621:web:db9b403c81bf97bec7a1c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)