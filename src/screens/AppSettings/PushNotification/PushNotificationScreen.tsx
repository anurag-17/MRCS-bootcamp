import React, { useState } from 'react';
import {StyleSheet, Platform, View, StatusBar, Text, SectionList, FlatList, Image, TouchableHighlight} from 'react-native';
import Fonts from '../../../assets/Fonts';
import {
  white,
  DarkBlue,
  secondaryTextColor,
  LightGrayColor,
  blueTypeTextColor,
  LightBlueADD,
  grayE8EB,
  DDDDDD,
  gray8E,
  grayD9,
  redFC3D30,
} from '../../../theme/Colors';
import Header from '../../../components/Header';
import CustomButton from '../../../components/CustomButton';
import { Switch,Dialog, } from 'react-native-ui-lib';
import { NotifciationIcon } from '../../../assets/images';
import Modal from 'react-native-modal';
import CustomModal from '../../../components/CustomModal/CustomModal';

interface DataItem {
    id: string;
    name: string;
    status: boolean;
  }
  
  interface DataSection {
    title: string;
    data: DataItem[];
  }
  
  const DATA: DataSection[] = [
    {
      title: 'Blog',
      data: [
        { id: '1', name: 'Comments on posts', status: true },
        { id: '2', name: 'Posts or comments are liked', status: true },
      ],
    },
    {
      title: 'Events',
      data: [
        { id: '30', name: 'Comment on dicussion post', status: true },
        { id: '40', name: 'Evnet is canceled', status: true },
        { id: '50', name: 'Event is updated', status: true },
        { id: '60', name: 'New posts in discussion', status: true },
        { id: '70', name: 'Reaction to posts or comment', status: true },
        { id: '80', name: 'Reminder before event starts', status: true },

      ],
    },
    {
      title: 'Forum',
      data: [
        { id: '3', name: 'Comments or replies', status: true },
        { id: '5', name: 'Likes or reactions', status: true },
        { id: '6', name: 'New posts', status: true },
      ],
    },
    {
      title: 'General',
      data: [
        { id: '99', name: 'Announcements', status: true },
        { id: '509', name: 'Updates and reminders', status: true },
      ],
    },
    {
      title: 'Inbox',
      data: [{ id: '7', name: 'New Messages', status: true }],
    },
    {
      title: 'Members',
      data: [
        { id: '8', name: 'Badge assigned', status: true },
        { id: '80999', name: 'New followers', status: true }

      ],
    },
    {
      title: 'Online Programs',
      data: [
        { id: '9', name: 'Status changes', status: true },
        { id: '10', name: 'Updates and reminders', status: true },
      ],
    },
    {
      title: 'Social Groups',
      data: [
        { id: '11', name: 'Comments on posts', status: true },
        { id: '12', name: 'Group created or status changes', status: true },
        { id: '13', name: 'Group info is updated', status: true },
        { id: '14', name: 'Group membership requests', status: true },
        { id: '15', name: 'New members join', status: true },
        { id: '16', name: 'New posts', status: true },
        { id: '17', name: 'Weekly summary of posts', status: true },
      ],
    },
  ];


  const notifArray = [
    '8 hours',
    '1 week',
    '1 month',
    '1 year',
    'Permanently',
  ];

const PushNotificationScreen = () => {

    const [data, setData] = useState<DataSection[]>(DATA);
    const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleSwitch = (sectionIndex: number, itemIndex: number) => {
    const newData = [...data];
    console.log("sectionIndex : ",sectionIndex)
    console.log('itemIndex : ',)
    newData[sectionIndex].data[itemIndex].status = !newData[sectionIndex].data[itemIndex].status;
    setData(newData);
  };

  const [isPushNotification , setIsPushNotification  ] = useState(true);
  const renderItem = ({ item, index, section }: { item: DataItem; index: number; section: any }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'space-between',
          alignItems: 'center',

        }}>
        <Text style={styles.text13LightSecondary}>{item.name}</Text>

        <Switch
          value={item.status}
          onColor={DarkBlue}
          offColor={'rgba(0,33,71,0.1)'}
          onValueChange={() => toggleSwitch(data.findIndex(sectionItem => sectionItem === section), index)}
        />
      </View>
    );
  };

  const _renderItem = ({item, index}: {item: string; index: number}) => {
    return (
      <TouchableHighlight
        underlayColor={grayE8EB}
        onPress={() => {
          setIsModalVisible(false);
        }}
        style={{height:45,justifyContent:'center',paddingLeft:20}}
        >
        <Text style={[styles.itemBtnText,item === notifArray[4]&&{color:redFC3D30}]}>{item}</Text>
      </TouchableHighlight>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={'Notification Settings'}
        containerStyle={styles.headerStyle}
        subTitle={'MRCS Boot Camp UK'}
      />

      <FlatList
        data={data}
        ListHeaderComponent={() => (
          <>
            <View style={styles.allowPushView}>
              <Image
                source={NotifciationIcon}
                style={{height: 20, width: 20}}
              />
              <View style={{width: '70%'}}>
                <Text style={styles.text14SemiP}>Allow Push Notifications</Text>
                <Text style={[styles.text13LightSecondary, {}]}>
                  Choose which notifications you'd like to receive on your
                  mobile device.
                </Text>
              </View>
              <Switch
                style={{alignSelf: 'center'}}
                onColor={DarkBlue}
                offColor={'rgba(0,33,71,0.1)'}
                value={isPushNotification}
                onPressIn={() => setIsModalVisible(true)}
                onValueChange={() => {
                  // setIsPushNotification(!isPushNotification)
                }}
              />
            </View>
            <View style={styles.fatDivider} />
          </>
        )}
        keyExtractor={(item, index) => item.title + index.toString()}
        renderItem={({item, index}) => {
          const section = item;
          return (
            <View style={styles.sectionBox}>
              <Text style={styles.text14SemiP}>{item.title}</Text>

              <FlatList
                data={item.data}
                keyExtractor={(item, index) => item.id + index.toString()}
                renderItem={({item, index}) =>
                  renderItem({item, index, section})
                }
                showsVerticalScrollIndicator={false}
              />
            </View>
          );
        }}
        ListFooterComponent={() => <View style={{marginBottom: 60}} />}
        showsVerticalScrollIndicator={false}
      />
      <CustomModal
        isVisible={isModalVisible}
        title={'Mute Notification for ...'}
        toggleVisible={() => setIsModalVisible(!isModalVisible)}>
        <FlatList data={notifArray} renderItem={_renderItem} />
      </CustomModal>
    </View>
  );
};


export default PushNotificationScreen;

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
  subscribeBox: {
    backgroundColor: LightBlueADD,
    height: 157,
    padding: 20,
    marginBottom: 10,
  },
  subsButton: {
    alignSelf: 'flex-start',
    height: 34,
    paddingHorizontal: 20,
    backgroundColor: DarkBlue,
    marginTop: -5,
    marginLeft: 20,
  },
  subsTxt: {
    color: white,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  text14SemiP: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: secondaryTextColor,
  },
  text14RegularP: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: LightGrayColor,
  },
  text13SemiSecondary: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: secondaryTextColor,
  },
  text13LightSecondary: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_LIGHT,
    color: secondaryTextColor,
  },
  text13Reg: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: LightGrayColor,
    alignSelf: 'center',
  },
  sectionBox: {
    borderBottomWidth: 8,
    borderColor: grayE8EB,
    padding:20
  },
  allowPushView:{
    marginTop:30,
    flexDirection:'row',
    marginHorizontal:20,
    justifyContent:'space-between',
    alignItems:'center'
  },
  fatDivider:{
    height: 12,
    backgroundColor: grayE8EB,
    marginTop:20
  },
  modalNotch: {
    width: 50,
    height: 4,
    borderRadius: 5,
    backgroundColor: grayE8EB,
    marginTop: 10,
    alignSelf: 'center',
  },
  modalTitleText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: gray8E,
    marginHorizontal: 20,
  },
  br: {
    marginTop: 15,
    height: 1,
    width: 'auto',
    backgroundColor: grayD9,
  },
  itemBtnText:{
    fontFamily:Fonts.POPPINS_SEMIBOLD,
    fontSize:14,
  }
});
