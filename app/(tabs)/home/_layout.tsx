import { Stack } from 'expo-router';
import { Colors } from 'react-native-ui-lib';

export default function _layout() {
    return (
        <Stack screenOptions={{
            headerShown: true, 
            headerStyle: {backgroundColor: Colors.$backgroundPrimaryHeavy},
            headerTintColor: Colors.$textDefaultLight
        }}>
            <Stack.Screen name='index' options={{ 
                title: 'Home', 
            }} 
            />
            <Stack.Screen name='details' options={{ title: 'Workout Details'}} />
            <Stack.Screen name='createNewWorkout' options={{ title: 'Create New Workout'}} />
        </Stack>
    )
}