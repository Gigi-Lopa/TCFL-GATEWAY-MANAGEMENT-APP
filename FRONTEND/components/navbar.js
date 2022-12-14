import React from 'react'
import {Text, View, Image, StyleSheet} from "react-native"
import styles from '../styles/main'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"



export default function Navbar(props) {
    return (
        <View style ={styles.navbar}>
              <View style = {styles.logo}>
              <FontAwesome
                name ={props.iconName} 
                color="#fff" 
                size={25}
               
            />
              </View>
              <View style= {styles.welcome_}>
                  <Text style = {[styles.h3, inCompStyles.bold_text]}>
                    Welcome back,
                  </Text>
                  <Text style = {styles.h3}>
                    {props.username}
                  </Text>
              </View>
              <View style = {styles.status}>
                  {
                    !props.scanned ?(
                      <AntDesign
                        name = "scan1"
                        size = {25}
                        color ="#fff"
                      />
                    ):(
                      <AntDesign
                        name = "like1"
                        size = {25}
                        color = "green"
                      />
                    )
                  }
              </View>
        </View>
  )
}

let inCompStyles = StyleSheet.create({
    logo_:{
      width  : "100%",
      height: "100%"
    },
    bold_text:{
      fontWeight : "bold"
    }
  })