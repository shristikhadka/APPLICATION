// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { initializeAuth, getReactNativePersistence,getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHEzLsXzDRugaGljuVMizfMkrKnm6-Wws",
  authDomain: "rnauth-5e5c0.firebaseapp.com",
  projectId: "rnauth-5e5c0",
  storageBucket: "rnauth-5e5c0.firebasestorage.app",
  messagingSenderId: "1086730568748",
  appId: "1:1086730568748:web:fbd1915cbc4a5138c9fd89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);