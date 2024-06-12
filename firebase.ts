// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF8AocP35L6omAzHLX0CPEgeDKqP-Bxcc",
  authDomain: "gymbro-2024.firebaseapp.com",
  projectId: "gymbro-2024",
  storageBucket: "gymbro-2024.appspot.com",
  messagingSenderId: "967778091391",
  appId: "1:967778091391:web:c086b6afc8c88dd6609a4a",
  measurementId: "G-HCRQCC1BED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };