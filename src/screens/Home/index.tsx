import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { BackIcon, HeaderBell, HeaderChat, HomeLogo } from '../../assets/images'
import { FlatList, ImageBackground, Platform, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton'
import { TabsProvider, TabScreen, Tabs } from 'react-native-paper-tabs';
import HomeTab from './HomeTab'
import NotesTab from './NotesTab'
import MocksTab from './MocksTab'
import HubTab from './HubTab'

const Home = () => {

  const _renderHeader= ()=>
  {return (
    <>
      <>
        {/* Header  */}
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.49)', 'rgba(0, 0, 0, 0)']}
          style={styles.gradientContainer}>
          <ImageBackground
            source={require('../../assets/images/home/homeBanner.png')}
            style={styles.bannerImage}
            resizeMode="cover">
            <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.leftGrayCircleContainer}>
                <Text>A</Text>
              </TouchableOpacity>
              <View style={styles.iconRightSubContainer}>
                <TouchableOpacity style={styles.rightGrayCircleContainer}>
                  <HeaderChat style={styles.rightIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightGrayCircleContainer}>
                  <HeaderBell style={styles.rightIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </LinearGradient>
        <View style={styles.tabTopContainer}>
          <HomeLogo style={styles.homeHeaderLogo} />
          <View style={styles.headerTagContainer}>
            <Text style={styles.tagText}>{'MRCS Boot Camp UK'}</Text>
            <CustomButton
              buttonStyle={styles.buttonStyle}
              textStyle={styles.btnTexStyle}
              onPress={() => null}
              title="Contact Us"
              validate={false}
            />
          </View>
        </View>
      </>
    </>
    
  );
}

  return (
  
    <>
        <StatusBar translucent backgroundColor={'transparent'} />
        <TabsProvider defaultIndex={0}>
        {_renderHeader()}
          <Tabs
            // tabLabelStyle={tabLabelStyleOptions}
            
            style={{backgroundColor:'white'}}
            mode={'scrollable'}
            showLeadingSpace={false}
            tabHeaderStyle={{width: '100%'}}
            disableSwipe>
            <TabScreen label={'Home'} icon={null} key={'1'} >
              <HomeTab />
            </TabScreen>
            <TabScreen label={'Notes'} icon={null} key={'2'}>
              <NotesTab />
            </TabScreen>
            <TabScreen label={'Hub'} icon={null} key={'3'}>
              <HubTab />
            </TabScreen>
            <TabScreen label={'Mocks'} icon={null} key={'4'}>
              <MocksTab />
            </TabScreen>
            
          </Tabs>
        </TabsProvider>
    </>
  );
};



export default Home