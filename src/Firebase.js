import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeFrovOHZZ3SAqT3PiCDmmHtsNd2v8qtc",
  authDomain: "my-book-app-ccfef.firebaseapp.com",
  projectId: "my-book-app-ccfef",
  storageBucket: "my-book-app-ccfef.appspot.com",
  messagingSenderId: "821741657971",
  appId: "1:821741657971:web:6c8ecfb1d2892f51362f06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
