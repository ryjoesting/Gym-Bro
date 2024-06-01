import React, { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { View, Text, TextField, Colors } from 'react-native-ui-lib';
import { router } from 'expo-router';
import loginStyles from '../assets/styles/loginStyles';
const logo = require("./../assets/Weightlifter.png");
// const facebook = require("../../assets/facebook.png")
// const linkedin = require("../../assets/linkedin.png")
// const tiktok = require("../../assets/tiktok.png")

export default function SignupScreen() {
    const [ click, setClick ] = useState(false);
    const [ username, setUsername ]=  useState("");
    const [ password, setPassword ] =  useState("");

    const styles = loginStyles;

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
                    <Pressable style={styles.button} onPress={() => Alert.alert("Login attempt")}>
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