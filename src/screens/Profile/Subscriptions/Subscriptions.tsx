import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  DDDDDD,
  DarkBlue,
  LightGrayColor,
  grayOuterLine,
  secondaryTextColor,
  white,
} from '../../../theme/Colors';
import Fonts from '../../../assets/Fonts';
import Header from '../../../components/Header';
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';
import {HomeLogo} from '../../../assets/images';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Subscriptions = () => {
  const tabBar = (props: any) => (
    <MaterialTabBar
      {...props}
      activeColor={DarkBlue}
      labelStyle={{fontFamily: Fonts.POPPINS_MEDIUM}}
      indicatorStyle={{backgroundColor: DarkBlue}}
    />
  );

  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'Subscriptions'}
        titleStyle={styles.ordersTitle}
        containerStyle={styles.headerStyle}
      />
      <Tabs.Container
        allowHeaderOverscroll={false}
        headerContainerStyle={{
          overflow: 'hidden',
          borderBottomWidth: 1,
          borderColor: DDDDDD,
        }}
        renderTabBar={tabBar}
        pagerProps={{scrollEnabled: true}}>
        <Tabs.Tab name="Active" label="Active">
          <Tabs.FlatList data={[1]} renderItem={() => <Active />} />
        </Tabs.Tab>
        <Tabs.Tab name="Expired" label={'Expired'}>
          <Tabs.FlatList
            data={['']}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={() => <Expired />}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

const Active = () => {
    const navigation = useNavigation() as NavigationProp <any>
  return (
    <View style={styles.activeCard}>
      <View style={styles.topView}>
        <View style={styles.flexRow}>
          <HomeLogo height={40} width={40} style={styles.mrcsLogo} />
          <Text style={[styles.text16LightP, {alignSelf: 'center'}]}>
            MRCS Boot Camp UK
          </Text>
        </View>
        <View>
          <Text style={[styles.text18SemiP]}>Part B Subscription</Text>
          <Text style={[styles.text12SemiP]}>Pricing Plan</Text>
        </View>
        <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
          <Text style={[styles.text22RegularP, {alignSelf: 'flex-end'}]}>
            £349
          </Text>
          <View>
            <Text style={[styles.text16LightP, {fontSize: 13}]}>
              Valid until
            </Text>
            <Text style={styles.text18SemiP}>May 10, 2024</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.detailsBtn} onPress={()=>navigation.navigate('OverView')}>
        <Text style={[styles.text14SemiP, {alignSelf: 'center'}]}>
          More Details
        </Text>
        <View></View>
      </TouchableOpacity>
    </View>
  );
};

const Expired = () => {
  return (
    <View>
      <Text
        style={[
          styles.text14SemiP,
          {
            alignSelf: 'center',
            textAlign: 'center',
            width: '70%',
            marginBottom: 10,
          },
        ]}>
        There Are No Expired Subscriptions Here
      </Text>
      <Text
        style={[
          styles.text1467RegPops,
          {alignSelf: 'center', textAlign: 'center', width: '65%'},
        ]}>
        Once a subscription has expired, it will appear here.
      </Text>
    </View>
  );
};

export default Subscriptions;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  ordersTitle: {
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },

  //Active Styles
  activeCard: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: DDDDDD,
    height: 261,
    marginHorizontal: 20,
    marginTop: 15,
    justifyContent: 'space-between',
  },
  text16LightP: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 16,
    color: secondaryTextColor,
  },

  text18SemiP: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 18,
    color: secondaryTextColor,
  },

  text12SemiP: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 12,
    color: secondaryTextColor,
  },
  text22RegularP: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 22,
    color: secondaryTextColor,
  },
  text14SemiP: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    color: secondaryTextColor,
  },
  mrcsLogo: {
    alignSelf: 'center',
    marginRight: 10,
  },
  topView: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-around',
  },
  flexRow: {
    flexDirection: 'row',
  },
  detailsBtn: {
    paddingVertical: 15,
    justifyContent: 'center',
    borderTopColor: DDDDDD,
    borderTopWidth: 1,
  },
  text1467RegPops: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: LightGrayColor,
    alignSelf: 'center',
  },
});
