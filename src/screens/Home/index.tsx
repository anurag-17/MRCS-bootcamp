import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { BackIcon, HeaderBell, HeaderChat, HomeLogo } from '../../assets/images'
import { FlatList, ImageBackground, Platform, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton'
import { TabsProvider, TabScreen, Tabs } from 'react-native-paper-tabs';
import HomeTab from './HomeTab'
import { useSharedValue } from 'react-native-reanimated';
import { TabbedHeaderPager } from 'react-native-sticky-parallax-header';
import NotesTab from './NotesTab'

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
      {/* <TabsProvider defaultIndex={0} >
        <Tabs
          // tabLabelStyle={tabLabelStyleOptions}
          mode={'scrollable'}
          showLeadingSpace={false}
          tabHeaderStyle={{width: '100%'}}
          disableSwipe>
            <TabScreen label={'Aome'} icon={null} key={'3'}>
              <HomeTab /> 
            </TabScreen>
            <TabScreen label={'Bome'} icon={null} key={'4'}>
              <HomeTab />
            </TabScreen>
          <TabScreen label={'Home'} icon={null} key={'1'}>
            <HomeTab />
          </TabScreen>

          <TabScreen label={'Dome'} icon={null} key={'2'}>
            <HomeTab />
          </TabScreen>
          <TabScreen label={'Gome'} icon={null} key={'5'}>
            <HomeTab />
          </TabScreen>
          <TabScreen label={'Iome'} icon={null} key={'6'}>
            <HomeTab />
          </TabScreen>
          <TabScreen label={'Hmome'} icon={null} key={'7'}>
            <HomeTab />
          </TabScreen>
          <TabScreen label={'Dome'} icon={null} key={'8'}>
            <HomeTab />
          </TabScreen>
          <TabScreen label={'Lome'} icon={null} key={'9'}>
            <HomeTab />
          </TabScreen>
          <TabScreen label={'Some'} icon={null} key={'10'}>
            <HomeTab />
          </TabScreen>
        </Tabs>
      </TabsProvider> */}
    </>
    
  );
}
const TABS = [
  {
    title: 'Home',
  },
  {
    title: 'Hall of Fame',
  },
  {
    title: 'Notes',
  },
  {
    title: 'Notes',
  },
  {
    title: 'Notes',
  },
  {
    title: 'Notes',
  },
  {
    title: 'Notes',
  },
];

  return (
    // <FlatList
    // style={{height:1000,flex:1}}
    // ListHeaderComponent={_renderHeader}
    // data={['']}
    // renderItem={()=>             null}
    // />
    <>
        <StatusBar translucent backgroundColor={'transparent'} />
        <TabsProvider defaultIndex={0}>
        {_renderHeader()}
          <Tabs
            // tabLabelStyle={tabLabelStyleOptions}
            mode={'scrollable'}
            showLeadingSpace={false}
            tabHeaderStyle={{width: '100%'}}
            disableSwipe>
            <TabScreen label={'Aome'} icon={null} key={'3'} >
              <HomeTab />
            </TabScreen>
            <TabScreen label={'Notes'} icon={null} key={'4'}>
              <NotesTab />
            </TabScreen>
            <TabScreen label={'Home'} icon={null} key={'1'}>
              <HomeTab />
            </TabScreen>

            <TabScreen label={'Dome'} icon={null} key={'2'}>
              <HomeTab />
            </TabScreen>
            <TabScreen label={'Gome'} icon={null} key={'5'}>
              <HomeTab />
            </TabScreen>
            <TabScreen label={'Iome'} icon={null} key={'6'}>
              <HomeTab />
            </TabScreen>
            <TabScreen label={'Hmome'} icon={null} key={'7'}>
              <HomeTab />
            </TabScreen>
            <TabScreen label={'Dome'} icon={null} key={'8'}>
              <HomeTab />
            </TabScreen>
            <TabScreen label={'Lome'} icon={null} key={'9'}>
              <HomeTab />
            </TabScreen>
            <TabScreen label={'Some'} icon={null} key={'10'}>
              <HomeTab />
            </TabScreen>
          </Tabs>
        </TabsProvider>
    </>
  );
};



export default Home