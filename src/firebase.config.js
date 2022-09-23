import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
 apiKey: "AIzaSyBKEaHBaueAU0wYa-wU9bawsgcum60qHc0",
  authDomain: "test-7f54b.firebaseapp.com",
  projectId: "test-7f54b",
  storageBucket: "test-7f54b.appspot.com",
  messagingSenderId: "101718647226",
  appId: "1:101718647226:web:a0d8aaad9f577a6b22fd83",
  measurementId: "G-QF02EPZ7XH"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
