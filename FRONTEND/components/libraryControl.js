import React from 'react'
import {View, Text} from "react-native"
import styles from '../styles/main'

export default function LibraryControl(props) {
  return (
        <View>
            <Text style = {[styles.h4]}>FULLNAME  : 
              <Text style ={[styles.h4, styles.font_bold]}>
                {props.fullname}
              </Text>
            </Text>
       
            <Text style = {[styles.h4]}>LIBRARY PENDINGS  :
              <Text style ={[styles.h4, styles.font_bold,  props.pending.toUpperCase() === "NONE" ? (styles.textSuccess)  : (styles.textDanger)]}>
              {props.pending}
              </Text>
            </Text>
            
            <Text style = {[styles.h4]}>GRANT ACCESS  : 
                <Text style ={[styles.h4, styles.font_bold, , props.pending.toUpperCase() === "NONE" ? (styles.textSuccess)  : (styles.textDanger)]}>
                  {
                    props.pending.toUpperCase() === "NONE" ? ("YES")  : ("NO")
                  }
                </Text>
              </Text>
        </View>
  )
}
