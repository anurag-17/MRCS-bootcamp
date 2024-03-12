import { StyleSheet } from "react-native";import { LightGrayColor, grayOuterLine as grayBorderLine, secondaryTextColor, white } from "../../../theme/Colors";
import Fonts from "../../../assets/Fonts";


export const styles  = StyleSheet.create({
    container:{ 
        backgroundColor:white,
        flex:1
    },
    topContainer:{
        marginVertical:20
    },
    bootCampText:{
        color:secondaryTextColor,
        fontSize:16,
        fontFamily:Fonts.WIX_MEDIUM,
        alignSelf:'center',
        marginVertical:10,
    },
    londonImage:{
        marginTop:20,
        alignSelf:'center',
        width:'90%',
    }
    
})