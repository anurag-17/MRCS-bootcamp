import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {DarkBlue, white} from '../../../../theme/Colors';
import Header from '../../../../components/Header';

const MeberProfile = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={'Member Profile'}
        containerStyle={styles.headerStyle}
        subTitle={'MRCS Boot Camp UK'}
        isThreeDots={true}
        onPressDots={()=>console.log("workign ...")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderWidth:1,
    justifyContent:'space-between',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },
});
export default MeberProfile;
