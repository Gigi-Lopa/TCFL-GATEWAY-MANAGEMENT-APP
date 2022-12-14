import React from "react"
import { StyleSheet, View, Text, Button, TouchableOpacity, ScrollView, TextInput, Image, Dimensions } from "react-native"
import styles from "../styles/main"
import * as Animatable from "react-native-animatable" 
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
let { height, width } = Dimensions.get("screen")
let BG = require("../assets/bg.jpg")

let SplashScreen = ({onClick}) => {
    
    let fadeIn ="fadeInUpBig"
    return(
        <View style={ styles.Screen }>
            <View style = {inComponentStyles.billboard}>
                <Image  source = {BG} style = {inComponentStyles.BG_} resizemode ="stretch"/>
            </View>
                <Animatable.View animation={fadeIn} duration={1500} style = {inComponentStyles.body}>

                    <View style = {styles.container_ic}>
                        <Text style = {styles.h1}>TCFL</Text>
                        <Text style = {styles.h1}>Entrance System</Text>
                        <Text style = {styles.h4}>Sign In with an account</Text>

                        <View style = {inComponentStyles.bottom}>
                            <TouchableOpacity style = {styles.btn_primary} onPress = {onClick}>
                                <Text style = {styles.h4_btn}>Sign In</Text>
                                <MaterialIcons name="navigate-next" color="#fff" size = {15} style = {{marginLeft : 10}}/> 
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </Animatable.View>

        </View>
    )
}

let inComponentStyles = StyleSheet.create({

    billboard:{
        height: height *0.4,
        width: "100%",
        position:"relative"
    },
    body:{
        position: "absolute",
        height: height * 0.6,
        width: "100%",
        backgroundColor: "transparent",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: height * 0.5,
        color: "#fff"
    },
    BG_:{
        width: "100%",
        height : height *0.5
    },
    bottom:{
        marginTop:"20%",
        width: "100%"
    },
  
})

export default SplashScreen