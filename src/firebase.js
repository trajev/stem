
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD0mOud8yQeDgtkq3T_1HzC3kug9o2o1LI",
  authDomain: "login-signup-basic.firebaseapp.com",
  databaseURL: "https://login-signup-basic-default-rtdb.firebaseio.com",
  projectId: "login-signup-basic",
  storageBucket: "login-signup-basic.appspot.com",
  messagingSenderId: "874002096580",
  appId: "1:874002096580:web:87def03900570d93e24491",
  measurementId: "G-DN08S1N20T"
};


export const app = initializeApp(firebaseConfig);