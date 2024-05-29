import { View, Button, Text, TextField } from "react-native-ui-lib"
import { router } from "expo-router"
import { useState } from "react";

// Signup page for the app

export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [pass, onChangePass] = useState('');

    const handleSignup = () => {
        router.replace('/');
    };

    return (
        <View flex style={{justifyContent: 'center',alignItems: 'center'}}>
            <Text heading primaryColor>Sign Up!</Text>
            <TextField
                placeholder={'Email'}
                onChangeText={onChangeEmail}
                floatingPlaceholder
                body
                marginV-12
            />
            <TextField
                placeholder={'Password'}
                onChangeText={onChangePass}
                floatingPlaceholder
                body
                flex
                marginV-12
            />
            <Button body primaryColor onPress={handleSignup}><Text white body>Signup</Text></Button>
            <Text>{email}</Text>
        </View>
    )
}