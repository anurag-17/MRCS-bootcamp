import React from 'react';
import {StyleSheet, Platform, View, Text} from 'react-native';
import Fonts from '../../../../../assets/Fonts';
import {white, DarkBlue} from '../../../../../theme/Colors';
import Header from '../../../../../components/Header';
import { CatNap } from '../../../../../assets/images';
import { Button } from 'react-native-ui-lib';

const TopicsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'Topics'}
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerStyle}
      />
      <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
      <CatNap />
      <Text style={styles.h1}>Add a Topic</Text>
      <Text style={styles.h3}>Add a new topoc to organize posts in the group feed.</Text>
      <Button activeOpacity={0.5} size={'medium'} label={'+  New Topic'} style={{backgroundColor:DarkBlue,marginTop:30}}  labelStyle={{fontFamily:Fonts.POPPINS_SEMIBOLD,fontWeight:'600'}}/>
      </View>
    </View>
  );
};

export default TopicsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    alignSelf: 'center',
    marginTop: Platform.OS == 'ios' ? 15 : 20,
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
  h1:{
    fontFamily:Fonts.POPPINS_SEMIBOLD,
    fontSize:18,
    color:DarkBlue,
  },
  h3:{
    fontFamily:Fonts.POPPINS_LIGHT,
    fontSize:13,
    color:DarkBlue,
    marginTop:10,
    marginHorizontal:50,
    textAlign:'center'
  }
});
