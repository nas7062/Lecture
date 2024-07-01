import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcHjYeSKpT-2-_m08blOaimciBW7crqB8",
  authDomain: "lecture-ff048.firebaseapp.com",
  projectId: "lecture-ff048",
  storageBucket: "lecture-ff048.appspot.com",
  messagingSenderId: "409713942982",
  appId: "1:409713942982:web:73150e5410837596e292c7",
  measurementId: "G-XCHJSKRNS9"
};

// Firebase 초기화
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Auth 초기화
const auth = getAuth(firebaseApp);

// Firestore 초기화
const db = getFirestore(firebaseApp);

export { auth };
export default db;
