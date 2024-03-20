import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DarkBlue,
  LightBlue,
  LightGrayColor,
  LightPrimaryTextColor,
  darkBg,
  grayD9,
  grayE8,
  grayEC,
  grayLightBlue,
  grayOuterLine,
  secondaryTextColor,
  white,
} from '../../../../theme/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../../../assets/Fonts';
import {NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {BootCampRoundLogo, ForwardArrow, ThreeDots} from '../../../../assets/images';
import HomeTab from '../../HomeTab';
import * as Progress from 'react-native-progress';

import {
  MaterialTabBar,
  Tabs as Tab,
  CollapsibleRef,
  CollapsibleProps,
  useCurrentTabScrollY,
  useHeaderMeasurements,
} from 'react-native-collapsible-tab-view';
import NotesTab from '../../NotesTab';
import CustomButton from '../../../../components/CustomButton';

const StudyInnerTab = () => {
  const navigation = useNavigation() as NavigationProp<any>
  const routes = useRoute();
  const {subject} = routes?.params as RouteProp<any>;

  const tabBar = (props: any) => (
    <MaterialTabBar
      {...props}
      
      activeColor={DarkBlue}
      labelStyle={{fontFamily: Fonts.POPPINS_MEDIUM}}
      indicatorStyle={{backgroundColor: DarkBlue}}
    />
  );
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0.49)',
          'rgba(0, 0, 0, 0.16)',
          'rgba(0, 0, 0, 0)',
          'rgba(0, 0, 0, 0.09)',
          'rgba(0, 0, 0, 0.49)',
        ]}
        style={styles.gradientContainer}>
        <ImageBackground
          source={require('../../../../assets/images/study/stethoscope.png')}
          style={styles.bgImage}
          resizeMode="cover">
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.circleButton}>
              <Image
                source={require('../../../../assets/images/backArrow.png')}
                style={styles.backArrow}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => null}
                style={[styles.circleButton]}>
                <Image
                  source={require('../../../../assets/images/share.png')}
                  style={styles.shareImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => null}
                style={[styles.circleButton,{marginRight:20}]}>
                <ThreeDots style={styles.shareImage} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.headingText}>{subject ?? 'Examination'}</Text>
            <Text style={styles.subHeadingText}>
              {'Publiic No Time Limit 69 Participants'}
            </Text>
          </View>
        </ImageBackground>
      </LinearGradient>

      <Tab.Container allowHeaderOverscroll={false} renderTabBar={tabBar} >
        <Tab.Tab name="Overview" label="Overview">
          <Tab.FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{backgroundColor: white}}
            data={['']}
            renderItem={() => <OverView />}
          />
        </Tab.Tab>
        <Tab.Tab name="Content" label={'Content'}>
          <Tab.FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{backgroundColor: white}}
            data={['']}
            renderItem={() => <Content name={subject}             onPress={() => navigation.navigate('StationList',{subject:subject})}
            />}
          />
        </Tab.Tab>
      </Tab.Container>
    </View>
  );
};

const OverView = () => {
  return (
    <View>
      <Text style={styles.nextText}>{`Next Steps`}</Text>
      <Text style={styles.stepsCompleted}>{`Steps Completed : 0 of 26`}</Text>
      <Progress.Bar
        style={{marginLeft: 20}}
        progress={0.3}
        width={200}
        color={LightBlue}
        borderWidth={0}
        borderRadius={4}
        unfilledColor={grayEC}
        animated={false}
      />
      <View style={{height: 15}} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{borderBottomWidth: 1, paddingBottom: 15, borderColor: grayEC}}
        data={[1, 2, 3, 4]}
        ItemSeparatorComponent={() => <View style={{marginHorizontal: 8}} />}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={[styles.openStepBox, index == 0 ? {marginLeft: 20} : {}]}>
            <Text style={styles.stepTitle}>SBAR</Text>
            <CustomButton
              buttonStyle={styles.stepButtonStyle}
              textStyle={styles.setpBtnTexStyle}
              onPress={() => null}
              title="Open Step Details"
              validate={false}
            />
          </TouchableOpacity>
        )}
      />
      <View style={styles.aboutContainer}>
      <Text style={styles.nextText}>{`About`}</Text>
      <Text style={styles.stepsCompleted}>{'OSCE Clinical Examination Stations'}</Text>
      </View>
      <View style={{flexDirection:'row',}}>
        <View style={{width:'70%',paddingLeft:20}}>
        <Text style={[styles.nextText,{marginLeft:0}]}>{`Instructors`}</Text>
        <Text style={[styles.expertsText,{marginLeft:0}]}>{'Contact the experts running this program.'}</Text>
        </View>
        <CustomButton
              buttonStyle={styles.messageButtonStyle}
              textStyle={styles.messaeBtnTexStyle}
              onPress={() => null}
              title="Message"
              validate={false}
            />
      </View>
      <View style={styles.bootCampLogoContainer}>
        <BootCampRoundLogo style={styles.roundLogoIcon} />
        <Text style={styles.bootCampText}>Boot Camp</Text>
      </View>

    </View>
  );
};

const Content = ({name,onPress}: {name: string,onPress:()=>void}) => {
  return (
    <TouchableOpacity style={styles.contentBox} onPress={onPress}>
      <View>
        <Text style={styles.stationsText}>
          {name}
          {' Stations'}
        </Text>
        <Text style={styles.stepsText}>{'55 steps'}</Text>
      </View>
      <ForwardArrow style={styles.forwardArrowIcon} />
    </TouchableOpacity>
  );
};

export default StudyInnerTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  gradientContainer: {
    height: 240,
  },
  gradientContainerAlt: {
    height: 100,
  },

  circleButton: {
    height: 30,
    width: 30,
    marginLeft: 20,
    // marginTop:Platform.OS === 'ios' ? 48 : 33   ,
    backgroundColor: grayD9,
    opacity: 0.5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    paddingTop: Platform.OS === 'ios' ? 48 : 33,
    height: 240,
    width: '100%',
    justifyContent: 'space-between',
  },
  backArrow: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  shareImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  headingText: {
    color: DarkBlue,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 20,
    alignSelf: 'center',
  },
  subHeadingText: {
    color: secondaryTextColor,
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 13,
    alignSelf: 'center',
    marginVertical: 10,
  },
  nextText: {
    color: DarkBlue,
    marginTop: 15,
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    marginLeft: 20,
  },
  stepsCompleted: {
    color: secondaryTextColor,
    marginVertical: 10,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_LIGHT,
    marginLeft: 20,
  },
  openStepBox: {
    backgroundColor: white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: grayEC,
    borderWidth: 1,
    marginBottom: 5,
    borderColor: grayEC,
    shadowOpacity: 0.9,
    shadowRadius: 2.0,
    elevation: 3,
    borderRadius: 5,
    justifyContent: 'center',
    paddingVertical: 20,
    paddingRight: 60,
    paddingLeft: 20,
  },
  stepTitle: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: secondaryTextColor,
    fontSize: 14,
    marginBottom: 15,
  },
  stepButtonStyle: {
    backgroundColor: DarkBlue,
    height: 28,
    borderRadius: 35,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
  },
  setpBtnTexStyle: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 13,
  },
  contentBox: {
    backgroundColor: white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: grayEC,
    borderWidth: 1,
    marginBottom: 5,
    borderColor: grayEC,
    shadowOpacity: 0.9,
    shadowRadius: 2.0,
    elevation: 3,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginTop: 10,
  },
  stationsText: {
    color: secondaryTextColor,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
  stepsText: {
    color: LightGrayColor,
    fontSize: 12,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
  forwardArrowIcon: {
    height: 11,
    width: 11,
    alignSelf: 'center',
  },
  aboutContainer:{
    borderBottomColor:grayEC,
    borderBottomWidth:1,
    paddingBottom:10
  },
  expertsText:{
    color: secondaryTextColor,
    marginVertical: 5,
    fontSize: 13,
    fontFamily: Fonts.POPPINS_LIGHT,
    marginLeft: 20,
    width:'90%',
  },
  messageButtonStyle: {
    backgroundColor: white,
    height: 30,
    borderRadius: 35,
    borderWidth:1,
    borderColor:DarkBlue,
    marginTop:30,
    marginRight:15
  },
  messaeBtnTexStyle: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 13,
    color:DarkBlue
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
    alignSelf:'center',
    fontFamily:Fonts.POPPINS_MEDIUM,
    fontSize:14,
},
});
