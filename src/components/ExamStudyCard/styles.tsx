import { StyleSheet } from "react-native";
import Fonts from "../../assets/Fonts";
import { white, grayOuterLine, secondaryTextColor, LightGrayColor, grayLightBlue, LightBlueADD } from "../../theme/Colors";

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
  blackTick:{
    height:15,
    width:15,
    alignSelf:'center',
    marginHorizontal:5
  },
  participantView: {
    marginTop: 17,
    height: 23,
    width: 153,
    backgroundColor: LightBlueADD,
    marginLeft: 21,
    borderRadius: 4,
    flexDirection:'row',
  },
  youJoined:{
    fontSize:11,
    fontFamily:Fonts.POPPINS_SEMIBOLD,
    color:secondaryTextColor,
    alignSelf:'center'
  },
  programImage: {
    height: 101,
    width: '100%',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  suggestedImage: {
    height: 65,
    width: 64,
    borderRadius: 5,
    alignSelf: 'center',
    marginRight: 30,
  },
  middleContainr: {
    marginLeft: 20,
    marginVertical: 20,
  },
  prgrsBarContainer: {
    marginTop: 10,
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
    lineHeight: 20,
    marginTop: 5,
  },
  buttonContainer: {
    borderTopWidth: 1,
    borderTopColor: grayOuterLine,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  btnText: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    color: secondaryTextColor,
    lineHeight: 20,
  },

  roundProfilesContainer: {
    flexDirection: 'row',
  },
  roundProfileImage: {
    width: 21,
    height: 21,
    borderRadius: 50,
    backgroundColor: grayLightBlue,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  roundProfileImageLeftOverLap: {
    marginLeft: -7,
  },
  blankProfileImageText: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 12,
    alignSelf: 'center',
    color: white,
    textTransform: 'capitalize',
  },
  suggestedGroupContainer: {
    marginLeft: 20,
    marginVertical: 20,
    flexDirection: 'row',
  },
});