import React, { FC, useState } from 'react';
import { FlatList, Platform, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Header from '../../../../components/Header';
import { B9B9B9, DarkBlue, LightGrayColor, black11, grayD9, grayE8EB, redFC3D30, secondaryTextColor, white } from '../../../../theme/Colors';
import Fonts from '../../../../assets/Fonts';
import { PlaceholderProfile } from '../../../../assets/images';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface Notification {
  id: string;
  heading: string;
  date: string;
  imageUri?: string;
  unRead?: boolean;
}

const NotificationScreen: FC = () => {
  const navigation = useNavigation() as NavigationProp <any>
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      heading: "MRCS Boot Camp UK : Traning Room",
      date: "4d",
      unRead: true
    },
    {
      id: '2',
      heading: "New Message from John Doe",
      date: "1h",
      unRead: false
    },
    {
      id: '3',
      heading: "Reminder: Webinar Tomorrow",
      date: "2d",
      unRead: true
    },
    {
      id: '4',
      heading: "You have a meeting at 10 AM",
      date: "3d",
      unRead: false
    },
    {
      id: '5',
      heading: "Important Update: Policy Changes",
      date: "5d",
      unRead: true
    },
    {
      id: '6',
      heading: "Congratulations! You've won a prize",
      date: "6d",
      unRead: false
    },
    {
      id: '7',
      heading: "Team Lunch Tomorrow",
      date: "1w",
      unRead: true
    },
    {
      id: '8',
      heading: "Payment Received",
      date: "2w",
      unRead: true
    },
    {
      id: '9',
      heading: "Account Balance Low",
      date: "2w",
      unRead: false
    },
  ]);

  const handleNotificationPress = (notificationId: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === notificationId ? { ...notification, unRead: false } : notification
      )
    );
    navigation.navigate('LatestAnnouncementsScreen')
  };

  const renderNotificationItem: FC<{ item: Notification }> = ({ item }) => (
    <NotificationItem
      heading={item.heading}
      date={item.date}
      unRead={item.unRead}
      onPress={() => handleNotificationPress(item.id)}
    />
  );

  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={'Notifications'}
        containerStyle={styles.headerStyle}
        subTitle={'MRCS Boot Camp UK'}
        isThreeDots
        onPressDots={() => console.log('Open dots')}
      />

      <FlatList
        data={notifications}
        renderItem={({item,index})=> <NotificationItem
          key={item.id}
          heading={item.heading}
          date={item.date}
          unRead={item.unRead}
          onPress={() => handleNotificationPress(item.id)}
        />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

interface NotificationItemProps {
  heading: string;
  date: string;
  imageUri?: string;
  unRead?: boolean;
  onPress?: () => void;
}

const NotificationItem: FC<NotificationItemProps> = ({
  heading,
  date,
  imageUri,
  unRead,
  onPress,
}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={grayE8EB}>
      <View style={styles.notificationItemView}>
        <View style={{ flexDirection: 'row' }}>
          {unRead ? <View style={styles.redDot} /> : <View style={[styles.redDot,{backgroundColor:'transparent'}]} />}
          <PlaceholderProfile
            height={42}
            width={42}
            style={styles.roundImage}
          />
        </View>
        <View style={styles.notificationHeadingView}>
          <Text style={[styles.notificationHeadingTxt,unRead?{}:{fontFamily:Fonts.POPPINS_LIGHT}]}>{heading}</Text>
          <Text style={styles.timeText}>{date}</Text>
        </View>
      </View>
    </TouchableHighlight>
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
    backgroundColor: DarkBlue,
    justifyContent: 'space-between',
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },
  notificationItemView: {
    marginLeft: 10,
    flexDirection: 'row',
    marginTop: 15,
  },
  roundImage: {
    height: 42,
    width: 42,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  notificationHeadingView: {
    borderBottomWidth: 1,
    borderBottomColor: grayE8EB,
    paddingBottom: 10,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    flex: 1,
  },
  notificationHeadingTxt: {
    fontSize: 12,
    color: secondaryTextColor,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    alignSelf: 'center',
    width: '94%',
  },
  timeText: {
    fontSize: 12,
    color: B9B9B9,
    fontFamily: Fonts.POPPINS_MEDIUM,
    alignSelf: 'center',
  },
  redDot: {
    height: 5,
    width: 5,
    backgroundColor: redFC3D30,
    borderRadius: 50,
    alignSelf: 'center',
    marginRight: 7,
  },
});

export default NotificationScreen;
