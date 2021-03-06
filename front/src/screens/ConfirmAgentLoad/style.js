import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor, fondoColor } from "../../Common/constans";

export const style = StyleSheet.create({    
mainContainer : {
backgroundColor: "#FAFBFF",
height: '100%',
},
imageCont : {
width: "100%"   
},
image : {
 width: "100%"
},

container : {
flex:1,
alignItems: "center",
backgroundColor: fondoColor
},

title : {
  fontFamily: "nunito", 
  color: "#6F76E4",
  fontSize: 30,
  margin: '4%',
  textAlign: 'center',
  textTransform: "uppercase"
},
icon : {
  width: 150,
  height: 150,
  marginTop: '4%',
  marginBottom: '6%'
},
text : {
  fontSize: 20,
  textAlign: 'center',
  marginTop: 15,
  width: '80%',
  color: '#303030',
  fontFamily:'regular'
},
valor : {
   fontSize: 50,
   fontFamily: 'nunito',
   marginBottom: '2%',
   color: '#00CC96' 
},
volver : {
    backgroundColor: buttonColor,
    padding: '1%',
    borderRadius: 5,
    marginTop: "15%", 
    marginBottom: '5%'
},
textConfirmar : {
    color: 'white',
    fontSize: 20,
    paddingLeft: '5%',
    paddingRight: "5%",
    paddingBottom: "3%",
    paddingTop: '3%',
    fontFamily: "nunito" 
},
hr : {
  width: '80%',
  borderTopColor: '#808080',
  borderTopWidth: 1,
  
}
})