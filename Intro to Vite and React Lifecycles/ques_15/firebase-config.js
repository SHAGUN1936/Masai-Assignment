
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXtFYhgOiA_jv1sjHxhNgEnAPJ5JXrVI0",
  authDomain: "taskmanager-9dded.firebaseapp.com",
  projectId: "taskmanager-9dded",
  storageBucket: "taskmanager-9dded.firebasestorage.app",
  messagingSenderId: "770460537643",
  appId: "1:770460537643:web:6b34d5e0ae88979190ab6e",
  measurementId: "G-T4ZH8GFEGQ"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
