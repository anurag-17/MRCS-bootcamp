import {StyleSheet}  from "react-native";
import {  LightBlue, LightGrayColor, LightPrimaryTextColor, black, white } from "../../theme/Colors";
import Fonts from "../../assets/Fonts";

export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:white,
        flex:1,
        justifyContent:'space-between'
    },
    backArrowContainer:{
        height:60,
        backgroundColor:white,
        paddingLeft:5,
        justifyContent:'center'
    },
    backArrowCircleButton:{
        height:40,
        width:40,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
    },
    backArrow:{
        height:25,
        width:25,
        resizeMode:'contain',
    },
    title:{
        fontFamily:Fonts.WIX_BOLD,
        color:LightPrimaryTextColor,
        marginTop:10,
        
        marginBottom:40,
        fontSize:24,
        alignSelf:'center'
    },
    enterPasswordTitle:{
        alignSelf:'center',
        marginTop:5,
        color:LightGrayColor,
        fontFamily:Fonts.WIX_REGULAR,
        fontSize:15
    },
    enterPassword:{
        marginTop:'10%',
        marginLeft:15,
        fontFamily:Fonts.WIX_REGULAR,
        color:LightPrimaryTextColor,
        fontSize:13
    },
    passwordInput:{
        fontFamily:Fonts.WIX_REGULAR,
        paddingBottom:5
    },
    invalidInput:{
        color: 'red', 
        marginLeft: 20,
        fontFamily:Fonts.WIX_REGULAR
    },
    forgotPasswordText:{
        alignSelf:'center',
        fontFamily:Fonts.WIX_BOLD,
        color:LightBlue
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:LightPrimaryTextColor,
        marginHorizontal:15,
        height:35
      },
     
      eyeIcon: {
        padding: 10,
      },
      eyeImage:{width: 24, height: 24 } 

})