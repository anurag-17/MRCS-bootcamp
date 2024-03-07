import {StyleSheet}  from "react-native";
import { loginBackground } from "../../theme/Colors";
import Fonts from "../../assets/Fonts";

export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:loginBackground,
        flex:1,
    },
    tagline:{
        alignSelf:'center',
        fontFamily:Fonts.WIX_BOLD,
        fontSize:25,
        marginTop:55,

    },
    appIcon:{
        width:130,
        height:130,
        alignSelf:'center',
        marginVertical:100
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
        alignSelf:'center'
      },
      policyText:{
        marginTop:45,
        alignSelf:'center',
        textAlign:'center',
        fontFamily:Fonts.WIX_REGULAR,
        marginHorizontal:10,
      }
})