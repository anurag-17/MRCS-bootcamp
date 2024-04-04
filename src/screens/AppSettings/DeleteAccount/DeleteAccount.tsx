import React from 'react';
import {StyleSheet, Platform, StatusBar, View, Text,TouchableOpacity} from 'react-native';
import Fonts from '../../../assets/Fonts';
import {
  white,
  DarkBlue,
  secondaryTextColor,
  LightGrayColor,
  blueTypeTextColor,
  D2D6D9,
} from '../../../theme/Colors';
import Header from '../../../components/Header';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const DeleteAccount = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        titleStyle={styles.headerTitle}
        title={'Delete Your Account'}
        containerStyle={styles.headerStyle}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.roundProfile}>
            <Text style={[styles.text14SemiP,{fontSize:30,color:'white'}]}>A</Text>
        </View>
        <Text style={styles.emailTxt}>user.email@gmail.com</Text>
        <Text style={styles.yourAccountTxt}>Your account will be deleted from this app. You won't be able to restore your account after it's deleted, but you can always create a new one.</Text>
        <CustomButton
            buttonStyle={styles.dltButton}
            textStyle={styles.dltTxt}
            onPress={() => null}
            title="Delete Account"
            validate={false}
          />
          <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text style={[styles.text14SemiP,{marginVertical:15}]}>Not Now</Text>

          </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },
  headerTitle: {
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
  roundProfile:{
    height:79,
    width:79,
    backgroundColor:D2D6D9,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  text14SemiP: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: DarkBlue,
    alignSelf:'center'
  },
  yourAccountTxt: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: secondaryTextColor,
    alignSelf:'center',
    marginHorizontal:50,
    marginTop:20
  },
  emailTxt: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: LightGrayColor,
    alignSelf:'center',
    marginVertical:15
  },

  dltButton: {
    alignSelf: 'center',
    height: 46,
    borderRadius:70,
    paddingHorizontal: 20,
    backgroundColor: DarkBlue,
    marginTop:60,
    
  },
  dltTxt: {
    color: white,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});
