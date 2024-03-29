import React from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import {DarkBlue, white} from '../../../../theme/Colors';
import Fonts from '../../../../assets/Fonts';
import Header from '../../../../components/Header';

const NewMessage = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header
          type="white"
          titleStyle={styles.headerTitle}
          title="New Message"
          containerStyle={Platform.OS == 'android' ? {marginTop: 35} : {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewMessage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 16,
    color: DarkBlue,
    alignSelf: 'center',
    marginTop: Platform.OS == 'android' ? 3 : 0,
    marginLeft: 30,
  },
});
