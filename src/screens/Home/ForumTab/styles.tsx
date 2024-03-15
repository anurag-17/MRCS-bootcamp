import { StyleSheet } from "react-native";import { DarkBlue, LightGrayColor, blueTypeTextColor, grayOuterLine as grayBorderLine, grayE8, grayEC, grayOuterLine, secondaryTextColor, white } from "../../../theme/Colors";
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
        alignItems:'center',
        marginHorizontal:20,
        paddingTop:5

    },
    dividerLine:{
        backgroundColor:grayE8,
        height:1,
        width:'100%',
        marginVertical:10
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
    
    addPostIcon:{
        height:22,
        width:22,
        alignSelf:'center',
        marginRight:10
    },
    searchIcon:{
        height:21,
        width:21,
        alignSelf:'center'
    },
    searchContainer:{
        borderLeftWidth:1,
        paddingLeft:10,
        justifyContent:'center',
        borderLeftColor:grayOuterLine
    },
    fatDivider:{
        marginTop:12,
        backgroundColor:grayEC,
        height:7,
        width:'100%'
    }
    
})