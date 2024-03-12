import { Platform, StyleSheet } from "react-native";
import Fonts from "../../assets/Fonts";
import { LightPrimaryTextColor, black } from "../../theme/Colors";


export const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      borderBottomWidth:1,
      borderBottomColor: 'black',
  
    },
    input: {
      paddingBottom: 5,
      flex:1,
      alignSelf:'flex-start',
      marginTop:Platform.OS=='ios'?15:0,
      fontFamily:Fonts.WIX_REGULAR,
      color:black,
      marginLeft:Platform.OS=='android'?-4:0
    },
    label: {
      position: 'absolute',
      left: 0,
      fontSize: 13,
      fontFamily:Fonts.WIX_REGULAR,
      color:LightPrimaryTextColor,  
    },
    labelFocused: {
      top: -5,
    },
    rightIcon: {
      marginRight: 10,
    },
    eyeIcon: {
      padding: 10,
    },
    eyeImage: { width: 24, height: 24 },
  });
  