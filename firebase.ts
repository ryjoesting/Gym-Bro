// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence, onAuthStateChanged, User } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { collection, addDoc, getDoc, setDoc, doc} from 'firebase/firestore'
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

const db = getFirestore(app);


// Custom helper functions I wrote to aid in making calls to the database API, and preserve the schema
async function addUser(userFirstName: string, userEmail: string) {
  try {
      const docRef = await setDoc( doc(db, 'users', userEmail), {
        first: userFirstName
      } )
      console.log("DB user created");
  } catch (e) {
      console.error("Error adding document: ", e);
  }
}

// Function to get user document from Firestore
const getUserDoc = async (): Promise<void> => {
  onAuthStateChanged(auth, async (user: User | null) => {
    console.log('Auth state change')
    if (user) {
      console.log('user is ', user.uid)
      const userDocRef = doc(db, "users", user.uid);
      try {
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          console.log("User Document Data:", userDoc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting user document:", error);
      }
    } else {
      console.log("No user is signed in.");
    }
  });
};

const workoutData = {
  title: 'Legs'
}

// Function to check for authenticated user and create a workout split day
const checkAuthAndCreateWorkoutSplitDay = (workoutData: object): void => {
  onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      await createWorkoutSplitDay(user, workoutData);
    } else {
      console.log("No user is signed in.");
    }
  });
};

const createWorkoutSplitDay = async (user: User, workoutData: object): Promise<void> => {
  const userDocRef = doc(db, "users", user.uid);
  const workoutSplitDaysCollectionRef = collection(userDocRef, "workoutSplitDays");
  try {
    const newWorkoutDoc = await addDoc(workoutSplitDaysCollectionRef, workoutData);
    console.log("Workout document created with ID:", newWorkoutDoc.id);
  } catch (error) {
    console.error("Error creating workout document:", error);
  }
};

export { auth, db, addUser, getUserDoc, checkAuthAndCreateWorkoutSplitDay };