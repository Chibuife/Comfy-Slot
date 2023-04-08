// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    connectAuthEmulator, getAuth,
    onAuthStateChanged
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyAkg9azvQ8EW8dfkrzKnx1Hxc8_QXTFCY8",
    authDomain: "comfy-9ac2f.firebaseapp.com",
    databaseURL: "https://comfy-9ac2f-default-rtdb.firebaseio.com",
    projectId: "comfy-9ac2f",
    storageBucket: "comfy-9ac2f.appspot.com",
    messagingSenderId: "668279432459",
    appId: "1:668279432459:web:e2c8afd8e50a467d93ae0e",
    measurementId: "G-ZYQXCN1LQ7"
};

const firebaseapp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseapp)