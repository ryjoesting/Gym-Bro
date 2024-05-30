// import { View, Button, Text, TextField } from "react-native-ui-lib"
// import { router } from "expo-router"
// import { useState } from "react";
// import { auth } from './../firebase';
// import { createUserWithEmailAndPassword } from "firebase/auth";

// // Signup page for the app

// export default function LoginScreen() {
//     const [email, onChangeEmail] = useState('');
//     const [pass, onChangePass] = useState('');

//     const handleSignup = () => {
//         auth.createUserWithEmailAndPassword(email, password).then()
//         router.replace('/');
//     };

//     return (
//         <View flex style={{justifyContent: 'center',alignItems: 'center'}}>
//             <Text heading primaryColor>Sign Up!</Text>
//             <TextField
//                 placeholder={'Email'}
//                 onChangeText={onChangeEmail}
//                 floatingPlaceholder
//                 body
//                 marginV-12
//             />
//             <TextField
//                 placeholder={'Password'}
//                 onChangeText={onChangePass}
//                 floatingPlaceholder
//                 body
//                 flex
//                 marginV-12
//             />
//             <Button body primaryColor onPress={handleSignup}><Text white body>Signup</Text></Button>
//             <Text>{email}</Text>
//         </View>
//     )
// }
//
import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, } from 'react-native';
import { View, Text, TextField, Colors } from 'react-native-ui-lib';
const logo = require("./../assets/Weightlifter.png");
// const facebook = require("../../assets/facebook.png")
// const linkedin = require("../../assets/linkedin.png")
// const tiktok = require("../../assets/tiktok.png")

// contact me :)
// instagram: must_ait6
// email : mustapha.aitigunaoun@gmail.com

export default function LoginForm() {
    const [ click, setClick ] = useState(false);
    const [ username, setUsername ]=  useState("");
    const [ password, setPassword ] =  useState("");

    const styles = StyleSheet.create({
    image : {
        height : 160,
        width : 170
    },
    input : {
        height : 50,
        paddingHorizontal: 24,
        borderColor : Colors.primaryColor,
        borderWidth : 1,
        borderRadius: 6
    },
    rememberView : {
        width : "100%",
        paddingHorizontal : 50,
        justifyContent: "space-between",
        alignItems : "center",
        flexDirection : "row",
        marginBottom : 8
    },
    switch :{
        flexDirection : "row",
        gap : 1,
        justifyContent : "center",
        alignItems : "center"
        
    },
    rememberText : {
        fontSize: 13
    },
    button : {
        backgroundColor : Colors.$backgroundPrimaryHeavy,
        height : 48,
        alignItems : "center",
        justifyContent : "center"
    },
    buttonView :{
        width :"100%",
        paddingHorizontal : 60,
        borderRadius: 6
    },
    optionsText : {
        textAlign : "center",
        paddingVertical : 10,
        color : "gray",
        fontSize : 13,
        marginBottom : 6
    },
    mediaIcons : {
        flexDirection : "row",
        gap : 15,
        alignItems: "center",
        justifyContent : "center",
        marginBottom : 23
    },
    icons : {
        width : 40,
        height: 40,
    },
    footerText : {
        textAlign: "center",
        color : "gray",
    },
    })

return (
    <View backgroundColor='white' flex>
        <SafeAreaView>
            <View paddingT-70 centerH>
                <Image source={logo} style={styles.image} resizeMode='contain' />
                <Text heading marginT-24>Sign Up</Text>
                <Text body margin-24>We're happy you're here.</Text>

                <View style={{width: '100%', gap: 12}} paddingH-36>
                    <TextField style={styles.input} paddingH-24 placeholder='Email' body value={username} onChangeText={setUsername} autoCorrect={false} autoCapitalize='none' />
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
                    <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!","see you in my instagram if you have questions : must_ait6")}>
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
            </View>
        </SafeAreaView>
    </View>
  )
}