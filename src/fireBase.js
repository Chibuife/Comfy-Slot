// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9nXTo5p3wecxX-j-SihaB9SoDDus8x2g",
    authDomain: "comfysloth-6100e.firebaseapp.com",
    projectId: "comfysloth-6100e",
    storageBucket: "comfysloth-6100e.appspot.com",
    messagingSenderId: "1047713164503",
    appId: "1:1047713164503:web:4724f35c8f80ce4b125492",
    measurementId: "G-7EF62XVR2E",
    // databaseURL: "https://comfysloth-6100e-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase(app);
