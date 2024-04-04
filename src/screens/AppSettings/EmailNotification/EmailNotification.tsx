import React, { useState } from 'react';
import {StyleSheet, Platform, View, StatusBar, Text, SectionList, FlatList} from 'react-native';
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
} from '../../../theme/Colors';
import Header from '../../../components/Header';
import CustomButton from '../../../components/CustomButton';
import ToggleSwitch from 'toggle-switch-react-native';

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
      title: 'Forum',
      data: [
        { id: '3', name: 'Comments or replies', status: true },
        { id: '4', name: 'Daily or weekly activity summary', status: true },
        { id: '5', name: 'Likes or reactions', status: true },
        { id: '6', name: 'New posts', status: true },
      ],
    },
    {
      title: 'Inbox',
      data: [{ id: '7', name: 'New Messages', status: true }],
    },
    {
      title: 'Invoices',
      data: [{ id: '8', name: 'Invoice issued', status: true }],
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

const EmailNotification = () => {

    const [data, setData] = useState<DataSection[]>(DATA);

  const toggleSwitch = (sectionIndex: number, itemIndex: number) => {
    const newData = [...data];
    newData[sectionIndex].data[itemIndex].status = !newData[sectionIndex].data[itemIndex].status;
    setData(newData);
  };

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
        <ToggleSwitch
          isOn={item.status}
          onColor={DarkBlue}
          offColor={'rgba(0,33,71,0.1)'}
          size="medium"
          onToggle={() => toggleSwitch(data.findIndex(sectionItem => sectionItem === section), index)}
        />
      </View>
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
      <View style={styles.subscribeBox}>
        <Text style={styles.text13SemiSecondary}>
          Subscribe to receive emails.
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={[styles.text13LightSecondary, {width: '55%'}]}>
            Seems you're unsubscribed. from some of the emails Subscrib to stay
            updated and customize the emails to your needs.
          </Text>
          <CustomButton
            buttonStyle={styles.subsButton}
            textStyle={styles.subsTxt}
            onPress={() => null}
            title="Subscribe"
            validate={false}
          />
        </View>
      </View>
      <FlatList
      data={data}
      keyExtractor={(item, index) => item.title + index.toString()}
      renderItem={({ item }) => (
        <View style={styles.sectionBox}>
          <Text style={styles.text14SemiP}>{item.title}</Text>
          <FlatList
            data={item.data}
            keyExtractor={(item, index) => item.id + index.toString()}
            renderItem={({ item, index }) => renderItem({ item, index })}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      ListFooterComponent={()=><View style={{marginBottom:60}}/>}
      showsVerticalScrollIndicator={false}
    />

     
    </View>
  );
};

export default EmailNotification;

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
});
