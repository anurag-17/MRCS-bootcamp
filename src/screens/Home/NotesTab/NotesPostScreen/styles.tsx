import {Platform, StyleSheet} from 'react-native';

import {
  DarkBlue,
  black,
  gray8E,
  grayD9,
  grayE8EB,
  quarternaryTextColor,
  tertiaryTextColor,
  text222F38,
  white,
} from '../../../../theme/Colors';
import Fonts from '../../../../assets/Fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },
  postContainer: {
    paddingHorizontal: 20,
    borderBottomColor: grayE8EB,
    borderBottomWidth: 8,
  },
  topicText: {
    color: text222F38,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 20,
    marginTop: 20,
    lineHeight: 22,
  },
  exclusiveButton: {
    color: tertiaryTextColor,
    backgroundColor: tertiaryTextColor,
    height: 24,
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: 69,
  },
  exclusiveText: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: white,
    fontSize: 12,
    alignSelf: 'center',
  },
  dateText: {
    color: gray8E,
    fontSize: 13,
    fontFamily: Fonts.POPPINS_REGULAR,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  borderLeftView: {
    marginTop: 25,
    borderLeftColor: DarkBlue,
    borderLeftWidth: 4,
    paddingLeft: 12,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  paraText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 14,
    color: black,
    alignSelf: 'center',
  },
  bulletListContainer: {
    marginTop: 20,
  },
  pointsView: {
    flexDirection: 'row',
    marginTop: 10,
  },

  forwardIcon: {
    marginRight: 10,
    alignSelf: 'center',
  },
  subjectText: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 15,
    marginTop: 30,
    color: tertiaryTextColor,
    alignSelf: 'flex-start',
  },
  br: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: grayE8EB,
    marginVertical: 20,
  },
  bottomView: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: grayE8EB,
    paddingTop: 20,
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  eyeIconRow: {
    flexDirection: 'row',
    marginRight: 25,
  },
  chatIconRow: {
    flexDirection: 'row',
  },
  icon: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  countText: {
    color: quarternaryTextColor,
    fontSize: 11,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  thoughtsIcons: {
    alignSelf: 'center',
    marginTop: 30,
  },
  shareThoughts: {
    fontFamily: Fonts.WIX_SEMI_BOLD,
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
  },
  beTheFirst: {
    fontFamily: Fonts.WIX_MEDIUM,
    fontSize: 14,
    color: 'black',
    alignSelf: 'center',
  },
  commentBox: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: grayE8EB,
    shadowColor: 'rgba(0,0,0,0.25)',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.5,
    // shadowRadius: 1,
    // elevation: 1,
    marginTop: 50,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  profileBox: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: grayD9,
    justifyContent: 'center',
  },
  singleletter: {
    color: white,
    fontSize: 13,
    fontFamily: Fonts.WIX_MEDIUM,
    alignSelf: 'center',
  },
  commentInput: {
    alignSelf: 'center',
    color: black,
    fontSize: 14,
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    flex: 1,
  },
});
