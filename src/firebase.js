import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqfW4L8UN3O9aImrB7NZNSwyh4-JBfC0",
  authDomain: "writershunter-372d9.firebaseapp.com",
  projectId: "writershunter-372d9",
  storageBucket: "writershunter-372d9.appspot.com",
  messagingSenderId: "45252451267",
  appId: "1:45252451267:web:b72203f6e95cc9c93efb76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)