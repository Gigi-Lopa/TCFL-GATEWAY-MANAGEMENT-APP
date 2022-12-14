import React from 'react'
import {View, Text, TouchableOpacity} from "react-native"
import styles from '../styles/main'

export default function Mode(props) {
  return (
        <TouchableOpacity style ={[styles.mode, props.active ? (styles.active) : (styles.unactive)]} onPress = {()=>{
            props.onclick(props.short_code)
        }}>
            <Text style = {styles.h4}>{props.mode}</Text>
        </TouchableOpacity>
    )
}
