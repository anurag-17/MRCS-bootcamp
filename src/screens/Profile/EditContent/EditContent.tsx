import React, { useState } from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import Header from '../../../components/Header';
import Fonts from '../../../assets/Fonts';
import {white, DarkBlue, secondaryTextColor, grayE8EB, LightGrayColor, grayOuterLine, gray8E} from '../../../theme/Colors';

const EditContent = () => {

    const [aboutMe, setAboutMe] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'}/>
      <Header
        type="white"
        titleStyle={styles.headerTitle}
        title="Edit Content"
        isPublish={true}
        isPost={true}
        onPost={() => null}
        containerStyle={ Platform.OS=='android'? {marginTop:35}:{}}
      />
    <View>

      {aboutMe.length==0  ?<Text style={[styles.aboutMe]}>
          About Me
        </Text>:<Text style={[styles.aboutMe,{color:'transparent'}]}>
          A
        </Text>}
      <TextInput 
        style={styles.postInput}
        placeholder='Write a little about yourself, share your interest add pictures and videos'
        placeholderTextColor={gray8E}
        multiline
        onChangeText={(txt)=>setAboutMe(txt)}
      />
      </View>

    </SafeAreaView>
  );
};

export default EditContent;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    color: DarkBlue,
    marginLeft: 30,
  },
  nameRow: {
    marginTop: 15,
    backgroundColor: grayE8EB,
    paddingLeft: 20,
  },
  titleInput: {
    marginVertical: 20,
    marginHorizontal: 20,
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  postInput: {
    marginHorizontal: 20,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: secondaryTextColor,
  },
  aboutMe:{
    marginTop:30,
    color:LightGrayColor,
    opacity:0.8,
    marginLeft:20,
    fontSize:18,
    fontFamily: Fonts.POPPINS_SEMIBOLD,

  }
});
