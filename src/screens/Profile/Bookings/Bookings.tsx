import React from 'react';
import {StyleSheet, Platform, View, Text} from 'react-native';
import Fonts from '../../../assets/Fonts';
import {white, DarkBlue, DDDDDD, secondaryTextColor, LightGrayColor} from '../../../theme/Colors';
import Header from '../../../components/Header';
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';

const Bookings = () => {
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
        title={'Events'}
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
        <Tabs.Tab name="Upcoming" label="Upcoming">
          <Tabs.FlatList 
                      contentContainerStyle={{justifyContent: 'center'}}

          data={[1]} renderItem={() => <Upcoming />} />
        </Tabs.Tab>
        <Tabs.Tab name="History" label={'History'}>
          <Tabs.FlatList
            data={['']}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={() => <Upcoming />}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

const Upcoming = () => {
    return (
      <View>
        <Text
          style={[
            styles.text14SemiP,
            {
              alignSelf: 'center',
              textAlign: 'center',
              width: '75%',
              marginBottom: 10,
            },
          ]}>
          You've Got Nothing Booked at the Moment
        </Text>
        <Text
          style={[
            styles.text1467RegPops,
            {alignSelf: 'center', textAlign: 'center', width: '65%'},
          ]}>
          You'll see all your future events here.
        </Text>
      </View>
    );
  };

export default Bookings;

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
  text14SemiP: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    color: secondaryTextColor,
  },
  text1467RegPops: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: LightGrayColor,
    alignSelf: 'center',
  },
});
