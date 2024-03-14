import { StyleSheet } from "react-native";
import Fonts from "../../assets/Fonts";
import { white, grayOuterLine, secondaryTextColor, LightGrayColor } from "../../theme/Colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: white,
    },
    studyProgramContainer: {
      marginHorizontal: 20,
      borderColor: grayOuterLine,
      borderWidth: 1,
      borderRadius: 4,
      justifyContent: 'space-between',
    },
    programImage: {
      height: 101,
      width:'100%',
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
    },
    middleContainr: {
      marginLeft: 20,
      marginVertical:20,
    },
    prgrsBarContainer: {
      marginTop:10
    },
    subjectText: {
      fontFamily: Fonts.POPPINS_SEMIBOLD,
      fontSize: 18,
      color: secondaryTextColor,
    },
    courseStartData: {
      fontFamily: Fonts.POPPINS_REGULAR,
      fontSize: 14,
      color: LightGrayColor,
    },
    durationText: {
      fontFamily: Fonts.POPPINS_REGULAR,
      fontSize: 14,
      color: secondaryTextColor,
    },
    participantText: {
      fontFamily: Fonts.POPPINS_REGULAR,
      fontSize: 14,
      color: LightGrayColor,
    },
    setepsCompleted: {
      fontFamily: Fonts.POPPINS_REGULAR,
      fontSize: 12,
      color: LightGrayColor,
      lineHeight:20,
      marginTop:5,
    },
    buttonContainer: {
      borderTopWidth: 1,
      borderTopColor: grayOuterLine,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical:10,
    },
    btnText:{
      fontFamily: Fonts.POPPINS_SEMIBOLD,
      fontSize: 14,
      color: secondaryTextColor,
      lineHeight:20,
    }
  });