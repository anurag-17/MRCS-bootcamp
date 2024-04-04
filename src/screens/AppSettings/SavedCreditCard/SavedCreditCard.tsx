import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Fonts from '../../../assets/Fonts'
import { DarkBlue, secondaryTextColor } from '../../../theme/Colors'
import Header from '../../../components/Header'
import { CreditCard } from '../../../assets/images'
import CustomButton from '../../../components/CustomButton'

const SavedCreditCard = () => {
  return (
   <View style={styles.mainContanier}>
    <Header
        type="blue"
        title={'Saved Cards'}
        titleStyle={styles.settingsTitle}
        containerStyle={styles.headerStyle}
        onPost={()=>null}
        isPost={true}
        postText='Add'
      />
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <CreditCard/>
        <Text style={styles.textBold}>{'Save Time by Adding a Credit Card'}</Text>
        <Text style={styles.textRegular}>{'For a quicker, easier checkout, store your card details here.'}</Text>
        <CustomButton
        buttonStyle={{backgroundColor:DarkBlue,paddingHorizontal:30,marginVertical:30}}
        textStyle={{fontFamily:Fonts.POPPINS_SEMIBOLD,}}
        onPress={() => null}
        title="Add Card"
        validate={false}
      />
      </View>
   </View>
  )
}

export default SavedCreditCard

const styles = StyleSheet.create({
    mainContanier:{
        flex:1,
        backgroundColor:'white'
    },
    settingsTitle: {
        alignSelf: 'center',
        marginTop: 15,
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
      textBold:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        color:secondaryTextColor,
        marginHorizontal:37,
        marginTop:50,
        textAlign:'center'
      },
      textRegular:{
        fontSize:14,
        fontFamily:Fonts.POPPINS_REGULAR,
        color:secondaryTextColor,
        marginHorizontal:55,
        marginTop:15,
        textAlign:'center'
      }
    
})