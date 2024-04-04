import { Platform, StyleSheet } from "react-native";
import Fonts from "../../assets/Fonts";
import { DDDDDD, DarkBlue, LightGrayColor, LightPrimaryTextColor, black, secondaryTextColor } from "../../theme/Colors";


export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: DDDDDD,
  },
  input: {
    paddingBottom: 5,
    flex: 1,
    alignSelf: 'flex-start',
    marginTop: Platform.OS == 'ios' ? 15 : 0,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: secondaryTextColor,
    marginLeft: Platform.OS == 'android' ? -4 : 0,
    fontSize:15

  },
  label: {
    position: 'absolute',
    left: 0,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: LightGrayColor,
  },
  filledValueLable:{
    top: -3,
    fontSize: 13,
    color:LightGrayColor
  },

  labelFocused: {
    fontSize: 13,
    color:secondaryTextColor
  },
  eyeIcon: {
    padding: 10,
  },
  lockIcon: { width: 15, height: 18 },
});

  