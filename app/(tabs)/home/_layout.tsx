import { Stack } from 'expo-router';
import { Colors } from 'react-native-ui-lib';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function _layout() {

    let pageTitle = "Home"

    const getCurrentUserFirstName = async (): Promise<string> => {
        return new Promise((resolve) => {
            onAuthStateChanged(auth, async (user: User | null) => {
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                try {
                const userDoc = await getDoc(userDocRef);
                if (userDoc.exists()) {
                    const data = userDoc.data();
                    const firstName = data?.firstName;
                    if (firstName) {
                    resolve("Welcome, " + firstName);
                    } else {
                    resolve("Home");
                    }
                } else {
                    resolve("Home");
                }
                } catch (error) {
                console.error("Error getting user document:", error);
                resolve("Home");
                }
            } else {
                resolve("Home");
            }
            });
        });
    };
    getCurrentUserFirstName().then( (p) => {
        pageTitle = p
    } )

    return (
        <Stack screenOptions={{
            headerShown: true, 
            headerStyle: {backgroundColor: Colors.$backgroundPrimaryHeavy},
            headerTintColor: Colors.$textDefaultLight
        }}>
            {}
            <Stack.Screen name='index' options={{ 
                title: pageTitle, 
            }} 
            />
            <Stack.Screen name='details' options={{ title: 'Workout Details'}} />
            <Stack.Screen name='createNewWorkout' options={{ title: 'Create New Workout'}} />
        </Stack>
    )
}