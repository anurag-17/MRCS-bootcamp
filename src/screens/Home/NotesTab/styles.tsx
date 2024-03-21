import { StyleSheet } from "react-native";
import { LightPrimaryTextColor, dividerLineColor } from "../../../theme/Colors";
import Fonts from "../../../assets/Fonts";

export const styles = StyleSheet.create({
  
    bootCampText:{
        fontFamily:Fonts.WIX_SEMI_BOLD,
        fontSize:15,
        margin:20,
        marginTop:30,
        color:LightPrimaryTextColor
    },
    noteContainer:{
        paddingHorizontal:15,
        paddingVertical:15,
        justifyContent:'space-between',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:dividerLineColor,
    },
    notTag:{
        flexDirection:'row'
    },
    noteName:{
        alignSelf:'center',
        fontFamily:Fonts.WIX_SEMI_BOLD,
        fontSize:15,
        color:LightPrimaryTextColor

    },
    noteIcon:{
        height:60,
        width:60,
        marginRight:10,
        alignSelf:'center'
    },
    forwardArrowIcon:{
        height:11,
        width:11,
        alignSelf:'center'
    }
})