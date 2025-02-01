// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC3DVfBIYKs-EbQpA7k7E7UdLK5ILQgZ9k",
  authDomain: "mylorry-org.firebaseapp.com",
  projectId: "mylorry-org",
  storageBucket: "mylorry-org.appspot.com",
  messagingSenderId: "898371880955",
  appId: "1:898371880955:web:6a55633646d58e12bded5e",
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };