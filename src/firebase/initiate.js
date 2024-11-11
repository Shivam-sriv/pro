import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeshwDtxlrtixF_4BU2KFFFnFCpm2Aoao",
  authDomain: "prodigypro-6f314.firebaseapp.com",
  projectId: "prodigypro-6f314",
  storageBucket: "prodigypro-6f314.appspot.com",
  messagingSenderId: "163559398181",
  appId: "1:163559398181:web:657aac5362df7d913018cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleSignin = async () => {
  provider.setCustomParameters({ prompt: "select_account" });
  await signOut(auth);
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return { error: null, data: { user, token } };
  } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    return { error, data: null };
  }
};

export { googleSignin };
