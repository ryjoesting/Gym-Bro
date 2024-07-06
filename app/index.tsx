import { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Switch, Touchable } from 'react-native';
import { View, Text, TextField, Colors } from 'react-native-ui-lib';
import { router } from 'expo-router';
import loginStyles from './../assets/styles/loginStyles';
import { auth } from './../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

// const facebook = require("../../assets/facebook.png")
// const linkedin = require("../../assets/linkedin.png")
// const tiktok = require("../../assets/tiktok.png")

export default function LoginScreen() {
    const [ click, setClick ] = useState(false);
    const [ username, setUsername ]=  useState("");
    const [ password, setPassword ] =  useState("");
    
    const styles = loginStyles;
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Navigate to app
            router.push('/home');
        })
        .catch( (error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert('Uh oh...something went wrong with signup. Please try again.');
            // Console log these?
        })
    }

return (
    <View backgroundColor='white' flex>
        <SafeAreaView>
            <View paddingT-70 centerH>
                <Image source={require('./../assets/Weightlifter.png')} style={styles.image} />
                <Text heading marginT-24>GymBro</Text>
                <Text body margin-24>Welcome to the party.</Text>

                <View style={{width: '100%', gap: 12}} paddingH-36>
                    <TextField style={styles.input} paddingH-24 placeholder='Email' body value={username} onChangeText={setUsername} autoCorrect={false} autoCapitalize='none' />
                    <TextField style={styles.input} paddingH-24 placeholder='Password' body secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize='none'/>
                </View>

                <View style={styles.rememberView}>
                    <View style={styles.switch} marginV-12>
                        <Switch  value={click} onValueChange={setClick} thumbColor={Colors.$backgroundPrimaryHeavy} trackColor={{true : Colors.primaryColor , false : "gray"}} />
                        <Text body>Remember Me</Text>
                    </View>
                    <View>
                        <Pressable onPress={() => Alert.alert("Forget Password!")}>
                            <Text body primaryColor>Forgot Password?</Text>
                        </Pressable>
                    </View>
                </View>
                {/* // Login Button */}
                <View style={styles.buttonView} marginV-24>
                    <Pressable style={styles.button} onPress={handleLogin}>
                        <Text body white br-6>Login</Text>
                    </Pressable>
                </View>
                
                {/* <View style={styles.mediaIcons}>
                        <Image source={facebook} style={styles.icons}   />
                        <Image source={tiktok} style={styles.icons}  />
                        <Image source={linkedin} style={styles.icons}  />
                </View> */}

                <Pressable onPress={() => router.push('/signup')}><Text style={{fontFamily: 'Lusitana_400Regular', fontSize: 14}}>Don't Have Account?<Text primaryColor>  Sign Up</Text></Text></Pressable>
            </View>
        </SafeAreaView>
    </View>
  )
}