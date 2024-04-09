import React from 'react';
import Header from '../../../../components/Header';
import {StyleSheet, Platform, View, Text, TouchableOpacity} from 'react-native';
import Fonts from '../../../../assets/Fonts';
import {
  white,
  DarkBlue,
  DDDDDD,
  secondaryTextColor,
  gray8E,
  grayE8,
  grayOuterLine,
  green00A,
} from '../../../../theme/Colors';
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';
import SearchCustom from '../../../../components/SearchCustom';
import {ThreeDots} from '../../../../assets/images';
import IconButton from '../../../../components/IconButton';

const MembersScreenTab = () => {
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
        title={'Members'}
        titleStyle={styles.headerTitle}
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
        <Tabs.Tab name="All" label="All(4)">
          <Tabs.FlatList data={[1]} renderItem={() => <All />} />
        </Tabs.Tab>
        <Tabs.Tab name="Admins" label={'Admins'}>
          <Tabs.FlatList data={['']} renderItem={() => <Admin />} />
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

const All = () => {
  return (
    <>
      <SearchCustom
        titleText="Search"
        isSearch={true}
        onPress={() => console.log('dd')}
        onChangeText={text => {
          console.log(text);
        }}
      />
      <View style={{marginTop: 10}}>
        <View style={[styles.flexRow]}>
          <View style={styles.imageContainer}>
            <View style={styles.roundImage} />
            <View>
              <Text style={styles.nameText}>Name</Text>
              <Text style={styles.text13medium}>Joined 2 weeks ago</Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap',width:'90%',}}>
                <IconButton isIcon isStar title="Part B Subscription" btnStyle={{marginRight:10,marginVertical:5}}/>
                <IconButton isIcon={false} isStar={false} title="SKills April 2024" btnStyle={{backgroundColor:green00A}}  />

              </View>
            </View>
          </View>
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <ThreeDots />
          </TouchableOpacity>
        </View>
        <View style={styles.grayBr} />
      </View>
    </>
  );
};
const Admin = () => {
  return (
    <>
      <View style={{marginTop: 10}}>
        <View style={[styles.flexRow]}>
          <View style={styles.imageContainer}>
            <View style={styles.roundImage} />
            <View>
              <Text style={styles.nameText}>Name</Text>
              <Text style={styles.text13medium}>Admin</Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap',}}>
                <IconButton isIcon isStar title="Part B Subscription" btnStyle={{marginRight:10,marginVertical:5}}/>
                <IconButton isIcon isStar={false} title="Tester"  btnStyle={{alignSelf:'center'}} />

              </View>
            </View>
          </View>
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <ThreeDots />
          </TouchableOpacity>
        </View>
        <View style={styles.grayBr} />
      </View>
    </>
  );
};

export default MembersScreenTab;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: 15,
    marginLeft: 10,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    marginTop: 13,
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },
  flexRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  roundImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    alignSelf: 'center',
    marginRight: 15,
    backgroundColor: grayE8,
  },
  nameText: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    color: secondaryTextColor,
  },
  text13medium: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 13,
    color: secondaryTextColor,
  },
  grayBr: {
    height: 1,
    width: '81%',
    alignSelf: 'flex-end',
    backgroundColor: grayOuterLine,
    marginTop: 10,
  },
});
