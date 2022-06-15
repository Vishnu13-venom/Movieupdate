import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyDfMYVCnYdIqK9B1r2vhndhUBrEtEXMTjs",
    authDomain: "movielist-dd3c8.firebaseapp.com",
    projectId: "movielist-dd3c8",
    storageBucket: "movielist-dd3c8.appspot.com",
    messagingSenderId: "279558928836",
    appId: "1:279558928836:web:a1b688dd1fdb0eec8bcc91",
    measurementId: "G-PMSGKKRN0Y"
  };


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)