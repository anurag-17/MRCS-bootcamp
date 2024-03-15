import React, { useState } from 'react'
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
import { DarkBlue } from '../../theme/Colors'
import HallOfFameTab from './HallOfFameTab'
import Fonts from '../../assets/Fonts'
import SkillsTab from './SkillsTab'
import KnowledgeTab from './KnowledgeTab'
import Study from './StudyTab'
import GroupTab from './GroupsTab'
import ForumTab from './ForumTab'

const Home = () => {
  const [index, setIndex] = useState(0);

  const _renderHeader= ()=>
  {return (
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
  );
}

  return (
  
    <>
        <StatusBar translucent backgroundColor={'transparent'} />
        <TabsProvider defaultIndex={0} onChangeIndex={(i)=>setIndex(i)}>
        {_renderHeader()}
          <Tabs
          
            // tabLabelStyle={tabLabelStyleOptions}
            theme={{colors: {
              primary:DarkBlue,
              
             
            }
          }
            }
            tabLabelStyle={{fontFamily:Fonts.POPPINS_MEDIUM,fontSize:14}}
            style={styles.tabsShadowEffect}
            mode={'scrollable'}
            
            
            showLeadingSpace={false}
            disableSwipe>
            <TabScreen label={'Home'}  icon={null} key={'1'} >
              <HomeTab />
            </TabScreen>
            <TabScreen label={'Hall of Fame'} icon={null} key={'2'} >
              <HallOfFameTab />
            </TabScreen>
            <TabScreen  label={'Notes'} icon={null} key={'4'}>
              <NotesTab />
            </TabScreen>
            <TabScreen  label={'Study Programs'} icon={null} key={'5'}>
              <Study />
            </TabScreen>
            <TabScreen label={'Hub'} icon={null} key={'6'}>
              <HubTab />
            </TabScreen>
            <TabScreen label={'"Skills"'} icon={null} key={'7'}>
              <SkillsTab />
            </TabScreen>
            <TabScreen label={`"Knowledge"`} icon={null} key={'8'}>
              <KnowledgeTab />
            </TabScreen>
            <TabScreen label={'Mocks'} icon={null} key={'9'}>
              <MocksTab />
            </TabScreen>
            <TabScreen label={'Groups'} icon={null} key={'10'}>
              <GroupTab />
            </TabScreen>
            <TabScreen label={'Forum'} icon={null} key={'11'}>
              <ForumTab />
            </TabScreen>
          </Tabs>
        </TabsProvider>
    </>
  );
};



export default Home