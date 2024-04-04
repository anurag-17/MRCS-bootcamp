import { StyleSheet,Dimensions,Platform } from "react-native";
import { DarkBlue, black, darkBg, grayD9, grayOpacityHomeHeaderIcon, white } from "../../theme/Colors";
import Fonts from "../../assets/Fonts";



export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  gradientContainer: {
    height: 220,
  },
  gradientContainerAlt: {
    height: 100,
  },
  bannerImage: {
    height: 220,
    width: '100%',
  },
  bannerImageAlt: {
    height: 80,
    width: '100%',
    backgroundColor: DarkBlue,
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 48 : 33,
  },
  iconRightSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    marginRight: 20,
  },
  leftGrayCircleContainer: {
    backgroundColor: grayD9,
    height: 28,
    width: 28,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  rightGrayCircleContainer: {
    backgroundColor: grayOpacityHomeHeaderIcon,
    height: 36,
    width: 36,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    height: 18,
    width: 18,
    alignSelf: 'center',
  },
  tabTopContainer: {
    marginTop:-35,
    // paddingBottom:5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical:20,
    borderColor:white,
    backgroundColor: white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 2.0,
    elevation: 3,
  },
 
  tabsShadowEffect:{
    backgroundColor: white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor:'black',
    shadowOpacity: 0.9,
    shadowRadius: 2.0,
  
    elevation: 3,
  },
  homeHeaderLogo:{
    height:64,
    width:64,
    marginTop:-45,
    marginLeft:20
  },
  headerTagContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20
  },
  tagText:{
    fontFamily:Fonts.WIX_SEMI_BOLD,
    fontSize:20,
    color:DarkBlue,
    alignSelf:'center'
  },
  buttonStyle:{
    backgroundColor:DarkBlue,
    height:33,
    borderRadius:35
  },
  btnTexStyle:{
    fontFamily:Fonts.WIX_BOLD,
    fontSize:13
  }
});