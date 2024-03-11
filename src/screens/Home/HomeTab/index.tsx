import React from 'react'
import { Text, View,FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderBell, HeaderChat, HomeLogo } from '../../../assets/images'
import CustomButton from '../../../components/CustomButton'
import { styles } from '../style'

const HomeTab = () => {
    const _renderHeader= ()=>
  {return (
    <>
      <>
        {/* Header  */}
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.49)', 'rgba(0, 0, 0, 0)']}
          style={styles.gradientContainer}>
          <ImageBackground
            source={require('../../../assets/images/home/homeBanner.png')}
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
  return (
   <View style={{backgroundColor:'green',flex:1,borderWidth:2 ,}}>
       
       <FlatList
       data={['','','','','','','','','','','','','','','','','','','','','','','','']}
       renderItem={()=> <Text>
        {'Hello'}
    </Text>}
       />
   </View>
  )
}

export default HomeTab