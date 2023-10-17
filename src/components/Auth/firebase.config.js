// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtb4l8HaFg001yh1BDK4LuLFTFQELRijo",
    authDomain: "drivezen-assignment.firebaseapp.com",
    projectId: "drivezen-assignment",
    storageBucket: "drivezen-assignment.appspot.com",
    messagingSenderId: "856953894712",
    appId: "1:856953894712:web:db676dab08b12655f633cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
