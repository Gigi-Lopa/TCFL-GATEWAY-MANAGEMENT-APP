import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity,ScrollView ,TextInput} from "react-native"
import styles from '../styles/main'
import Navbar from '../components/navbar'
import { BarCodeScanner } from 'expo-barcode-scanner';
import Mode from '../components/mode';
import URLS from '../components/fetchUrl';
import GateControl from '../components/gateControl';
import Feather from "react-native-vector-icons/Feather"
import ExamControl from '../components/examControl';
import LibraryControl from '../components/libraryControl';
import LoadingIllu from '../components/loadingPage';

export default function HomeActivity (props) {

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanned_id, setScanned_Id] =  useState()

  let [lc, setlc] = useState(false)
  let [gc, setGc] = useState(true)
  let [ec, setEc] = useState(false)

  let [fullname, setFullname] = useState("")
  let [std_id, setStd_id] = useState("")
  let [pending, setPending] = useState("")
  let [tuition_fee, setTuition_fee] = useState("")
  let [grant_acces, setGrant_access] = useState("")

  let onStudentId =(e)=>{
    setStd_id(e)
  }

  let fetchInfor = (id)=>{
    fetch(URLS.GET_USER_INFOR + id)
    .then(res => res.json())
    .then(res =>{
      if(res.scan_com == true){
        alert("An Error occured. Try again or manually enter the student code.")
      }
      else{
        setFullname(res.row[0].name)
        setTuition_fee(res.row[0].tuition_fee)
        setPending(res.row[0].pendings)
        setGrant_access(res.row[0].grant_access)
      }
    })
  } 

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    fetchInfor(data)
    setScanned_Id(data)
  };

  let setMode = (mode) =>{
      if (mode === "gc"){
        setlc(false)
        setEc(false)
        setGc(true)
      }
      else if(mode ==="lc"){
        setEc(false)
        setGc(false)
        setlc(true)
      }
      else if(mode === "ec") {
        setGc(false)
        setlc(false)
        setEc(true)

        fetch(URLS.WRITE_LOG_FILE + "/" + scanned_id)
        .then(res => res.json())
        .then(res =>{
            console.log(res.logged)
        })
      
      }

  }


  if (hasPermission === null) {
    return <LoadingIllu/>
  }
  if (hasPermission === false) {
    return <LoadingIllu/>
  }
  return (
    <View style = {[styles.Screen, inCompStyles.Screen]}>
        <Navbar iconName = "user-o" username= {props.route.params.name_} scanned = {scanned}/>
       <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[ styles.screen_camera]}
          /> 

          <View style = {styles.btm_content}>
            <ScrollView style = {{margin : 15}}>
              <View style = {styles.modes}>
                <ScrollView horizontal>
                    <Mode mode = "Gate Control" active = {gc} short_code = "gc" onclick = {setMode}/>
                    <Mode mode ="Library Control" active ={lc} short_code = "lc" onclick = {setMode}/>
                    <Mode mode = "Exam Control" active = {ec} short_code = "ec" onclick = {setMode}/>
                </ScrollView>
              
            </View>

            <View style = {styles.result_card}>
              <View style = {inCompStyles.inputRow}>
                <TextInput 
                placeholder = "Enter student ID here"
                onChangeText = {onStudentId}
                style = {styles.text_input}
                />
                <TouchableOpacity onPress = {()=>{
                  if(std_id.length != 0){
                    fetchInfor(std_id)
                    setScanned_Id(std_id)
                  }
                  else{
                    alert("Field Empty[!]")
                  }
                }}>
                    <Feather
                      name = "search"
                      size = {25}
                      color ="#fff"
                      style = {{margin :10}}
                    />
                </TouchableOpacity>
              </View>

            <View style ={[styles.results]}>
              {
                gc ? (<GateControl fullname = {fullname}
                                  tuition_fee = {tuition_fee}
                                  pending = {pending}
                                  grant_acces = {grant_acces}/>)
                    :
                (undefined)
              }
              
              {
              lc ? (<LibraryControl fullname = {fullname}
                                tuition_fee = {tuition_fee}
                                pending = {pending}
                                grant_acces = {grant_acces}/>)
                  :
              (undefined)
              }  
              {
              ec ? (<ExamControl fullname = {fullname}
                                  tuition_fee = {tuition_fee}
                                  pending = {pending}
                                  grant_acces = {grant_acces}/>)
                    :
                (undefined)
              }               
              <TouchableOpacity style = {styles.btn_scan}
                  onPress={() => {
                    setScanned(false)
                    setFullname("")
                    setTuition_fee("")
                    setPending("")
                    setGrant_access("")
                    }}>
                  <Text style = {styles.h4}>Scan again</Text>
              </TouchableOpacity>
            </View>
                  
              </View> 
            </ScrollView>
          
          </View>
    </View>
  );
}

let inCompStyles =  StyleSheet.create({
  Screen : {
    backgroundColor : "black",
    position  : "relative"
  },
  scan_mode:{
    width: "100%",
    alignItems :"center",
    justifyContent:"center",
    backgroundColor :"#444",
    padding: 5,
    borderRadius  :15
  },
  inputRow:{
    flexDirection :"row",
    width : "100%",
    justifyContent : "space-evenly"
  }
})
