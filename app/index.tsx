import { View, Button, Text, TextField } from "react-native-ui-lib"
import { router } from "expo-router"
import { useState } from "react";

// Main landing for app launch
// Will need to check auth here, then skip to main application
// Adding this for now, needs TODO later on

export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [pass, onChangePass] = useState('');

    const handleLogin = () => {
        router.replace('/(tabs)/home');
    };

    return (
        <View flex style={{justifyContent: 'center',
                            alignItems: 'center'}}>
            <Text heading primaryColor>Hi There!</Text>
            <TextField
                placeholder={'Email'}
                onChangeText={onChangeEmail}
                floatingPlaceholder
            />
            <TextField
                placeholder={'Password'}
                onChangeText={onChangePass}
                floatingPlaceholder
            />
            <Button onPress={handleLogin}><Text white body>Login</Text></Button>
            <Text>{email}</Text>
        </View>
    )
}