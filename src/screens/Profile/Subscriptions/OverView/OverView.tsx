import React, { FC } from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, TextStyle, View} from 'react-native';
import {
  DDDDDD,
  DarkBlue,
  LightGrayColor,
  grayE8EB,
  secondaryTextColor,
  white,
} from '../../../../theme/Colors';
import Fonts from '../../../../assets/Fonts';
import Header from '../../../../components/Header';
import {HomeLogo} from '../../../../assets/images';

const OverView = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        type="white"
        titleStyle={styles.headerTitle}
        title="OverView"
        containerStyle={Platform.OS == 'android' ? {marginTop: 35} : {}}
      />
      <View style={styles.topView}>
        <View style={styles.flexRow}>
          <HomeLogo
            height={40}
            width={40}
            style={{alignSelf: 'center', marginRight: 10}}
          />
          <Text style={[styles.text16LightP, {alignSelf: 'center'}]}>
            MRCS Boot Camp UK
          </Text>
        </View>
        <View>
          <Text style={[styles.text16SemiP]}>Part B Subscription</Text>
          <Text style={[styles.text12RegP67, {fontSize: 13}]}>
            Pricing Plan
          </Text>
        </View>
        <View style={styles.br} />
        <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
          <Text style={[styles.text16RegP, {alignSelf: 'flex-end'}]}>£349</Text>
        </View>
      </View>
      <View style={styles.fatDivider} />
      <View style={styles.subscriptionContainer}>
      <Text style={[styles.text12SemiP,{marginVertical:20}]}>SUBSCRIPTION DETAILS</Text>

      <SubTextNDetail 
      subText={'Purchase date'}
      detailsText={'Jan 10,2024'}
      isBr={true}
      />
      <SubTextNDetail 
      subText={'Start date'}
      detailsText={'Jan 10,2024'}
      isBr={true}
      />
       <SubTextNDetail 
      subText={'End date'}
      detailsText={'Mays 10,2024'}
      isBr={true}
      />
      <SubTextNDetail 
      subText={'Payment Method'}
      detailsText={'Offline'}
      isBr={true}
      />
      <SubTextNDetail 
      subText={'Last payment status'}
      detailsText={'Unpaid'}
      detailsTextStyle={{color:'#BA711A'}}
      />
      </View>
    </SafeAreaView>
  );
};

interface SubTextNDetailProps{
    subText:string,
    detailsText:string,
    isBr?:boolean,
    detailsTextStyle?:TextStyle
}

const SubTextNDetail:FC<SubTextNDetailProps> = ({
subText,
detailsText,
isBr,
detailsTextStyle
})=>{
    return (
      <View style={{marginBottom:15}}>
        <Text style={[styles.text12RegP67]}>{subText}</Text>
        <Text style={[styles.text15RegP,detailsTextStyle]}>{detailsText}</Text>
        {isBr && <View style={[styles.br,{marginTop:15}]} />}
      </View>
    );
}

export default OverView;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 16,
    color: DarkBlue,
    alignSelf: 'center',
    marginTop: Platform.OS == 'android' ? 3 : 0,
    marginLeft: 30,
  },
  flexRow: {
    flexDirection: 'row',
  },
  topView: {
    marginLeft: 20,
    height: 200,
    marginTop: 20,
    justifyContent: 'space-around',
  },
  br: {
    backgroundColor: DDDDDD,
    height: 1,
  },
  fatDivider: {
    backgroundColor: grayE8EB,
    height: 8,
    marginTop: 15,
  },

  text16RegP: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 16,
    color: secondaryTextColor,
  },
  text16SemiP: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 18,
    color: secondaryTextColor,
  },
  text16LightP: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 16,
    color: secondaryTextColor,
  },
  text12SemiP: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 12,
    color: secondaryTextColor,
  },

  text12RegP67: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 12,
    color: LightGrayColor,
  },
  text15RegP: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 15,
    color: secondaryTextColor,
    marginTop:5,
  },
  subscriptionContainer:{
    marginLeft:20
  }
});
