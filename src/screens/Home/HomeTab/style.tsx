import { StyleSheet } from "react-native";import { DarkBlue, LightGrayColor, LightPrimaryTextColor, black, darkBg, grayOuterLine as grayBorderLine, secondaryTextColor, white } from "../../../theme/Colors";
import Fonts from "../../../assets/Fonts";


export const styles  = StyleSheet.create({
    announceText:{
        color:secondaryTextColor,
        fontSize:15,
        fontFamily:Fonts.WIX_MEDIUM,
        marginLeft:20,
        marginTop:20
    },
    bootCampContiner:{
        borderColor:grayBorderLine,
        height:186,
        borderRadius:4,
        borderWidth:1,
        marginHorizontal:20,
        marginTop:10
    },
    bootCampLogoContainer:{
        flexDirection:'row',
        margin:20
    },
    roundLogoIcon:{
        width:36,
        height:36,
        alignSelf:'center',
        marginRight:20
    },
    bootCampText:{
        color:secondaryTextColor,
        fontFamily:Fonts.WIX_SEMI_BOLD,
        fontSize:14,
    },
    bootCampMockText:{
        color:secondaryTextColor,
        fontFamily:Fonts.WIX_MEDIUM,
        fontSize:18,
        marginLeft:20
    },
    bootCampMockRecordingText:{
        color:LightGrayColor,
        fontFamily:Fonts.WIX_MEDIUM,
        fontSize:15,
        marginLeft:20,
        marginTop:5,
        width:'80%',
        lineHeight:22
    },
    dayText:{
        color:LightGrayColor,
        fontFamily:Fonts.WIX_REGULAR,
        fontSize:12,
    },
    scissorsImage:{
        marginTop:50,
        height:321,
        width:'90%',marginHorizontal:20
    },
    upcomingText:{
        color:secondaryTextColor,
        fontSize:14,
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        marginLeft:20,
        marginVertical:20
    },

    //Welcome Container
    welcomeContainer:{
        marginVertical:10,
        backgroundColor:white,
        marginHorizontal:20,
        paddingVertical:40,
        borderRadius:5,
        justifyContent:'center',
        paddingHorizontal:40,
    
    },
    welcomeText:{
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        fontWeight:'600',
        fontSize:18,
        letterSpacing:5,
        color:LightPrimaryTextColor
    },
    welcomeTagText:{
        fontFamily:Fonts.EBGARAMOND_MEDIUM_ITALIC,
        fontWeight:'500',
        fontSize:14,
        color:black,
    },
    welcomeDetailsText:{
        fontFamily:Fonts.WIX_MEDIUM,
        fontWeight:'500',
        fontSize:14,
        width:'95%',
        color:secondaryTextColor,
        marginTop:20,
        lineHeight:20
    },
    //Previous Candidates 
    previousContainer:{
        marginHorizontal:20,
    },
    whatPreviousRow:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    whatPreviousText:{
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        fontSize:14,
        color:secondaryTextColor,
        alignSelf:'center'
    },
    viewAllText:{
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        fontSize:16,
        color:DarkBlue
    },
    multiImageContainer:{
        marginTop:20,
        height:160,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    firstImage:{
        height:158,
        backgroundColor:grayBorderLine,
        width:'48%',
        borderRadius:3,
    },
    rightImageContainer:{
        width:'50%',
        height:158,
        justifyContent:'space-between'
    },
    quarterImageContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    quarterImage:{
        width:'48%',
        height:75,
        backgroundColor:grayBorderLine,
        borderRadius:3,
    },
    clockTowerImage:{
        height:320,
        width:'90%',
        alignSelf:'center',
        marginTop:20,
        borderRadius:4
    },

    //Members Continer
    membersMainContainer:{
        marginVertical:30,
        marginHorizontal:20,
    
    },
    memberRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    },
    membersNAllText:{
        fontFamily:Fonts.WIX_BOLD,
        fontWeight:'bold',
        fontSize:16,
        color:DarkBlue
    },
    
    roundProfileImage:{
        width:42,
        height:42,
        borderRadius:50,
        backgroundColor:grayBorderLine
    },
    numberOfMebersText:{
        marginVertical:15,
        color:LightGrayColor,
        fontFamily:Fonts.WIX_REGULAR,
        fontSize:14,

    },
    inviteButtonStyle:{
        height:30,
        width:'45%',
        backgroundColor:white,
        borderRadius:30,
        borderColor:DarkBlue,
        borderWidth:1,
        alignSelf:'flex-start'
    },
    inviteButtonTextStyle:{
        color:DarkBlue,
        fontFamily:Fonts.WIX_SEMI_BOLD,
        fontSize:16,
    },
    questionText:{
        marginVertical:25,
        color:LightGrayColor,
        fontFamily:Fonts.WIX_REGULAR,
        fontSize:16
    }
    

})