import "./App.css";
import Signin from "./components/Signin";
import Chatroom from "./components/Chatroom";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBH0SIZQ_OvaicnT9PcvqHfMHGjESo8jLo",
  authDomain: "chatroom-4d873.firebaseapp.com",
  projectId: "chatroom-4d873",
  storageBucket: "chatroom-4d873.appspot.com",
  messagingSenderId: "368979318606",
  appId: "1:368979318606:web:3534823e7249ece2aa301f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const user = auth.currentUser;

function App() {
  console.log(user);
  return <>{user ? <Chatroom /> : <Signin />}</>;
}

export default App;
