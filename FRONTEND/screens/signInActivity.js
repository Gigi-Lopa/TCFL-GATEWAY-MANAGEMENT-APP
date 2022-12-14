import React , {useState} from 'react'
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity, Touchable } from 'react-native'
import styles from '../styles/main'
import * as Animatable from "react-native-animatable"
import TextField from '../components/textField'
import URLS from '../components/fetchUrl'
const {height, width} = Dimensions.get("screen")

export default function signInActivity({navigation}) {

    let [USERNAME_VALID, setUSERNAME_VALID]  = useState(true)
    let [PASS_VALID, setPASS_VALID] = useState(true)
    let [invalidAccount , setInvalidAccount]  = useState(false)

    let [username, setUsername] = useState("")
    let [password, setPassword]  = useState("")

    let onChangeUsername = (enteredText) =>{
        setUsername(enteredText)
    }
    let onPassChange = (enteredText) =>{
        setPassword(enteredText)
    }

    let fetchData = () =>{
        if (username.length == 0){
            setUSERNAME_VALID(USERNAME_VALID = false)
        }
        else if (username.length > 0){
            setUSERNAME_VALID(USERNAME_VALID = true)
        }
        if (password.length == 0){
            setPASS_VALID(PASS_VALID = false)
        }
       else if (password.length > 0){
            setPASS_VALID(PASS_VALID = true)
        }


        if (PASS_VALID && USERNAME_VALID){
            fetch(URLS.SIGN_IN_URL, {
                method : "POST",
                headers:{
                    "Accept":"application/json, text/plain, */*",
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    username,
                    password
                })

            })
            .then(res=> res.json())
            .then(res =>{
                
                if(res.credentials_match == true){
                    navigation.navigate("Home", {
                        name_ : username
                    })
                }
                else{
                    setInvalidAccount(true)
                }

            })  
            .catch(err =>{
                console.log(err)
            })
        }

        }

    return (
        <View style={styles.Screen}>
            <View style={inAppStyles.billboard}>
                <Animatable.Text 
                style = {[styles.h1, {color:"#fff", fontWeight : "600"}]}
                animation="fadeInRight"
                duration={1500}
                >
                Sign In
                </Animatable.Text>
            </View>
            <Animatable.View style = {inAppStyles.body} animation={"fadeInUpBig"} duration={1500}>
                <View style = {styles.container_ic}>
                    <Text style = {[styles.h3, {marginLeft:0, marginBottom:12, fontWeight:"bold"}]}>Username</Text>
                    <TextField 
                    iconName = "user-o"
                    placeholder = "Username"
                    secureTextEntry = {false}
                    inputType = "regular"
                    onTextChange = {onChangeUsername}
                    inputValid = {USERNAME_VALID}
                    />
                    <Text style = {[styles.h3, {marginLeft:0, marginBottom:12, fontWeight:"bold"}]}>Password</Text>
                    <TextField 
                    iconName = "lock"
                    placeholder = "* * * * "
                    secureTextEntry = {true}
                    inputType = "password"
                    onTextChange = {onPassChange}
                    inputValid = {PASS_VALID}
                     />
                    {
                        invalidAccount ? <Text style = {[styles.h4, {color:"#FC575D", fontWeight:"700"}]}>Invalid information!</Text> : (<Text></Text>)
                    } 
                    <TouchableOpacity style = {[styles.btn_primary, inAppStyles.btn_primary]} onPress = {fetchData}>
                        <Text style = {styles.h4_btn}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}
let inAppStyles = StyleSheet.create({
    billboard:{
        height: height * 0.25,
        width : "100%",
       justifyContent:"flex-end",
       paddingBottom:25,
       paddingLeft:25
    },
    body:{
        height:height * 0.75,
        width: width,
        backgroundColor:"#444",
        borderTopLeftRadius : 50,
        borderTopRightRadius : 50
    },
    option:{
        alignItems:"center",
        justifyContent:"center"
    },
    logIn:{
        backgroundColor:"transparent",
        borderColor:"red",
        borderWidth:1,
        padding:15,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15,
        marginVertical:15
    },
    btn_primary : {
       marginTop  :"25%" 
    }

})
