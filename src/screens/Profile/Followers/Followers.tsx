
import {StyleSheet, Platform, View, Text} from 'react-native';
import Fonts from '../../../assets/Fonts';
import {white, DarkBlue, DDDDDD, secondaryTextColor, LightGrayColor} from '../../../theme/Colors';
import Header from '../../../components/Header';
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';

const Followers = () => {
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
        title={'User.name'}
        containerStyle={[styles.headerStyle]}
        subTitle={'MRCS Boot Camp UK'}
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
        <Tabs.Tab name="Followers" label="Followers">
          <Tabs.FlatList 
          contentContainerStyle={{justifyContent: 'center'}}
          data={[1]} renderItem={() => <Follower />} />
        </Tabs.Tab>
        <Tabs.Tab name="Following" label={'Following'}>
          <Tabs.FlatList
            data={['']}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={() => <Following />}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

const Follower = () => {
    return (
      <View>
        <Text
          style={[
            styles.text16SemiP,
            {
              alignSelf: 'center',
              textAlign: 'center',
              width: '75%',
              marginBottom: 10,
            },
          ]}>
         No Followers Yet
        </Text>
        <Text
          style={[
            styles.text1467RegPops,
            {alignSelf: 'center', textAlign: 'center', width: '65%'},
          ]}>
          Start following members and they can follow you back.
        </Text>
      </View>
    );
  };

  const Following = ()=>{
    return (
        <View>
          <Text
            style={[
              styles.text16SemiP,
              {
                alignSelf: 'center',
                textAlign: 'center',
                width: '75%',
                marginBottom: 10,
              },
            ]}>
            You're Not Following Anyone
          </Text>
          <Text
            style={[
              styles.text1467RegPops,
              {alignSelf: 'center', textAlign: 'center', width: '65%'},
            ]}>
            it's easy, tap Follow on any member's profile.
          </Text>
        </View>
      );
  }

export default Followers;

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
  text16SemiP: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 16,
    color: secondaryTextColor,
  },
  text1467RegPops: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: LightGrayColor,
    alignSelf: 'center',
  },
});
