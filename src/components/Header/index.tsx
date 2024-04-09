import React from 'react';
import {
  Image,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {DarkBlue, black, grayD9, white} from '../../theme/Colors';
import {
  BootCampRoundLogo,
  Cross,
  EditBoard,
  SettingsWhite,
  Share,
  ShareWhiteIcon,
  ThreeDots,
  ThreeDotsWhite,
  WhiteBackArrow,
} from '../../assets/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import Fonts from '../../assets/Fonts';

interface HeaderProps {
  title?: string;
  subTitle?: string;
  isThreeDots?: boolean;
  isLogo?: boolean;
  isEdit?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
  type: 'blue' | 'white' |'centerTitle';
  imageUri? : string;
  isShare?: boolean;
  onPressShare?:()=>void;
  onPressDots?:()=>void;
  onPost?:()=>void;
  isPost?:boolean;
  isPublish?:boolean,
  profileImageUri?:string;
  isProfileImage?:boolean
  onPressEditBoard?:()=>void
  onPressSettings?:()=>void,
  postText?:string
}

const Header: React.FC<HeaderProps> = ({
  type = 'blue',
  title,
  subTitle,
  isThreeDots,
  isLogo,
  isEdit,
  containerStyle,
  titleStyle,
  subTitleStyle,
  isShare,
  onPressDots,
  onPressShare,
  isPost,
  isPublish,
  postText,
  onPost,
  isProfileImage = false,
  onPressEditBoard,
  onPressSettings
}) => {
  const navigation = useNavigation();
  const route = useRoute()
  
  if (type == 'blue')
    return (
      <View style={[styles.mainContainer, containerStyle]}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{alignSelf: 'center'}}>
            <WhiteBackArrow style={styles.backArrow} />
          </TouchableOpacity>

          {isProfileImage ? (
            <View
              style={{
                marginLeft: 30,
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <View style={styles.profileImage} />
              <View style={{alignSelf: 'center'}}>
                <Text style={[styles.title, titleStyle]}>{title}</Text>
                <Text style={[styles.mrcsText, subTitleStyle]}>{subTitle}</Text>
              </View>
            </View>
          ) : (
            <View style={{marginLeft: 30, alignSelf: 'center'}}>
              <Text style={[styles.title, titleStyle]}>{title}</Text>
              <Text style={styles.mrcsText}>{subTitle}</Text>
            </View>
          )}
        </View>
        {isLogo && (
          <BootCampRoundLogo style={{alignSelf: 'center', marginLeft: 20}} />
        )}
        {isShare && (
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={onPressShare}>
            <ShareWhiteIcon
              height={16}
              width={16}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        )}
        <View style={{alignSelf: 'center', flexDirection: 'row'}}>
          {onPressEditBoard && (
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={onPressEditBoard}>
              <Image
                source={EditBoard}
                style={{
                  alignSelf: 'center',
                  height: 20,
                  width: 20,
                  marginRight: 30,
                }}
              />
            </TouchableOpacity>
          )}
          {isThreeDots && (
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={onPressDots}>
              <ThreeDotsWhite
                fill={'white'}
                height={16}
                width={16}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
          )}
          {onPressSettings && (
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={onPressSettings}>
              <SettingsWhite
                fill={'white'}
                height={16}
                width={16}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
          )}
          {onPost && (
            <TouchableOpacity
              disabled={!isPost}
              style={{alignSelf: 'center'}}
              onPress={onPost}>
              <Text style={{color: 'white', fontFamily: Fonts.POPPINS_BOLD}}>
                {postText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  else if (type == 'centerTitle') {
    return (
      <View style={[styles.mainContainer, containerStyle]}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{alignSelf: 'center'}}>
            <WhiteBackArrow style={styles.backArrow} />
          </TouchableOpacity>
            <View style={styles.imageUri} />
            <Text style={[styles.title, titleStyle]}>{title}</Text>
          </View>
          {onPressSettings && (
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={onPressSettings}>
              <SettingsWhite
                fill={'white'}
                height={16}
                width={16}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
          )}
      </View>
    );
  } else {
    return (
      <View style={[styles.whiteMainContainer, containerStyle]}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => navigation.goBack()}>
            <Cross height={14} style={styles.backArrow} />
          </TouchableOpacity>
          {isLogo && (
            <BootCampRoundLogo style={{alignSelf: 'center', marginLeft: 20}} />
          )}

          {subTitle ? (
            <View>
              <Text style={[styles.title, {color: black}, titleStyle]}>
                {title}
              </Text>
              <Text style={[styles.mrcsText, {color: black}, subTitleStyle]}>
                {subTitle}
              </Text>
            </View>
          ) : (
            <Text style={[styles.title, {color: black}, titleStyle]}>
              {title}
            </Text>
          )}
        </View>

        {isShare && (
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={onPressShare}>
            <Share height={16} width={16} style={{alignSelf: 'center'}} />
          </TouchableOpacity>
        )}
        {isThreeDots && (
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={onPressDots}>
            <ThreeDotsWhite
              height={16}
              width={16}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        )}
        {onPost && (
          <TouchableOpacity
            disabled={!isPost}
            style={{alignSelf: 'center'}}
            onPress={onPost}>
            <Text
              style={[
                isPost ? {color: DarkBlue} : {color: grayD9},
                {fontFamily: Fonts.POPPINS_BOLD},
              ]}>
              {isPublish ? 'Publish' : postText ?? 'Post'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: DarkBlue,
    height: 50,
  },
  whiteMainContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: white,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backArrow: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  title: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    color: white,
  },
  imageUri:{
    height:31,
    width:31,
    borderRadius:50,
    alignSelf:'center',
    marginLeft:20,
    backgroundColor:grayD9
  },
  mrcsText: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 14,
    color: white,
  },
  profileImage:{
    marginRight:10,
    backgroundColor:grayD9,
    borderRadius:50,
    justifyContent:'center',
    height:44,
    width:44
  }
});

export default Header;
