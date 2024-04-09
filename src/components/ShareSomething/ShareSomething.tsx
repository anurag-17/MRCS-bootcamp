import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {PhotoIcon, PollIcon, VideoIcon} from '../../assets/images';
import Fonts from '../../assets/Fonts';
import { grayE8EB, grayD9, grayF1, LightGrayColor, DarkBlue } from '../../theme/Colors';

interface ShareSomethingProps {
  onPhotoPress?: () => void;
  onVideoPress?: () => void;
  onPollPress?: () => void;
  onPressSomething?: () => void;
}

const ShareSomething: FC<ShareSomethingProps> = ({
  onPhotoPress,
  onVideoPress,
  onPollPress,
  onPressSomething,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Image style={styles.roundImage} />
        <TouchableOpacity style={styles.shareButton} onPress={onPressSomething}>
          <Text style={styles.shareText}>Share something...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={onPhotoPress}>
          <PhotoIcon height={10} width={12} style={styles.icon} />
          <Text style={styles.iconText}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={onVideoPress}>
          <VideoIcon height={10} width={17} style={styles.icon} />
          <Text style={styles.iconText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={onPollPress}>
          <PollIcon height={10} width={12} style={styles.icon} />
          <Text style={styles.iconText}>Poll</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    borderBottomWidth: 8,
    borderColor: grayE8EB,
    borderTopWidth:8
  } as ViewStyle,
  flexRow:{
    flexDirection:'row',
    marginTop:15
  } as ViewStyle,
  roundImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: grayD9,
    alignSelf: 'center',
    marginLeft:20
  } as ImageStyle,
  shareButton: {
    backgroundColor: grayF1,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    borderRadius: 25,
    width: '75%',
    marginLeft:15
  } as ViewStyle,
  shareText: {
    color:LightGrayColor ,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  } as TextStyle,
  iconContainer: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  } as ViewStyle,
  iconButton: {
    flexDirection: 'row',
  } as ViewStyle,
  icon: {
    alignSelf: 'center',
    marginRight: 15,
  } as ImageStyle,
  iconText: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: DarkBlue,
    alignSelf: 'center',
  } as TextStyle,
};

export default ShareSomething;
