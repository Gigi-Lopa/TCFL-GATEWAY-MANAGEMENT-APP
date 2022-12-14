import React from 'react'
import { View, Text } from 'react-native'
import SplashScreen from '../components/splashScreen'
import styles from '../styles/main'

export default function WelcomeActivity({navigation}) {
    
    let onSignIn= ()=>{
        navigation.navigate("Sign In")
    }

    return (
        <View style = {styles.Screen}>
            <SplashScreen onClick={onSignIn}/>
        </View>
    )
}
