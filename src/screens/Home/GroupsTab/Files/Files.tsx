import React from 'react';
import Header from '../../../../components/Header';
import {View, StyleSheet, Platform, Text} from 'react-native';
import Fonts from '../../../../assets/Fonts';
import {white, DarkBlue, secondaryTextColor} from '../../../../theme/Colors';
import CustomButton from '../../../../components/CustomButton';

const Files = () => {
  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'Files'}
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerStyle}
      />
      <View style={{flex:1,justifyContent:'center'}}>
        <Text style={styles.uploadText}>Upload a file by posting</Text>
        <Text style={styles.lighText}>
          There are no files here yet. Add files to this group by attaching them
          to post
        </Text>

        <CustomButton
          buttonStyle={styles.postButton}
          textStyle={styles.postTxt}
          onPress={() => null}
          title="Create a Post"
          validate={false}
        />
      </View>
    </View>
  );
};

export default Files;

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
  postButton: {
    alignSelf: 'center',
    height: 46,
    borderRadius: 70,
    paddingHorizontal: 20,
    backgroundColor: DarkBlue,
    marginTop: 30,
  },
  postTxt: {
    color: white,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
  uploadText: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: secondaryTextColor,
    alignSelf: 'center',
  },
  lighText: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_LIGHT,
    color: secondaryTextColor,
    alignSelf: 'center',
    marginHorizontal:40,
    marginTop:10,
    textAlign:'center'
  },
});
