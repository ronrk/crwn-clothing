import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBuVaBvd9UmHu39hS6H1XZcKLcJ3c6T5gY",
  authDomain: "crown-db-277dc.firebaseapp.com",
  projectId: "crown-db-277dc",
  storageBucket: "crown-db-277dc.appspot.com",
  messagingSenderId: "745790696031",
  appId: "1:745790696031:web:37e78a849761c2cd1609ea",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
