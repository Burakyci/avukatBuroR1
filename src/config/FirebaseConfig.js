import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCK2eiwVItDtlp0QzSbiZBqOQNU3LqH8Ls",
  authDomain: "avukatburo-c74ba.firebaseapp.com",
  projectId: "avukatburo-c74ba",
  storageBucket: "avukatburo-c74ba.appspot.com",
  messagingSenderId: "1000692843780",
  appId: "1:1000692843780:web:e97425da5ffd74de447c51",
  measurementId: "G-9ENF5J3B58",
};

const fireApp = initializeApp(firebaseConfig);

export const fireAuth = getAuth();
export const fireFunctions = getFunctions();

export default fireApp;
