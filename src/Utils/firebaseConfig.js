// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiuwaREuogGvtfixl5SmDRa6TjCe7C018",
  authDomain: "ecomm-balder.firebaseapp.com",
  projectId: "ecomm-balder",
  storageBucket: "ecomm-balder.appspot.com",
  messagingSenderId: "656077066723",
  appId: "1:656077066723:web:3eeb22b6fe2db20ce0d0d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)