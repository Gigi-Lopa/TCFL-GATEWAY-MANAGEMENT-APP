import { StyleSheet, Dimensions } from 'react-native'
import { color } from 'react-native-reanimated'
let { height, width } = Dimensions.get("screen")

let styles = StyleSheet.create({
    Screen:{
        width:"100%",
        flex:1,
        height :height,
        backgroundColor:"#292a2e",
        flexDirection:"column"
    },  
    home_screen:{
        backgroundColor : "#f6f6f6"
    },
    container_ic:{
        width:"100%",
        height:"100%",
        padding: 25
    },
    h1:{
        fontSize:30,
        color: "#fff",
    },
    h3:{
        fontSize: 18,
        color:"#fff",
    },

    h4:{
        fontSize: 15,
        color:"#fff",
    },
    h4_btn:{
        fontSize:15,
        color: "#333"
    },
    btn_primary:{
        padding: 15,
        backgroundColor:"#fff",
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5 
    },
    form_row:{
        width:"100%",
        flexDirection:"row",
        marginBottom: 25,
        alignItems:"flex-start",
        justifyContent:"center"

    },
    textField:{
        width:"80%",
        marginLeft: 15,
        paddingBottom:5,
        color:"#fff",
        borderBottomWidth: 2,
    },
    text_input : {
        width:"80%",
        padding :10,
        color:"#000",
        backgroundColor : "#fff",
        borderRadius : 15,
        marginBottom : 10
    },
    textFieldValid : {
        borderBottomColor:"#828282",

    },
    textFieldInvalid :{
        borderBottomColor:"#FC575D",

    },
    icon:{
        paddingTop:5
    },
    navbar:{
        width: "100%",
        backgroundColor: "transparent",
        height: "11%",
        borderRadius: 15,
        marginTop : height * 0.05,
        flexDirection :"row",
        paddingRight  : 10,
        justifyContent : "space-evenly",
        alignItems : "center",

    },
    logo:{
        backgroundColor : "#444",
        padding: 10,
        width : width *0.2,
        height  : "70%",
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 25,
        marginLeft: 15

    },
    welcome_:{
        marginLeft : 10,
        marginRight : 10,
        borderRadius:15,
        padding :10,
        flexDirection:"column"
    },
    welcome_text:{
        fontSize: 15,
        fontWeight : "600"
    },
    option:{
        backgroundColor : "#292a2e",
        marginBottom : 25,
        flexDirection : "row",
        borderRadius : 15
    },  
    scan_options:{
        borderRadius: 25,
        marginTop  :15,
        backgroundColor : "#444",
    },
    mode : {
        textAlign: "center",
        fontWeight : "bold",
        marginBottom : 25
    },
   font_bold : {
    fontWeight : "bold"
   },
   textSuccess : {
        color : "green"
   },   
   textDanger : {
    color  :"red"
   },
    option_icon:{
        paddingLeft: 25,
        justifyContent: "center",
        alignItems : "center",
        color:"#fff"
    },
    option_text:{
        width  : "70%",
        padding: 15,
        justifyContent: "center",
        alignItems : "center",
        fontWeight :"bold",
        borderBottomLeftRadius : 25,
        borderBottomRightRadius : 25,
    },
    
    screen_camera:{
        width : "100%",
        flex  :1,
    },
    result_card:{
        flexDirection: "column",
        width : "100%",
        

    },
    result:{
        flexDirection : "row"
    }
    ,
    btn_scan:{
        marginTop:15,
        borderWidth : 2,
        borderColor: "#fff",
        borderRadius : 15,
        padding :10,
        justifyContent : "center",
        alignItems : "center"
    },
    modes:{
        width: "100%"
    },
    mode:{
        backgroundColor :"#444",
        padding : 15,
        marginRight : 15,
        borderRadius : 15,
        marginBottom : 10
    },
    active : {
        backgroundColor : "green"
    },
    unactive : {
        backgroundColor : "#444"
    },
    btm_content:{
        height :height * .3
    }

})

export default styles