import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH0SIZQ_OvaicnT9PcvqHfMHGjESo8jLo",
  authDomain: "chatroom-4d873.firebaseapp.com",
  projectId: "chatroom-4d873",
  storageBucket: "chatroom-4d873.appspot.com",
  messagingSenderId: "368979318606",
  appId: "1:368979318606:web:3534823e7249ece2aa301f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const Chatroom = () => {
  return <div>Chatroom</div>;
};

export default Chatroom;
