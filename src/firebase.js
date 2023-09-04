import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnkf72jHO_lf1-0GpnbGik0_gr3kX3DT4",
    authDomain: "chatter-5b073.firebaseapp.com",
    projectId: "chatter-5b073",
    storageBucket: "chatter-5b073.appspot.com",
    messagingSenderId: "843138216084",
    appId: "1:843138216084:web:64eaa2bad5a01241c50481"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);