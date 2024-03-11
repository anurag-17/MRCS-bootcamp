import { StyleSheet } from "react-native";
import { LightPrimaryTextColor, dividerLineColor } from "../../../theme/Colors";
import Fonts from "../../../assets/Fonts";

export const styles = StyleSheet.create({
    serchContainer:{
        height:50,
        borderBottomWidth:1,
        borderBottomColor:dividerLineColor,
        paddingHorizontal:20,
        flexDirection:'row'
    },
    searchIcon:{
        height:20,
        width:20,
        alignSelf:'center',
        marginRight:10
    },
    searchText:{
        alignSelf:'center',
        fontFamily:Fonts.WIX_REGULAR,
        fontSize:15,
        color:LightPrimaryTextColor
    },
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