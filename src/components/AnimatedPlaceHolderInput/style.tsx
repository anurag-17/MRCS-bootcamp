import { StyleSheet } from "react-native";
import Fonts from "../../assets/Fonts";
import { LightPrimaryTextColor } from "../../theme/Colors";


export const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth:1,
      height:45,
      borderBottomColor: 'black',
  
    },
    input: {
      flex: 1,
      paddingVertical: 10,
      fontFamily:Fonts.WIX_REGULAR,
  
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
  