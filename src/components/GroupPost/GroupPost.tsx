import React from 'react';
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  DDDDDD,
  LightGrayColor,
  blueDAE9FE,
  blueTypeTextColor,
  grayD9,
  grayE8,
  grayE8EB,
  grayOuterLine,
  orangeFD3D30,
  secondaryTextColor,
} from '../../theme/Colors';
import {
  BootCampRoundLogo,
  PinnedPostIcon,
  ReactLike,
  ReactSmiley,
  ThreeDots,
} from '../../assets/images';
import Fonts from '../../assets/Fonts';
import IconButton from '../IconButton';

interface GroupPostProps {
  name: string;
  imageUri?: string;
  postText: string;
  dateText?: string;
  onPressDots?: () => void;
  onPressComment?: () => void;
  onPressShare?: () => void;
  onPressNext?:()=>void;
  isPinned?:boolean;
  isSeeMore?:boolean;
  onPressSeeMore?:()=>void,
  isSubscription?:boolean
}

const GroupPost: React.FC<GroupPostProps> = ({
  name,
  imageUri,
  postText,
  dateText,
  onPressDots,
  onPressComment,
  onPressShare,
  onPressNext,
  isPinned,
  isSeeMore,
  onPressSeeMore,
  isSubscription
}) => {
  return (
    <View style={styles.mainContainer}>
      {isPinned &&
      <View style={styles.pinnedRow}>
        <PinnedPostIcon />
        <Text style={styles.pinText}>Pinned</Text>
        </View>
        }
      <View
        style={[
          styles.rowSpaceBetween,
          {marginVertical: 15, marginHorizontal: 15},
        ]}>

        <View style={styles.profileContainer}>
          {imageUri ? (
            <Image style={styles.profiPicBig} source={{uri: imageUri}} />
          ) : (
            <BootCampRoundLogo
              height={36}
              width={36}
              style={{alignSelf: 'center', marginRight: 15}}
            />
          )}
          <View>
            {/* NameText */}
            <Text style={[styles.recentText, {marginVertical: 0}]}>
              {name ?? 'name'}
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',}}>
              {isSubscription &&
              <>
              <IconButton isIcon isStar title='Part B Subscription' />
              <IconButton isIcon={false} title='+1' isStar={false} btnStyle={styles.subScripionBtn} titleStyle={{color:LightGrayColor}}/>
              </>
              }
              {/* DayMonthText */}
              <Text style={[styles.text13medium,{alignSelf:'center'}]}>{dateText ?? 'day'}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onPressDots}>
          <ThreeDots style={styles.threeDots} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.text14regular, {marginHorizontal: 15}]}>
        {postText}
      </Text>
      {isSeeMore &&
      <View style={{marginHorizontal:15}}>
      <Text style={{marginBottom:15}}>...</Text>
      <TouchableOpacity onPress={onPressSeeMore}>
      <Text style={styles.seeMore}>See More</Text>
      </TouchableOpacity>
      </View>
      }
      <View style={styles.GroupRow}>
        <TouchableOpacity style={styles.rectionButton}>
          <ReactLike
            width={16}
            height={16}
            style={{alignSelf: 'center', marginRight: 5}}
          />
          <Text style={[styles.text14regular,{alignSelf:'center'}]}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectionButton}>
          <ReactSmiley
            width={16}
            height={16}
            style={{alignSelf: 'center', marginRight: 5}}
          />
          <Text style={[styles.text14regular,{alignSelf:'center'}]}>+</Text>
        </TouchableOpacity>
      </View>
      
      <Pressable style={[styles.rowSpaceBetween, {marginTop: 10,marginHorizontal:15}]} onPress={onPressNext}>
        <TouchableOpacity onPress={onPressComment}>
          <Text style={styles.text14semi}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressShare}>
          <Text style={styles.text14semi}>Share</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};

export default GroupPost;

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 20,
    borderBottomWidth:8,
    borderBottomColor:grayE8EB
  },
  profileContainer: {
    flexDirection: 'row',
  },

  pinnedRow:{
    flexDirection:'row',
    marginTop:15,
    marginHorizontal:15,
    borderBottomWidth:1,
    borderBottomColor:grayE8,
    paddingBottom:10
    // height:40
  },
  pinText:{
    color:orangeFD3D30,
    fontSize:14,
    fontFamily:Fonts.POPPINS_SEMIBOLD,
    marginLeft:10
  },
  profiPicBig: {
    height: 36,
    width: 36,
    borderRadius: 50,
    alignSelf: 'center',
    borderWidth:1,
    marginRight: 15,
  },
  threeDots: {
    width: 3.6,
    height: 16,
    alignSelf: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentText: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    color: secondaryTextColor,
    marginVertical: 14,
  },
  text13medium: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 13,
    color: secondaryTextColor,
  },
  subScripionBtn:{width:32,justifyContent:'center',alignItems:'center',padding:0,paddingHorizontal:0,backgroundColor:blueDAE9FE,marginHorizontal:10},
  text14regular: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 14,
    color: secondaryTextColor,
  },
  text14semi: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    color: secondaryTextColor,
  },
  seeMore:{
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 16,
    color: blueTypeTextColor,
  },
  GroupRow: {
    borderBottomWidth: 1,
    borderBottomColor: DDDDDD,
    paddingBottom: 10,
    flexDirection: 'row',
    marginHorizontal: 15,
    flexWrap: 'wrap',
  },
  rectionButton: {
    borderColor: grayOuterLine,
    marginTop: 10,
    borderRadius: 50,
    height:28,
    width:60,
    justifyContent:'center',
    borderWidth: 1,
    flexDirection: 'row',
    marginRight: 15,
  },
});
