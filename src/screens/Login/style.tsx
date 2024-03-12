import {StyleSheet}  from "react-native";
import { LightPrimaryTextColor, loginBackground } from "../../theme/Colors";
import Fonts from "../../assets/Fonts";

export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:loginBackground,
        flex:1,
        justifyContent:'space-between'
    },
    tagline:{
        alignSelf:'center',
        fontFamily:Fonts.WIX_BOLD,
        fontSize:25,
        marginTop:'20%',
        color:LightPrimaryTextColor
    },
    appIcon:{
        width:135,
        height:135,
        alignSelf:'center',
        marginVertical:'30%'
    },
    button: {
        height: 40,
        backgroundColor: '#000000',
        borderRadius: 20,
        justifyContent: 'center', 
        width:'75%',
        alignSelf:'center'
      },
      buttonText: {
        color: 'white',
        fontSize: 14,
        fontFamily:Fonts.WIX_BOLD,
        alignSelf:'center',

      },
      policyText:{
        alignSelf:'center',
        textAlign:'center',
        fontSize:12,
        fontFamily:Fonts.WIX_REGULAR,
        color:LightPrimaryTextColor,
        marginHorizontal:10,
        marginBottom:10,
      }
})