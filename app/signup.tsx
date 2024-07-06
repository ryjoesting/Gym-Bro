import React, { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { View, Text, TextField, Colors } from 'react-native-ui-lib';
import { router } from 'expo-router';
import loginStyles from '../assets/styles/loginStyles';
import { addUser, auth, db } from './../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

const logo = require("./../assets/Weightlifter.png");
// const facebook = require("../../assets/facebook.png")
// const linkedin = require("../../assets/linkedin.png")
// const tiktok = require("../../assets/tiktok.png")

// Function to create a user document in Firestore on signup
const createUserDocOnSignup = async (uid: string, firstName: string, email: string): Promise<void> => {
  const userDocRef = doc(db, "users", uid);
  const userData = {
    firstName: firstName,
    email: email,
    createdAt: new Date().toISOString(),
  };
  try {
    await setDoc(userDocRef, userData);
    console.log("User document created successfully.");
  } catch (error) {
    console.error("Error creating user document:", error);
  }
};

export default function SignupScreen() {
    const [ email, setEmail ]=  useState("");
    const [ password, setPassword ] =  useState("");
    const [ firstName, setFirstName ] = useState("");

    const styles = loginStyles;

    const handleSignup = () => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            Alert.alert("This account already exists. Redirecting to login page.");
            router.navigate('/')
            return;
        })
        .catch( (error) => {
            createUserWithEmailAndPassword(auth, email, password).then( (userCredential) => {
                const user = userCredential.user;
                createUserDocOnSignup(user.uid, firstName, email);
                router.navigate('/home');
            })
            .catch( (error) => {
                Alert.alert('Uh oh...something went wrong. Please try again.')
            })
        })
    }

return (
    <View backgroundColor='white' flex>
        <SafeAreaView>
            <View paddingT-70 centerH>
                <Image source={logo} style={styles.image} resizeMode='contain' />
                <Text heading marginT-24>Sign Up</Text>
                <Text body margin-24>We're happy you're here.</Text>

                <View style={{width: '100%', gap: 12}} paddingH-36>
                    <TextField style={styles.input} paddingH-24 placeholder='First Name' body value={firstName} onChangeText={setFirstName} autoCorrect={false}/>
                    <TextField style={styles.input} paddingH-24 placeholder='Email' body value={email} onChangeText={setEmail} autoCorrect={false} autoCapitalize='none' />
                    <TextField style={styles.input} paddingH-24 placeholder='Password' body secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize='none'/>
                </View>

                <View style={styles.rememberView}>
                    {/* <View style={styles.switch} marginV-12>
                        <Switch  value={click} onValueChange={setClick} thumbColor={Colors.$backgroundPrimaryHeavy} trackColor={{true : Colors.primaryColor , false : "gray"}} />
                        <Text body>Remember Me</Text>
                    </View> */}
                    {/* <View>
                        <Pressable onPress={() => Alert.alert("Forget Password!")}>
                            <Text body primaryColor>Forgot Password?</Text>
                        </Pressable>
                    </View> */}
                </View>

                <View style={styles.buttonView} marginV-24>
                    <Pressable style={styles.button} onPress={handleSignup}>
                        <Text body white br-6>Sign Up</Text>
                    </Pressable>
                    {/* <Text style={styles.optionsText}>OR LOGIN WITH</Text> */}
                </View>
                
                {/* <View style={styles.mediaIcons}>
                        <Image source={facebook} style={styles.icons}   />
                        <Image source={tiktok} style={styles.icons}  />
                        <Image source={linkedin} style={styles.icons}  />
                </View> */}

                {/* <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}>  Sign Up</Text></Text> */}
                <Pressable onPress={() => router.push('/')}><Text style={{fontFamily: 'Lusitana_400Regular', fontSize: 14}}>Already have an account?<Text primaryColor>  Login</Text></Text></Pressable>
            </View>
        </SafeAreaView>
    </View>
  )
}