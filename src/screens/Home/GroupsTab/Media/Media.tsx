import React, { useState } from 'react';
import Header from '../../../../components/Header';
import {View, StyleSheet, Platform, Text, Image} from 'react-native';
import Fonts from '../../../../assets/Fonts';
import {white, DarkBlue, secondaryTextColor, LightBlue, grayE8EB} from '../../../../theme/Colors';
import CustomButton from '../../../../components/CustomButton';
import { EditBoard, EditPencil } from '../../../../assets/images';
import CustomImageButton from '../../../../components/CustomImageButton/CustomImageButton';

const Media = () => {
    const [categoryButton, setCategoryButton] = useState('All');

  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'May- June 2024 Exam Cohort'}
        subTitle={'MRCS Boot Camp UK'}
        containerStyle={styles.headerStyle}
      />
      <View style={styles.btnRow}>
        <CustomButton
          buttonStyle={[
            categoryButton == 'All' ? styles.altButtonStyle : styles.buttonStyle,
           
          ]}
          textStyle={[
            categoryButton == 'All' ? styles.altBtnTexStyle : styles.btnTexStyle,
          ]}
          onPress={() => setCategoryButton('All')}
          title="All "
          validate={false}
          isTouchableHighLight={true}
        />
        <CustomButton
          buttonStyle={[
            categoryButton == 'Photos' ? styles.altButtonStyle : styles.buttonStyle,
          ]}
          textStyle={[
            categoryButton == 'Photos' ? styles.altBtnTexStyle : styles.btnTexStyle,
          ]}
          onPress={() => setCategoryButton('Photos')}
          title="Photos"
          validate={false}
          isTouchableHighLight={true}
        />
         <CustomButton
          buttonStyle={[
            categoryButton == 'GiFs' ? styles.altButtonStyle : styles.buttonStyle,
          ]}
          textStyle={[
            categoryButton == 'GiFs' ? styles.altBtnTexStyle : styles.btnTexStyle,
          ]}
          onPress={() => setCategoryButton('GiFs')}
          title="GiFs"
          validate={false}
          isTouchableHighLight={true}
        />
         <CustomButton
          buttonStyle={[
            categoryButton == 'Videos' ? styles.altButtonStyle : styles.buttonStyle,
          ]}
          textStyle={[
            categoryButton == 'Videos' ? styles.altBtnTexStyle : styles.btnTexStyle,
          ]}
          onPress={() => setCategoryButton('Videos')}
          title="Videos"
          validate={false}
          isTouchableHighLight={true}
        />
      </View>
      <View style={{flex:1,justifyContent:'center'}}>
        <Text style={styles.uploadText}>No Group Media Yet</Text>
        <Text style={styles.lighText}>
         Start a conersation by attaching media to your post.
        </Text>

        <CustomImageButton
          buttonStyle={styles.postButton}
          textStyle={styles.postTxt}
          onPress={() => null}
          title="Create New Post"
          validate={false}
          iconImage={<Image style={styles.ediPencil} source={EditPencil}/>}
        />
      </View>
    </View>
  );
};

export default Media;

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
    flexDirection: 'row',
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
    marginHorizontal: 40,
    marginTop: 10,
    textAlign: 'center',
  },
  ediPencil: {
    height: 15,
     width: 15, 
     alignSelf: 'center', 
     tintColor: 'white',
     marginRight:10
    },
    buttonStyle: {
        backgroundColor: white,
        height: 23,
        borderRadius: 35,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: grayE8EB,
        marginRight:10
      },
    
      btnTexStyle: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: 12,
        color: secondaryTextColor,
      },
      altButtonStyle: {
        backgroundColor: white,
        height: 23,
        borderRadius: 35,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: LightBlue,
        marginRight:10
      },
    
      altBtnTexStyle: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: 12,
        color: LightBlue,
      },
      btnRow: {
        marginTop: 20,
        marginLeft: 20,
        flexDirection: 'row',
      },
      rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
});
