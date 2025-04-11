import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnEjiRBdefZcCmker3sPTgWco7AqVTbHU",
  authDomain: "retailsaas-8dff4.firebaseapp.com",
  projectId: "retailsaas-8dff4",
  storageBucket: "retailsaas-8dff4.firebasestorage.app",
  messagingSenderId: "420534654153",
  appId: "1:420534654153:web:b6c945ccdd9e68e5892918",
  measurementId: "G-6JV7JHTYDL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };