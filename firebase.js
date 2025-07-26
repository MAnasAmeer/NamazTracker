// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {collection,deleteDoc,doc,addDoc,setDoc,getDoc,getDocs,query,where } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAFQR5m7klDUG44qOIyz3S2Y9jziZ18SuQ",
    authDomain: "myapp-49160.firebaseapp.com",
    projectId: "myapp-49160",
    storageBucket: "myapp-49160.firebasestorage.app",
    messagingSenderId: "463341467126",
    appId: "1:463341467126:web:2c17569299f79835f103d7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//   Initialize Cloud Firestore and get a refrence to the service
const db = getFirestore(app)

  // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export {auth,app,db,doc,query,where,getDoc,getDocs,collection,deleteDoc,addDoc,setDoc, createUserWithEmailAndPassword,signInWithEmailAndPassword };