import React from 'react'
import { Text, View,FlatList, ImageBackground, TouchableOpacity,Image,ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { BootCampRoundLogo, HeaderBell, HeaderChat, HomeLogo, Scissors } from '../../../assets/images'
import CustomButton from '../../../components/CustomButton'
import { styles } from './style'
import { white } from '../../../theme/Colors'
import UpComingMock from '../../../components/UpComingMock'

const HomeTab = () => {
  
  return (
   <ScrollView>
    <View style={{flex: 1, backgroundColor: white}}>
      <Text style={styles.announceText}>Announcements</Text>
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
      <Image source={require('../../../assets/images/home/scissors.png')} style={styles.scissorsImage} />
      <Text style={styles.upcomingText}>Upcoming Mocks</Text>
      <UpComingMock/>

    </View>
    </ScrollView>
  );
}

export default HomeTab