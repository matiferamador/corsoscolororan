import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_tI7zZlAjiwPJHPP5XTUKzcxFnhA1seM",
  authDomain: "blogcorsos.firebaseapp.com",
  projectId: "blogcorsos",
  storageBucket: "blogcorsos.appspot.com",
  messagingSenderId: "416114659961",
  appId: "1:416114659961:web:291395238978d54e517aa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
