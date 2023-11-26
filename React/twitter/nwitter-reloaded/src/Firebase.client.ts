import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB7ADWzkbAJChPcrBy-KIMBLmX0kr-My58",
  authDomain: "nwitter-reloaded-4343a.firebaseapp.com",
  projectId: "nwitter-reloaded-4343a",
  storageBucket: "nwitter-reloaded-4343a.appspot.com",
  messagingSenderId: "743885169423",
  appId: "1:743885169423:web:317841b3bbe93f3174147a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
