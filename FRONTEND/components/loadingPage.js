import React from 'react'
import {View, Image, StyleSheet ,Dimensions} from "react-native"
import styles from '../styles/main'

let {height, width} = Dimensions.get("screen")
export default function LoadingIllu() {
    let image = require("../assets/load.png")
  return (
    <View style = {[styles.Screen, inApp.Screen]}>
        <Image source = {image} style = {inApp.image}/>
    </View>
  )
}
let inApp =  StyleSheet.create({
    image:{
        width  : width, 
        height : 0.4
    },
    Screen : {
        justifyContent  :"center",
        alignItems :"center"
    }
    
})
