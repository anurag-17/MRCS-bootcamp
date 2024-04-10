import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Fonts from '../../../assets/Fonts';
import {
  white,
  DarkBlue,
  D2D6D9,
  secondaryTextColor,
  LightGrayColor,
  blueTypeTextColor,
} from '../../../theme/Colors';
import Header from '../../../components/Header';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AboutAppIcon, BackArrow} from '../../../assets/images';

const AboutApp = () => {
  const navigation = useNavigation() as NavigationProp<any>;

  const _goTo = (title: string) => {
    navigation.navigate('TermsPolicyWebView', {title: title});
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={Platform.OS == 'android' ? {marginTop: 35} : {}}>
          <BackArrow />
        </TouchableOpacity>

        <Text style={styles.welcomeTxt}>Welcome to our App</Text>
        <Text style={styles.connectTxt}>
          Connect with "MRCS Boot Camp UK" and stay updated on the go with our
          mobile app.
        </Text>
        <AboutAppIcon style={styles.aboutAppIcon} />

        <Text style={styles.text16_Semi_sec}>About the App</Text>
        <Text style={[styles.text14_Reg_sec, {marginVertical: 25}]}>
          The app gives you everything you need to stay in touch with "MRCS Boot
          Camp UK" anytime, anywhere.
        </Text>
        <Text style={[styles.text14_Reg_sec, {marginBottom: 10}]}>
          Easily get in contact with us using real-time chat, and receive push
          notifications with our latest news & offers so you never miss a thing.
        </Text>
        <TouchableOpacity
          style={{alignSelf: 'center', marginVertical: 20}}
          onPress={() => _goTo('Terms Of Service')}>
          <Text>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => _goTo('Privacy Policy')}>
          <Text>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AboutApp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  welcomeTxt: {
    fontSize: 28,
    marginHorizontal: 40,
    marginTop: 20,
    alignSelf: 'center',
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    textAlign: 'center',
    color: blueTypeTextColor,
  },
  connectTxt: {
    marginTop: 20,
    fontSize: 15,
    alignSelf: 'center',
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 20,
    color: LightGrayColor,
  },
  aboutAppIcon: {
    alignSelf: 'center',
    marginVertical: 15,
    marginBottom: 25,
  },
  text14_Reg_sec: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: secondaryTextColor,
  },
  text16_Semi_sec: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: secondaryTextColor,
  },
});
