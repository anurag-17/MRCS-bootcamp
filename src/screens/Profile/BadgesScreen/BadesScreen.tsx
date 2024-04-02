import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DarkBlue,
  LightGrayColor,
  LightPrimaryTextColor,
  grayD9,
  grayE8EB,
  green00A,
  knowledgeBlue,
  skillGreen,
  white,
} from '../../../theme/Colors';
import Header from '../../../components/Header';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import IconButton from '../../../components/IconButton';
import Fonts from '../../../assets/Fonts';

const BadgesScreen = () => {
  const navigation = useNavigation() as NavigationProp<any>;
  const route = useRoute();
  const {isAll, profileName} = route.params;

  const MemberBadges = () => {
    return (
      <>
        <View style={[styles.badgeContainer,]}>
          <Text
            style={{
              fontFamily: Fonts.POPPINS_SEMIBOLD,
              color: LightPrimaryTextColor,
              fontSize: 14,
              marginTop:20,
              marginVertical:15,
              marginHorizontal:20,
            }}>{`${profileName} has 2 bages`}</Text>
        </View>
        <View style={styles.badgeContainer}>
          <TouchableOpacity style={styles.buttonOuter} onPress={() => navigation.navigate('BadgesTypeScreen',{Badgetype:'Part B Subscription',numberOfMember:77})}>
            <IconButton
              isIcon
              title={'Part B Subscription'}
              isStar={true}
              btnStyle={{width: '42%'}}
            />
            <View style={{flexDirection: 'row'}}>
              {[1, 2].map((item, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      styles.roundImage,
                      index !== 0 && {marginLeft: -7},
                    ]}>
                    <Text style={styles.singleChar}>A</Text>
                  </View>
                );
              })}
              <Text style={styles.badgesText}>{`2 badge holders`}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.badgeContainer}>
          <TouchableOpacity style={styles.buttonOuter} onPress={() => navigation.navigate('BadgesTypeScreen',{Badgetype:'Tester',numberOfMember:3})}>
            <IconButton
              title={'Tester'}
              isStar={false}
              isIcon
              btnStyle={{width: '22%'}}
            />
            <View style={{flexDirection: 'row'}}>
              {[1, 2].map((item, index) => {
                return (
                  <View
                  key={index}
                    style={[
                      styles.roundImage,
                      index !== 0 && {marginLeft: -7},
                    ]}>
                    <Text style={styles.singleChar}>A</Text>
                  </View>
                );
              })}
              <Text style={styles.badgesText}>{`2 badge holders`}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={!isAll && profileName ? `${profileName} Badges` : 'Badges'}
        containerStyle={styles.headerStyle}
        subTitle={'MRCS Boot Camp UK'}
      />
      {!isAll && profileName ? (
        MemberBadges()
      ) : (
        <>
          <View style={styles.badgeContainer}>
            <TouchableOpacity style={styles.buttonOuter} onPress={() => navigation.navigate('BadgesTypeScreen',{Badgetype:'Part B Subscription',numberOfMember:77})}>
              <IconButton
                isIcon
                title={'Part B Subscription'}
                isStar={true}
                btnStyle={{width: '42%'}}
              />
              <View style={{flexDirection: 'row'}}>
                {[1, 2].map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={[
                        styles.roundImage,
                        index !== 0 && {marginLeft: -7},
                      ]}>
                      <Text style={styles.singleChar}>A</Text>
                    </View>
                  );
                })}
                <Text style={styles.badgesText}>{`2 badge holders`}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.badgeContainer}>
            <TouchableOpacity style={styles.buttonOuter} onPress={() => navigation.navigate('BadgesTypeScreen',{Badgetype:'Knowledge March 2024',numberOfMember:20})}>
              <IconButton
                title={'Knowledge March 2024'}
                isStar={false}
                isIcon={false}
                btnStyle={{width: '48%', height:26, backgroundColor: knowledgeBlue}}
              />
              <View style={{flexDirection: 'row'}}>
                {[1, 2].map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={[
                        styles.roundImage,
                        index !== 0 && {marginLeft: -7},
                      ]}>
                      <Text style={styles.singleChar}>A</Text>
                    </View>
                  );
                })}
                <Text style={styles.badgesText}>{`2 badge holders`}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.badgeContainer}>
            <TouchableOpacity style={styles.buttonOuter} onPress={() => navigation.navigate('BadgesTypeScreen',{Badgetype:'Skills April 2024',numberOfMember:20})}>
              <IconButton
                title={'Skills April 2024'}
                isStar={false}
                isIcon={false}
                btnStyle={{width: '35%', backgroundColor: skillGreen}}
              />
              <View style={{flexDirection: 'row'}}>
                {[1, 2].map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={[
                        styles.roundImage,
                        index !== 0 && {marginLeft: -7},
                      ]}>
                      <Text style={styles.singleChar}>A</Text>
                    </View>
                  );
                })}
                <Text style={styles.badgesText}>{`2 badge holders`}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.badgeContainer}>
            <TouchableOpacity style={styles.buttonOuter} onPress={() => navigation.navigate('BadgesTypeScreen',{Badgetype:'Tester',numberOfMember:3})}>
              <IconButton
                title={'Tester'}
                isStar={false}
                isIcon
                btnStyle={{width: '20%'}}
              />
              <View style={{flexDirection: 'row'}}>
                {[1, 2].map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={[
                        styles.roundImage,
                        index !== 0 && {marginLeft: -7},
                      ]}>
                      <Text style={styles.singleChar}>A</Text>
                    </View>
                  );
                })}
                <Text style={styles.badgesText}>{`2 badge holders`}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default BadgesScreen;

const styles = StyleSheet.create({
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
  buttonOuter: {
    marginTop: 20,
    justifyContent: 'space-between',
    height: 60,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  badgesText: {
    color: LightGrayColor,
    alignSelf: 'center',
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 12,
    marginLeft: 10,
  },
  roundImage: {
    height: 21,
    width: 21,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: grayD9,
  },
  singleChar: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 13,
  },
  badgeContainer: {
    borderBottomWidth: 5,
    borderColor: grayE8EB,
  },
});
