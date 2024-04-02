import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DarkBlue, white } from '../../../../theme/Colors'
import { Cross, StepDoneIcon } from '../../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../../../assets/Fonts';
import CustomButton from '../../../../components/CustomButton';
import Header from '../../../../components/Header';

 const StepCompletedScreen = () => {
    const navigation = useNavigation()

    const goBack  = () => navigation.goBack()
    const _stepHeader = () => {
        return (
          <View style={styles.stepHeader}>
              <TouchableOpacity onPress={goBack}>
                <Cross height={14} style={{alignSelf:'center'}} />
              </TouchableOpacity>
          </View>
        );
      };
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* {_stepHeader()} */}
      <StatusBar barStyle={'dark-content'}/>
      <Header
        type="white"
        containerStyle={Platform.OS == 'android' ? {marginTop: 35} : {}}
      />
      
      <View style={[styles.mainContainer, {justifyContent: 'center'}]}>
        <StepDoneIcon
          height={100}
          width={100}
          style={{alignSelf: 'center', marginBottom: 50}}
        />
        <Text style={styles.stepCompleted}>Step Completed</Text>
        <Text style={styles.rockText}>You rock, keep it up!</Text>
        <CustomButton
          textStyle={styles.shareBtnTxtStyle}
          buttonStyle={styles.shareBtnStyle}
          title="Share"
          validate={false}
          onPress={() => null}
        />
        <TouchableOpacity onPress={goBack}>
          <Text style={[styles.stepCompleted, {fontSize: 16}]}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default StepCompletedScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:white
    },
    stepHeader: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      stepCompleted: {
        fontFamily: Fonts.POPPINS_SEMIBOLD,
        fontSize: 20,
        color: DarkBlue,
        alignSelf:"center",
        marginBottom:10
      },
      rockText:{
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontSize: 14,
        color: DarkBlue,
        alignSelf:"center",
        marginBottom:10
      },
     shareBtnStyle:{
        alignSelf: 'center',
        marginVertical: 15,
        backgroundColor:DarkBlue,
        marginHorizontal:0
      },
     shareBtnTxtStyle:{
        color:white,
        fontSize:14,
        fontFamily:Fonts.POPPINS_SEMIBOLD
      },
})

