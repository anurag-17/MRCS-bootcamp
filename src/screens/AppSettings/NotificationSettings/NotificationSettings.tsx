import React from 'react'
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import { white, DarkBlue, secondaryTextColor, LightGrayColor, blueTypeTextColor } from '../../../theme/Colors'
import Header from '../../../components/Header'
import Fonts from '../../../assets/Fonts'
import { EmailIcon, ForwardArrow, PushIcon } from '../../../assets/images'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const NotificationSettings = () => {
  const navigation = useNavigation() as NavigationProp<any>
  const _goTo = (screenName:string)=> navigation.navigate(screenName)

  const NOTIFICATION = [
    {
      name: 'Push',
      icon: PushIcon,
      onPress: () => {
        _goTo('PushNotificationScreen');
      },
    },
    {
      name: 'Email',
      icon: EmailIcon,
      onPress: () => {
        _goTo('EmailNotification');
      },
    },
  ];
  return (
    <View style={styles.mainContainer}>
    <StatusBar translucent backgroundColor={DarkBlue} />
    <Header
      type="blue"
      title={'Notification Settings'}
      containerStyle={styles.headerStyle}
      subTitle={'MRCS Boot Camp UK'}
    />
    <View style={{marginHorizontal:20,marginTop:30,marginBottom:20}}>
    <Text style={styles.text16SemiP}>Notification Settings</Text>
    <Text style={[styles.text13Reg,{marginTop:7}]}>Choose how you would like to get notified</Text>
    </View>
    {NOTIFICATION.map((item,index)=>{
      return( 
      <TouchableOpacity onPress={item.onPress} key={index}>
        <View style={styles.activitRow}>
          <View style={styles.actIconView}>
            <Image  source={item.icon} style={{height:22,width:22,alignSelf:'center'}}/>
            <Text style={styles.acitvitText}>{item.name}</Text>
          </View>
          <ForwardArrow style={{alignSelf: 'center'}} />
        </View>
      </TouchableOpacity>
      )
    })}
    </View>
  )
}

export default NotificationSettings

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
    text16SemiP:{
      fontSize:16,
      fontFamily:Fonts.POPPINS_SEMIBOLD,
      color:secondaryTextColor
    },
    text14SemiP:{
      fontSize:14,
      fontFamily:Fonts.POPPINS_SEMIBOLD,
      color:secondaryTextColor
    },
    text13Reg:{
      fontSize:13,
      fontFamily:Fonts.POPPINS_REGULAR,
      color:LightGrayColor
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
  
  })