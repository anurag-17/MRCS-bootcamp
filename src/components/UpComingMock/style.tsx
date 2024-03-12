import {Platform, StyleSheet} from 'react-native';
import Fonts from '../../assets/Fonts';
import {LightGrayColor, LightPrimaryTextColor, black, grayOuterLine, secondaryTextColor} from '../../theme/Colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderColor:grayOuterLine,
    borderWidth:1,
    borderRadius:4,
    justifyContent:'space-between',
    height:218
  },
  upperContainer:{
    flexDirection:'row',
    marginTop:15,
  },
  upperLeftSide:{
    marginRight:10,
    marginLeft:15,
  },
  dayText:{
    fontSize:24,
    color:secondaryTextColor,
    fontFamily:Fonts.WIX_REGULAR
  },
  monthText:{
    fontSize:14,
    color:secondaryTextColor,
    fontFamily:Fonts.WIX_REGULAR
  },
  upperRightSide:{
    justifyContent:'center',
    alignItems:'center',
  },
  bootCampOnlineText:{
    fontSize:18,
    color:secondaryTextColor,
    fontFamily:Fonts.WIX_BOLD,
    width:'80%',
    alignSelf:'center',
    marginTop:4
  },
  dateTimeStatusText:{
    fontSize:14,
    color:LightGrayColor,
    fontFamily:Fonts.WIX_SEMI_BOLD,
    width:'80%',
    alignSelf:'center',
    marginTop:4
  },
  
  lowerContainer:{
    borderTopWidth:1,
    borderTopColor:grayOuterLine,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:50,
    paddingVertical:10
  },
  shareContainer:{
    flexDirection:'row'
  },
  shareIcon:{
    alignSelf:'center',
    width:10,
    height:10,
  },
  shareText:{
    fontSize:14,
    color:secondaryTextColor,
    fontFamily:Fonts.WIX_REGULAR,
    alignSelf:'center',
    marginLeft:5

  },
  verticalLine:{
    backgroundColor:grayOuterLine,
    height:31,
    width:1
  },
  detailsText:{
    fontSize:14,
    color:secondaryTextColor,
    fontFamily:Fonts.WIX_SEMI_BOLD,
    alignSelf:'center'
  }
});
