import React from 'react';
import Header from '../../components/Header';
import {
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Alert,
} from 'react-native';
import Fonts from '../../assets/Fonts';
import {
  white,
  DarkBlue,
  grayE8EB,
  secondaryTextColor,
  blueTypeTextColor,
  DDDDDD,
  logoutRed,
} from '../../theme/Colors';
import {ForwardArrow, LogoutIcon} from '../../assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface settingsInterface {
  name: string;
  onPress: () => void;
}

const AppSettings = () => {
  const navigation = useNavigation() as NavigationProp<any>;

  const _goTo = (screenName: string) => navigation.navigate(screenName);

  const SETTINGS: settingsInterface[] = [
    {
      name: 'App language',
      onPress: () => null,
    },
    {
      name: 'Notifictions settings',

      onPress: () => navigation.navigate('NotificationSettings'),
    },
    {
      name: 'Saved Credit Cards',

      onPress: () => navigation.navigate('SavedCreditCard'),
    },
    {
      name: 'App display',
      onPress: () => null,
    },
    {
      name: 'Delete you account',
      onPress: () => null,
    },
    {
      name: 'About the app',
      onPress: () => null,
    },
  ];

  const _renderSettings = ({item,index}: {item: settingsInterface,index:number}) => {
    return (
      <TouchableOpacity onPress={item.onPress} key={index}>
        <View style={styles.settingRow}>
          <Text style={styles.settingName}>{item.name}</Text>
          <ForwardArrow style={{alignSelf: 'center'}} />
        </View>
      </TouchableOpacity>
    );
  };

  const _logoutAlert = ()=>{
    Alert.alert('Are You Sure You Want to Log Out?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'LOG OUT', onPress: () => console.log('OK Pressed')},
    ]);
  }

  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'App Settings'}
        titleStyle={styles.settingsTitle}
        containerStyle={styles.headerStyle}
      />
      <View style={styles.innerContainer}>
        <View style={styles.settingsContainer}>
          <Text
            style={[
              styles.text16SemiPop16,
              {marginVertical: 20, marginLeft: 20},
            ]}>
            Settings
          </Text>
          {SETTINGS.map((item, index) => _renderSettings({item,index}))}
        </View>
        <TouchableOpacity style={styles.bottomButton} onPress={_logoutAlert}>
            <View style={styles.logoutView}>
              <LogoutIcon style={{alignSelf:'center'}}/>
              <Text style={styles.logoutText}>Log Out</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppSettings;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  settingsTitle: {
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text16SemiPop16: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: secondaryTextColor,
  },
  settingsContainer: {
    borderBottomWidth: 8,
    borderColor: grayE8EB,
    paddingBottom: 10,
  },
  settingRow: {
    flexDirection: 'row',
    height: 35,
    justifyContent: 'space-between',
    marginBottom: 7,
    marginHorizontal: 20,
  },
  settingName: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 14,
    color: secondaryTextColor,
    alignSelf: 'center',
  },
  bottomButton: {
    borderTopWidth: 1,
    borderTopColor: DDDDDD,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20
  },
  logoutView: {
    flexDirection: 'row',
  },
  logoutText: {
    color: logoutRed,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    marginLeft: 7,
  },
});
