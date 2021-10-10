import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, getRedirectResult } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-5ZkZ5nlUnoKAtaIgJPb1KvcyaH0yQu4",
    authDomain: "e-clone-web-application.firebaseapp.com",
    projectId: "e-clone-web-application",
    storageBucket: "e-clone-web-application.appspot.com",
    messagingSenderId: "821858050459",
    appId: "1:821858050459:web:2a490cf7e9f7acf94e813e",
    measurementId: "G-E8ETGXWXLM"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();
onAuthStateChanged(auth, user => {
    console.log(user);
})

export { db, auth, firebaseApp }