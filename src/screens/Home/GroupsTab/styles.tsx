import { StyleSheet } from "react-native";import { DarkBlue, LightGrayColor, blueTypeTextColor, grayOuterLine as grayBorderLine, grayE8, secondaryTextColor, white } from "../../../theme/Colors";
import Fonts from "../../../assets/Fonts";


export const styles  = StyleSheet.create({
    container:{ 
        backgroundColor:white,
        flex:1,
    },
    firstRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10,
        marginHorizontal:20
    },
    dividerLine:{
        backgroundColor:grayE8,
        height:1,
        width:'100%',
        marginBottom:20
    },
    examNViewAllText:{
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        fontSize:16,
        color:blueTypeTextColor
    },
    
    leftGroupText:{
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        fontSize:13,
        color:secondaryTextColor,
        marginHorizontal:20,
        marginVertical:20
    },
    groupsBgImage:{
        height:80,
        width:105,
        justifyContent:'center',
        marginLeft:20,
        borderRadius:4,
        overflow:'hidden'

    },
    imageBgText:{
        color:white,
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        fontSize:14,
        alignSelf:'center'
    },
    subjectText:{
        fontSize: 14,
    },
    paginationContainer:{
        borderWidth:1,
        height:40,
        flexDirection:'row',
    },
    dotStyle:{
        width: 7,
        height: 7,
        borderRadius: 5,
        backgroundColor:grayE8

      }


   
    
})