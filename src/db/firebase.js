import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6amLrmqvF3K2J88Q-r0IVJ37JWIDg-MM",
  authDomain: "news-61fbf.firebaseapp.com",
  projectId: "news-61fbf",
  storageBucket: "news-61fbf.appspot.com",
  messagingSenderId: "920021184757",
  appId: "1:920021184757:web:6137b750c292ed439755bc",
  measurementId: "G-E4Y81Y9HZM"
  };
 
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();