import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEKIlIVEbMZHBJYg3ZqQgfBlxUyl3EZrg",
  authDomain: "next-firebase-blog-81b79.firebaseapp.com",
  projectId: "next-firebase-blog-81b79",
  storageBucket: "next-firebase-blog-81b79.appspot.com",
  messagingSenderId: "392887536610",
  appId: "1:392887536610:web:0ad3496d025a5d5d0107bb",
  measurementId: "G-3REJGL5WWE",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
