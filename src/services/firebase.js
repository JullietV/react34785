// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkUpVFXEidvBoO4Yow2cwA8q32stDa9Fo",
  authDomain: "memento-eee21.firebaseapp.com",
  projectId: "memento-eee21",
  storageBucket: "memento-eee21.appspot.com",
  messagingSenderId: "157969191403",
  appId: "1:157969191403:web:b0935d3562e578fe9d09ae"
};

const firebaseApp = initializeApp(firebaseConfig);

export function testDB () {
  console.log(firebaseApp)
}