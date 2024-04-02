import { StyleSheet } from "react-native";import { LightGrayColor, grayOuterLine as grayBorderLine, secondaryTextColor, white } from "../../../theme/Colors";
import Fonts from "../../../assets/Fonts";


export const styles  = StyleSheet.create({
    container:{ 
        backgroundColor:white,
        flex:1,
        paddingVertical:30,
        paddingBottom:70
    },
    topContainer:{
        marginVertical:20
    },
    bootCampText:{
        color:secondaryTextColor,
        fontSize:16,
        fontFamily:Fonts.WIX_MEDIUM,
        marginLeft:20,
        marginVertical:10,
    },
    londonImage:{
        marginTop:20,
        alignSelf:'center',
        width:'90%',
    }
    
})