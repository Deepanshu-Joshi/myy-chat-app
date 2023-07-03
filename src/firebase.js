import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpGGzeeTjetIHEHdVApw2N-GhjuuqYjK0",
  authDomain: "myy-chat-app.firebaseapp.com",
  projectId: "myy-chat-app",
  storageBucket: "myy-chat-app.appspot.com",
  messagingSenderId: "1070325997998",
  appId: "1:1070325997998:web:f243dc194088fa8e76e83f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
