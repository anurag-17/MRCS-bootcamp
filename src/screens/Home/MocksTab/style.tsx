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
    joinFreeText:{
        color:secondaryTextColor,
        fontSize:16,
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        marginLeft:20,
        marginTop:20
    },
    buttonContainer:{
        marginVertical:20,
        justifyContent:'center',
        flexDirection:'row'
    }
    
})