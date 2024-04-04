import React, {FC, useEffect, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import Fonts from '../../../assets/Fonts';
import {
  white,
  DarkBlue,
  black,
  LightGrayColor,
  secondaryTextColor,
  tertiaryTextColor,
  DDDDDD,
  gray8E,
  grayD9,
  logoutRed,
  grayE8EB,
  F8F9FB,
} from '../../../theme/Colors';
import Header from '../../../components/Header';
import {PlaceholderProfile, WhiteCamerIcon} from '../../../assets/images';
import EditProfileTextInput from '../../../components/EditProfileTextInput/EditProfileTextInput';
import LeftRightText from '../../../components/LeftRightText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ToggleSwitch from 'toggle-switch-react-native';

const EditProfile = () => {
  const [profileName, setProfileName] = useState('user@gmail.com');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [publicToggle, setPublicToggle] = useState(true);
  const [isChanged, setIsChanged] = useState(false);

  const navigation = useNavigation() as NavigationProp<any>;

  const _publicProfileAlert = () => {
    Alert.alert(
      'Set Profile to Private?',
      `Private profiles won't be visible to other members and you won't be able to interact with them.`,
      [
        {
          text: 'CANCEL',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'CONFIRM', onPress: () => setPublicToggle(false)},
      ],
    );
  };
  const _privateProfileAlert = () => {
    Alert.alert(
      'Set Profile to Public?',
      'Public profiles show your information to other members and allow people to interact with you.',
      [
        {
          text: 'CANCEL',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'CONFIRM', onPress: () => setPublicToggle(true)},
      ],
    );
  };

  useEffect(() => {
    setIsChanged(
      profileName !== 'user@gmail.com' ||
      firstName !== '' ||
      lastName !== '' ||
      email !== '' ||
      phone !== '' ||
      !publicToggle
    );
  }, [profileName, firstName, lastName, email, phone, publicToggle]);


  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        type="white"
        titleStyle={styles.headerTitle}
        title="Edit Profile"
        subTitleStyle={{marginLeft: 30}}
        subTitle="MRCS Boot Camp UK"
        postText="Save"
        isPost={isChanged}
        onPost={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}>
        <TouchableOpacity style={styles.profileCameraButton}>
          <PlaceholderProfile />
          <View style={styles.blackCircle}>
            <WhiteCamerIcon style={{alignSelf: 'center'}} />
          </View>
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <EditProfileTextInput
            label="Profile Name"
            labelColor={LightGrayColor}
            value={profileName}
            maxLength={30}
            onChangeText={text => setProfileName(text)}
          />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              justifyContent: 'space-between',
            }}>
            <ThisField text={'This Field is Public'} />
            <Text
              style={[
                styles.text30,
                profileName.length == 30 ? {color: logoutRed} : {},
              ]}>{`${profileName.length}/30`}</Text>
          </View>
          <View style={[styles.fatDivider, {marginTop: 15}]} />
          <LeftRightText
            leftText="About Me"
            onPressAll={() => navigation.navigate('EditContent')}
            rightText="Edit"
            letfTextStyle={{color: secondaryTextColor}}
            rightTextStyle={{
              fontFamily: Fonts.POPPINS_MEDIUM,
              color: secondaryTextColor,
            }}
            containerStyle={{marginTop: 25, marginHorizontal: 20}}
          />
          <ThisField
            text={'This section is Public'}
            style={{marginLeft: 20, marginTop: 5}}
          />
          <View style={styles.writeAboutBox}>
            <Text
              style={[
                styles.text13RegularLightGray,
                {marginTop: 10, marginLeft: 20},
              ]}>
              Write a little about yourself, share your interest, add pictures
              and videos
            </Text>
          </View>
          <View
            style={[styles.fatDivider, {marginTop: 15, marginBottom: 30}]}
          />
          <Text style={[styles.text14SemiPSecondary]}>Overview</Text>
          <Text style={styles.text12RegPSecondary}>
            Update and edit the information you share with the community.
          </Text>
          <Text style={[styles.text14SemiPSecondary, {marginVertical: 20}]}>
            Account
          </Text>
          <EditProfileTextInput
            label="First Name"
            labelColor={LightGrayColor}
            value={firstName}
            onChangeText={text => setFirstName(text)}
            onPressLock={() => console.log('ffdl')}
          />
          <ThisField text={'This Field is Private'} style={{marginLeft: 20}} />

          <EditProfileTextInput
            containerStyle={{marginTop: 20}}
            label="Last Name"
            labelColor={LightGrayColor}
            value={lastName}
            onChangeText={text => setLastName(text)}
            onPressLock={() => console.log(' ln ')}
          />
          <ThisField
            text={'This Field is Private'}
            style={{marginLeft: 20, marginTop: 5}}
          />

          <EditProfileTextInput
            containerStyle={{marginTop: 20}}
            label="Email"
            labelColor={LightGrayColor}
            value={email}
            onChangeText={text => setEmail(text)}
            onPressLock={() => console.log(' ln ')}
          />
          <ThisField
            text={'This Field is Private'}
            style={{marginLeft: 20, marginTop: 5}}
          />
          <EditProfileTextInput
            containerStyle={{marginTop: 20}}
            label="Phone"
            labelColor={LightGrayColor}
            value={phone}
            keyboardType="number-pad"
            maxLength={10}
            onChangeText={text => setPhone(text)}
            onPressLock={() => console.log(' ln ')}
          />
          <ThisField
            text={'This Field is Private'}
            style={{marginLeft: 20, marginTop: 5}}
          />
          <View style={[styles.fatDivider, {marginVertical: 25}]} />
          <Text style={[styles.text14SemiPSecondary]}>Privacy Settings</Text>
          <Text style={styles.text12RegPSecondary}>
            Decide if other members of MRCS Boot Camp UK can view your profile.
          </Text>
          <Text
            style={[styles.text12RegPSecondary, {fontSize: 14, marginTop: 30}]}>
            Public Profile
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.text12RegPSecondary, {marginHorizontal: 0}]}>
              Members can see and interact with you
            </Text>
            <View style={{marginTop: -15}}>
              <ToggleSwitch
                isOn={publicToggle}
                onColor={DarkBlue}
                offColor={DDDDDD}
                size="medium"
                onToggle={isOn => {
                  if (isOn) {
                    _privateProfileAlert();
                  } else {
                    _publicProfileAlert();
                  }
                }}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

interface ThisFieldProps {
  text: string;
  style?: TextStyle;
}
const ThisField: FC<ThisFieldProps> = ({text, style}) => {
  return <Text style={[styles.thisFieldText, style]}>{text}</Text>;
};

export default EditProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    color: DarkBlue,
    marginLeft: 30,
  },
  profileCameraButton: {
    marginTop: 30,
    alignSelf: 'center',
  },
  blackCircle: {
    width: 37,
    height: 37,
    borderRadius: 50,
    backgroundColor: black,
    alignSelf: 'flex-end',
    marginTop: -27,
    justifyContent: 'center',
  },
  formContainer: {
    marginTop: 20,
  },
  thisFieldText: {
    fontSize: 11,
    color: secondaryTextColor,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
  text30: {
    fontSize: 15,
    color: LightGrayColor,
    fontFamily: Fonts.POPPINS_LIGHT,
    marginTop: 5,
  },
  fatDivider: {
    height: 8,
    backgroundColor: grayE8EB,
  },
  writeAboutBox: {
    backgroundColor: F8F9FB,
    height: 74,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 3,
  },
  text13RegularLightGray: {
    fontSize: 13,
    color: LightGrayColor,
    fontFamily: Fonts.POPPINS_REGULAR,
    width: '80%',
    flexWrap: 'wrap',
  },
  text14SemiPSecondary: {
    fontSize: 14,
    color: secondaryTextColor,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    marginHorizontal: 20,
  },
  text12RegPSecondary: {
    fontSize: 12,
    marginTop: 5,
    color: secondaryTextColor,
    fontFamily: Fonts.POPPINS_REGULAR,
    marginHorizontal: 20,
  },
});
