import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib';
const loginStyles = StyleSheet.create({
    image : {
        height : 160,
        width : 170,
        resizeMode: 'contain',
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
export default loginStyles;