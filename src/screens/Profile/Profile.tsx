import React from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Fonts from '../../assets/Fonts';
import {
  white,
  DarkBlue,
  grayE8EB,
  LightGrayColor,
  tertiaryTextColor,
  blueTypeTextColor,
  F8F9FB,
  DDDDDD,
} from '../../theme/Colors';
import Header from '../../components/Header';
import ProfileHeader from '../../components/ProfileHeader';
import CustomButton from '../../components/CustomButton';
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';
import {
  BookingIcon,
  EventsIcon,
  ForwardArrow,
  GroupsIcon,
  MyprogramIcon,
  OrdersIcon,
  SubscriptionIcon,
} from '../../assets/images';
import AchievedBadges from '../../components/AchievedBadges';
import LeftRightText from '../../components/LeftRightText';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation() as NavigationProp <any>

  const tabBar = (props: any) => (
    <MaterialTabBar
      {...props}
      activeColor={DarkBlue}
      labelStyle={{fontFamily: Fonts.POPPINS_MEDIUM}}
      indicatorStyle={{backgroundColor: DarkBlue}}
    />
  );

  return (

    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'Profile'}
        containerStyle={[styles.headerStyle]}
        subTitle={'MRCS Boot Camp UK'}
        onPressSettings={() => console.log('ddd')}
      />
      <ProfileHeader
        name="User Name"
        isAdmin
        followersCount="6"
        followingCount="2"
        timeText=". Active Now"
        onPressSubscription={() => navigation.navigate('BadgesScreen',{isAll:false,profileName:'Myaat'})}
      />
      <CustomButton
        buttonStyle={styles.editButton}
        textStyle={styles.editTxt}
        onPress={() => null}
        title="Edit Profile"
        validate={false}
        isTouchableHighLight
      />
      <Tabs.Container
        allowHeaderOverscroll={false}
        headerContainerStyle={
          {
            overflow:'hidden',
            borderBottomWidth:1,
            borderColor:DDDDDD
          }
        }
        renderTabBar={tabBar}
        pagerProps={{scrollEnabled: true}}>
        <Tabs.Tab name="My Activites" label="My Activites">
          <MyActivities />
        </Tabs.Tab>
        <Tabs.Tab name="Profile" label={'Profile'}>
          <ProifleSc />
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};



const MyActivities = () => {
  const navigation = useNavigation() as NavigationProp<any>

  const _goTo = (screenName:string)=> navigation.navigate(screenName)

  const ACTIVITIES = [
    {
      name: 'Groups',
      icon: <GroupsIcon height={20} width={22} style={{alignSelf: 'center'}} />,
      onPress:()=>{
        null
        _goTo('GroupsScreen')
      }
    },
    {
      name: 'Subscriptions',
      icon: (
        <SubscriptionIcon height={20} width={20} style={{alignSelf: 'center'}} />
        
      ),
      onPress:()=>_goTo('Subscriptions')
  
    },
    {
      name: 'Events',
      icon: <EventsIcon height={20} width={20} style={{alignSelf: 'center'}} />,
      onPress:()=>_goTo('Events')
  
    },
    {
      name: 'Bookings',
      icon: <BookingIcon height={20} width={20} style={{alignSelf: 'center'}} />,
      onPress:()=>_goTo('Bookings')
  
    },
    {
      name: 'My Programs',
      icon: (
        <MyprogramIcon height={20} width={20} style={{alignSelf: 'center'}} />
      ),
      onPress:()=>_goTo('MyPrograms')
  
    },
    {
      name: 'Orders',
      icon: <OrdersIcon height={20} width={20} style={{alignSelf: 'center'}} />,
      onPress:()=>_goTo('OrdersScreen')
    },
  ];
  return (
    <View style={styles.tabScreenContanier}>
      <Tabs.FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{backgroundColor: white}}
        ListHeaderComponent={() => (
          <Text
            style={[
              styles.text13RegularLightGray,
              {marginLeft: 20, marginBottom: 20},
            ]}>
            See your info & activity as a member of MRCS Boot Camp UK
          </Text>
        )}
        data={ACTIVITIES}
        renderItem={({item}) => (
          <TouchableOpacity onPress={item.onPress}>
            <View style={styles.activitRow}>
              <View style={styles.actIconView}>
                {item.icon}
                <Text style={styles.acitvitText}>{item.name}</Text>
              </View>
              <ForwardArrow style={{alignSelf: 'center'}} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const ProifleSc = () => {
  const navigation = useNavigation() as NavigationProp<any>
  return (
    <View style={styles.tabScreenContanier}>
      <Tabs.FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{backgroundColor: white}}
        ListHeaderComponent={() => (
          <>
            <Text
              style={[
                styles.text13RegularLightGray,
                {marginLeft: 20, marginBottom: 20},
              ]}>
              Your profile is public. Change this in "Privacy Settings" under
              Edit Profile.
            </Text>
            <LeftRightText
              leftText="About Me"
              onPressAll={()=>null}
              rightText="Edit"
              rightTextStyle={{fontFamily:Fonts.POPPINS_SEMIBOLD}}
              containerStyle={{marginTop: 25,marginHorizontal:20}}
            />
            <Text style={[styles.text13RegularLightGray,{marginTop:5,marginLeft:20}]}>Joined January 2024</Text>
            <View style={styles.writeAboutBox}>
            <Text style={[styles.text13RegularLightGray,{marginTop:5,marginLeft:20}]}>Write a little about yourself, share your interest, add pictures and videos</Text>

            </View>
            <AchievedBadges
              onPressSubscription={()=> navigation.navigate('BadgesTypeScreen',{Badgetype:'Part B Subscription',numberOfMember:77})}
              onPressTester={() => navigation.navigate('BadgesTypeScreen',{Badgetype:'Tester',numberOfMember:3})}
              
               onPessAll={() => navigation.navigate('BadgesScreen',{isAll:true,profileName:'Myaat'})}
            />
          </>
        )}
        data={['']}
        renderItem={() => null}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    color: DarkBlue,
    marginLeft: 10,
    alignSelf: 'center',
  },
  editButton: {
    alignSelf: 'flex-start',
    height: 30,
    paddingHorizontal: 40,
    backgroundColor: DarkBlue,
    marginLeft: 20,
    marginVertical: 15,
  },
  editTxt: {
    color: white,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  tabScreenContanier: {
    // marginHorizontal:20,
    marginVertical: 20,
  },
  text13RegularLightGray: {
    fontSize: 13,
    color: LightGrayColor,
    fontFamily: Fonts.POPPINS_REGULAR,
    width: '80%',
    flexWrap: 'wrap',
  },
  activitRow: {
    flexDirection: 'row',
    height: 35,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  actIconView: {
    flexDirection: 'row',
  },
  acitvitText: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    color: blueTypeTextColor,
    alignSelf: 'center',
    marginLeft: 10,
  },
  writeAboutBox:{
    backgroundColor:F8F9FB,
    height:74,
    marginVertical:20,
    marginHorizontal:20
  }
});
