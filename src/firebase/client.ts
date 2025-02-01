import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
import {  getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3DVfBIYKs-EbQpA7k7E7UdLK5ILQgZ9k",
  authDomain: "mylorry-org.firebaseapp.com",
  projectId: "mylorry-org",
  storageBucket: "mylorry-org.appspot.com",
  messagingSenderId: "898371880955",
  appId: "1:898371880955:web:6a55633646d58e12bded5e",
};

// let auth: Auth;
// let storage: FirebaseStorage;


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);


export { auth, storage };