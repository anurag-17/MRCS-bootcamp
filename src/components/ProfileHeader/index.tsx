import React, {FC} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Fonts from '../../assets/Fonts';
import {DarkBlue, LightGrayColor, green00A} from '../../theme/Colors';
import {PlaceholderProfile} from '../../assets/images';
import IconButton from '../IconButton';

interface ProfileHeaderProps {
  name: string;
  imageUri?: string;
  isAdmin?: boolean;
  timeText: string;
  followersCount: string;
  followingCount: string;
  onPressSubscription?:()=>void;
  onPressFollowers:()=>void;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({
  name,
  imageUri,
  isAdmin = false,
  timeText,
  followersCount,
  followingCount,
  onPressSubscription,
  onPressFollowers
}) => {
  return (
    <View style={styles.container}>
      {/* Name Row */}
      <View style={styles.nameRow}>
        <View>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.memberText}>
            {isAdmin ? 'Admin ' : 'Member . '}
            <Text style={styles.timeText}>{timeText}</Text>
          </Text>
        </View>

        <View>
          <PlaceholderProfile height={85} width={85} />
          <View style={styles.greenDot} />
        </View>
      </View>
      {/* Buttons rows */}
      <TouchableOpacity  style={[styles.flexRow,]} onPress={onPressSubscription}>
        <IconButton
          isIcon
          title={'Part B Subscription'}
          isStar={true}
          btnStyle={{marginRight: 20}}
        />
        <IconButton isIcon title={'Tester'} isStar={false} />
      </TouchableOpacity>
      {/* Follower Following Row */}
      <TouchableOpacity style={[styles.flexRow,{marginTop:10}]} onPress={onPressFollowers}>
        <Text style={[styles.text13Semi, {marginRight: 15}]}>
          {followersCount}
          <Text style={styles.text13Regular}> Followers</Text>
        </Text>
        <Text style={styles.text13Semi}>
          {followingCount}
          <Text style={styles.text13Regular}> Followings</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  memberText: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: DarkBlue,
    flexDirection: 'row',
  },
  timeText: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: LightGrayColor,
  },
  nameText: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: DarkBlue,
  },
  greenDot: {
    backgroundColor: green00A,
    height: 23,
    width: 23,
    borderRadius: 50,
    marginTop: -22,
    marginRight: 8,
    alignSelf: 'flex-end',
  },
  flexRow: {
    flexDirection: 'row',
  },
  text13Regular: {
    fontSize: 13,
    color: DarkBlue,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  text13Semi: {
    fontSize: 13,
    color: DarkBlue,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
});
