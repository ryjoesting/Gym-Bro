import { View, Button, Text, TextField, TouchableOpacity } from "react-native-ui-lib"
import { router } from "expo-router"
import { useState } from "react";
import { auth } from '../firebase';

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
        <View flex style={{justifyContent: 'center',alignItems: 'center'}}>
            <Text heading primaryColor>Hi There!</Text>
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
            <Button body primaryColor onPress={handleLogin}><Text white body>Login</Text></Button>
            <TouchableOpacity flex bottom center onPress={()=>{router.replace('/signup')}}><Text primaryColor body>Don't have an account? Sign up</Text></TouchableOpacity>
        </View>
    )
}