import React from 'react'
import {View, Text} from "react-native"
import styles from '../styles/main'

export default function GateControl(props) {
  return (
        <View>
            <Text style = {[styles.h4]}>FULLNAME  : 
              <Text style ={[styles.h4, styles.font_bold]}>
                {props.fullname}
              </Text>
            </Text>
            
            <Text style = {[styles.h4]}>TUITION FEE  :
              <Text style ={[styles.h4, styles.font_bold,  props.tuition_fee.toUpperCase() === "CLEARED" ? (styles.textSuccess)  : (styles.textDanger)]}>
                  {props.tuition_fee}
              </Text>
            </Text>
            <Text style = {[styles.h4]}>GRANT ACCESS  : 
                <Text style ={[styles.h4, styles.font_bold, , props.grant_acces.toUpperCase() === "YES" ? (styles.textSuccess)  : (styles.textDanger)]}>
                  {props.grant_acces}
                </Text>
              </Text>
        </View>
  )
}
