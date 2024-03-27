import React from 'react';
import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  DarkBlue,
  LightGrayColor,
  grayE8EB,
  white,
} from '../../../../theme/Colors';
import Header from '../../../../components/Header';
import ProfileHeader from '../../../../components/ProfileHeader';
import CustomButton from '../../../../components/CustomButton';
import Fonts from '../../../../assets/Fonts';
import AchievedBadges from '../../../../components/AchievedBadges';
import LeftRightText from '../../../../components/LeftRightText';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const MeberProfile = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={'Member Profile'}
        containerStyle={styles.headerStyle}
        subTitle={'MRCS Boot Camp UK'}
        isThreeDots={true}
        onPressDots={() => console.log('workign ...')}
      />

      <FlatList
        ListHeaderComponent={() => (
          <>
            <ProfileHeader
              name="Myat"
              followersCount="6"
              followingCount="2"
              timeText="Last seen May 30, 2023"
              onPressSubscription={() => null}
            />
            {/* Msg Follow Btn Row */}
            <View style={styles.buttonRow}>
              <CustomButton
                buttonStyle={styles.msgButton}
                onPress={() => navigation.navigate('MemberChat',{name:'Myat'})}
                textStyle={styles.msgTxt}
                title="Message"
                validate={false}
                isTouchableHighLight
              />
              <CustomButton
                buttonStyle={styles.followButton}
                textStyle={styles.followTxt}
                onPress={() => null}
                title="Follow"
                validate={false}
                isTouchableHighLight
              />
            </View>
            <AchievedBadges
              onPressSubscription={() => null}
              onPressTester={() => null}
              onPessAll={() => navigation.navigate('BadgesScreen',{isAll:true})}
            />
            {/* Fourm Post */}
            <LeftRightText
              leftText="Forum Posts"
              onPressAll={()=>null}
              rightText="See All"
              containerStyle={{marginTop: 20, marginHorizontal: 20}}
            />
          </>
        )}
        data={[1, 2, 3, 4, 5]}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.forumPostContainer}>
            <TouchableOpacity activeOpacity={0.4} onPress={()=> null}>
            <Text style={styles.postTitle}>Boot Camp Training Room</Text>
            <Text style={styles.postRegularTxt}>
              Topic: Boot Camp Training Room
            </Text>
            <Text style={styles.postRegularTxt}>Time: Mar 2, 2024,</Text>
            <Text
              style={[styles.postRegularTxt, {marginTop: 5, marginBottom: 10}]}>
              3w ago
            </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

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
  buttonRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  msgButton: {
    alignSelf: 'center',
    height: 34,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: DarkBlue,
    marginRight: 10,
    flex: 1,
  },
  msgTxt: {
    color: DarkBlue,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  followButton: {
    alignSelf: 'center',
    height: 34,
    backgroundColor: DarkBlue,
    marginRight: 10,
    flex: 1,
  },
  followTxt: {
    color: white,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  forumPostContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: grayE8EB,
  },
  postRegularTxt: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 14,
    color: LightGrayColor,
  },
  postTitle: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    color: DarkBlue,
    marginBottom:5
  },
});
export default MeberProfile;
