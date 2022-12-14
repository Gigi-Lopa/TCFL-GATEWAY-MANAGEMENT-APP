import React from 'react'
import { View, TextInput } from 'react-native'
import styles from '../styles/main'
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default function TextField(props) {
    return (
        <View style = {styles.form_row}>
            
            <FontAwesome
            name ={props.iconName} 
            color="#fff" 
            size={18}
            style = {styles.icon}
            /> 
            <TextInput
            placeholder={props.placeholder}
            autoCapitalize="none"
            secureTextEntry = {props.secureTextEntry}
            style = {[styles.textField, props.inputValid ? styles.textFieldValid : styles.textFieldInvalid]}
            onChangeText = {props.onTextChange}

            />
        </View>
    )
}
