import React, {useRef} from 'react';
import {styles} from './style';
import {BackIcon, HeaderBell, HeaderChat, HomeLogo} from '../../assets/images';
import {
  Animated,
  FlatList,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  MaterialTabBar,
  Tabs,
  CollapsibleRef,
  CollapsibleProps,
  useCurrentTabScrollY,
  useHeaderMeasurements,
} from 'react-native-collapsible-tab-view';
import {LinearGradient} from 'react-native-linear-gradient';
import CustomButton from '../../components/CustomButton';
// import { TabsProvider, TabScreen, Tabs } from 'react-native-paper-tabs';
import HomeTab from './HomeTab';
import NotesTab from './NotesTab';
import {LightBlue, white} from '../../theme/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeCollapsable = () => {
  const tabsContainerRef = useRef<CollapsibleRef>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const tabBar = (props: any) => (
      <MaterialTabBar
        {...props}
        scrollEnabled={true}
        indicatorStyle={{backgroundColor: LightBlue}}
      />
  );

  const _renderHeader = (props: any) => {
    const {top, height} = useHeaderMeasurements();
    console.log('height: ', height);
    return (
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
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={'transparent'} />
      
      <Tabs.Container
        ref={tabsContainerRef}
        allowHeaderOverscroll={false}
        renderTabBar={tabBar}
        revealHeaderOnScroll
        renderHeader={props => <_renderHeader {...props} />}>
        <Tabs.Tab name="Home" label="Home">
          <Tabs.FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{backgroundColor: white}}
            data={['']}
            renderItem={() => <HomeTab />}
          />
        </Tabs.Tab>
        <Tabs.Tab name="Notes" label={'Notes'}>
          <Tabs.FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{backgroundColor: white}}
            data={['']}
            renderItem={() => <NotesTab />}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

export default HomeCollapsable;
