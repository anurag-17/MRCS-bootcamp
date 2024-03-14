import { StyleSheet,Dimensions,Platform } from "react-native";
import { DarkBlue, black, darkBg, dividerLineColor, grayHomeHeaderIcon, grayOpacityHomeHeaderIcon, quarternaryTextColor, tertiaryTextColor, white } from "../../../../theme/Colors";
import Fonts from "../../../../assets/Fonts";



export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  gradientContainer: {
    height: 270,
    paddingTop:Platform.OS === 'ios' ? 40 : 33
  },
  gradientContainerAlt: {
    height: 100,
  },
  
backArrowCircleButton:{
    height:40,
    width:40,
    // marginTop:Platform.OS === 'ios' ? 48 : 33   , 
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
},
backArrow:{
    height:25,
    width:25,
    resizeMode:'contain',
},
  notesHeadingText:{
    color:white,
    fontFamily:Fonts.POPPINS_BOLD,
    fontSize:20,
    marginLeft:20
  },
  topicContainer:{
    borderBottomWidth:1,
    borderBottomColor:dividerLineColor,
  },
  screenNameText:{
    color:DarkBlue,
    fontFamily:Fonts.POPPINS_BOLD,
    fontSize:12,
    marginLeft:20,
    marginVertical:5,
    lineHeight:22
  },
  topicText:{
    color:tertiaryTextColor,
    fontFamily:Fonts.POPPINS_BOLD,
    fontSize:15,
    marginLeft:20,
    lineHeight:22
  },
  exclusiveButton:{
    color:tertiaryTextColor,
    backgroundColor:tertiaryTextColor,
    height:24,
    borderRadius:4,
    marginTop:10,
    alignSelf:'flex-start',
    marginLeft:20,
    width:69,
    paddingHorizontal:0

  },
  exclusiveText:{
    fontFamily:Fonts.POPPINS_SEMIBOLD,
    color:white,
    fontSize:12,
    borderWidth:1,
  },
  bottomView:{
    flexDirection:'row',
    marginVertical:20,
    marginBottom:15,
    marginLeft:20,
  },
  eyeIconRow:{
    flexDirection:'row',
    marginRight:25
  },
  chatIconRow:{
    flexDirection:'row',
  },
  icon:{
    height:18,
    width:18,
    marginRight:5
  },
  countText:{
    color:quarternaryTextColor,
    fontSize:11,
    fontFamily:Fonts.POPPINS_REGULAR
  }
  
});