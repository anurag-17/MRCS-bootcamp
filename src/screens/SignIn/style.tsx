import {StyleSheet}  from "react-native";
import {  LightGrayColor, LightPrimaryTextColor, black, white } from "../../theme/Colors";
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
        marginLeft:15,
        marginTop:10,
        fontSize:24
    },
    enterEmailTitle:{
        alignSelf:'center',
        marginTop:5,
        color:LightGrayColor,
        fontFamily:Fonts.WIX_REGULAR,
        fontSize:15
    },
    enterEmail:{
        marginTop:'10%',
        marginLeft:15,
        fontFamily:Fonts.WIX_REGULAR,
        color:LightPrimaryTextColor,
        fontSize:13
    },
    emailInput:{
        marginTop:10,
        marginHorizontal:15,
        borderBottomWidth:1,
        fontFamily:Fonts.WIX_REGULAR,
        paddingBottom:10,
        borderBottomColor:LightPrimaryTextColor
    },
    invalidInput:{
        color: 'red', 
        marginLeft: 15,
        fontFamily:Fonts.WIX_REGULAR
    }  
})