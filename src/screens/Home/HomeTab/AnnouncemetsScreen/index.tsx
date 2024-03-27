import React from 'react'
import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DarkBlue, LightGrayColor, grayOuterLine, secondaryTextColor, white } from '../../../../theme/Colors'
import { BootCampRoundLogo, Cross, StepDoneIcon } from '../../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../../../assets/Fonts';
import CustomButton from '../../../../components/CustomButton';
import Header from '../../../../components/Header';
import LinearGradient from 'react-native-linear-gradient';

 const AnnouncementsScreen = () => {
    const navigation = useNavigation()

  
  return (
    <SafeAreaView style={styles.mainContainer}>
     
      <View >
      <Header
        type="white"
        titleStyle={styles.headerTitle}
        title="Announcements"
        containerStyle={ Platform.OS=='android'? {marginTop:35}:{}}
      />
        <View style={styles.bootCampContiner}>
          <View style={styles.bootCampLogoContainer}>
            <BootCampRoundLogo style={styles.roundLogoIcon} />
            <View>
              <Text style={styles.bootCampText}>Boot Camp</Text>
              <Text style={styles.dayText}>{'5 days ago'}</Text>
            </View>
          </View>
          <Text style={styles.bootCampMockText}>
            {'Boot Camp Mock Recording'}
          </Text>
          <Text
            style={
              styles.bootCampMockRecordingText
            }>{`Boot Camp Mock Recording is now available on App > Hub`}</Text>
        </View>
        
      </View>
      <LinearGradient colors={[
        'rgba(250, 250, 250, 0.49)',
        'rgba(250, 250, 250, 0.16)',
        'rgba(250, 250, 250, 0)',
        'rgba(250, 250, 250, 0.09)',
        'rgba(250, 250, 250, 0.49)',
      ]}>
        <View>
      <CustomButton
          textStyle={styles.mesgBtnTxtStyle}
          buttonStyle={styles.msgBtnStyle}
          title="Send Message"
          validate={false}
          onPress={() => {
            null;
          }}
        />
        </View>
        </LinearGradient>
    </SafeAreaView>
  );
}

export default AnnouncementsScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:white,
        justifyContent:'space-between'
    },
    headerTitle: {
      fontFamily: Fonts.POPPINS_SEMIBOLD,
      fontSize: 16,
      color: DarkBlue,
      alignSelf:'center',
      marginTop:Platform.OS=='android'?3:0,
      marginLeft: 30,
    },
    bootCampContiner:{
      height:186,
      borderRadius:4,
      marginHorizontal:20,
      marginTop:10
  },
  bootCampLogoContainer:{
      flexDirection:'row',
      margin:20
  },
  roundLogoIcon:{
      width:36,
      height:36,
      alignSelf:'center',
      marginRight:20
  },
  bootCampText:{
      color:secondaryTextColor,
      fontFamily:Fonts.WIX_SEMI_BOLD,
      fontSize:14,
  },
  bootCampMockText:{
      color:secondaryTextColor,
      fontFamily:Fonts.WIX_MEDIUM,
      fontSize:18,
      marginLeft:20
  },
  bootCampMockRecordingText:{
      color:LightGrayColor,
      fontFamily:Fonts.WIX_MEDIUM,
      fontSize:15,
      marginLeft:20,
      marginTop:5,
      width:'80%',
      lineHeight:22
  },
  dayText:{
    color:LightGrayColor,
    fontFamily:Fonts.WIX_REGULAR,
    fontSize:12,
},
msgBtnStyle:{
  alignSelf: 'center',
  marginVertical: 15,
  backgroundColor:DarkBlue,
  marginHorizontal:0
},
mesgBtnTxtStyle:{
  color:white,
  fontSize:14,
  fontFamily:Fonts.POPPINS_SEMIBOLD
},
    
})

