import React from 'react';
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  DDDDDD,
  grayD9,
  grayE8,
  grayOuterLine,
  secondaryTextColor,
} from '../../theme/Colors';
import {
  BootCampRoundLogo,
  ReactLike,
  ReactSmiley,
  ThreeDots,
} from '../../assets/images';
import Fonts from '../../assets/Fonts';

interface ReactionPostProps {
  name: string;
  imageUri?: string;
  postText: string;
  dateText?: string;
  onPressDots?: () => void;
  onPressComment?: () => void;
  onPressShare?: () => void;
  onPressNext?:()=>void;
}

const ReactionPost: React.FC<ReactionPostProps> = ({
  name,
  imageUri,
  postText,
  dateText,
  onPressDots,
  onPressComment,
  onPressShare,
  onPressNext
}) => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.rowSpaceBetween,
          {marginVertical: 15, marginHorizontal: 15},
        ]}>
        <View style={styles.profileContainer}>
          {imageUri ? (
            <Image style={styles.profiPicBig} source={{uri: 'dfd'}} />
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
            {/* DayMonthText */}
            <Text style={[styles.text13medium]}>{dateText ?? 'day'}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onPressDots}>
          <ThreeDots style={styles.threeDots} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.text14regular, {marginHorizontal: 15}]}>
        {postText}
      </Text>
      <View style={styles.reactionRow}>
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

export default ReactionPost;

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
  },

  profiPicBig: {
    height: 36,
    width: 36,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: grayE8,
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
  reactionRow: {
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
