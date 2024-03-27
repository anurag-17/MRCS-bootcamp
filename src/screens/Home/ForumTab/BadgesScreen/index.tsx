import React from 'react'
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DarkBlue, LightGrayColor, grayD9, grayE8EB, green00A, white } from '../../../../theme/Colors'
import Header from '../../../../components/Header'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import IconButton from '../../../../components/IconButton'
import Fonts from '../../../../assets/Fonts'

const BadgesScreen = () => {
    
    const navigation = useNavigation() as NavigationProp<any>
    const route =useRoute() 
    const {isAll} = route.params

    console.log("isAll : ",isAll)
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={'Badges'}
        containerStyle={styles.headerStyle}
        subTitle={'MRCS Boot Camp UK'}
        isThreeDots={true}
        onPressDots={() => console.log('workign ...')}
      />
      <View style={styles.badgeContainer}>
        <TouchableOpacity style={styles.buttonOuter} onPress={() => null}>
          <IconButton
            isIcon
            title={'Part B Subscription'}
            isStar={true}
            btnStyle={{width: '42%'}}
          />
          <View style={{flexDirection: 'row'}}>
            {[1, 2].map((item, index) => {
              return (
                <View
                  style={[styles.roundImage, index !== 0 && {marginLeft: -7}]}>
                  <Text style={styles.singleChar}>A</Text>
                </View>
              );
            })}
            <Text style={styles.badgesText}>{`2 badge holders`}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.badgeContainer}>
        <TouchableOpacity style={styles.buttonOuter} onPress={() => null}>
          <IconButton
            title={'Skills April 2024'}
            isStar={false}
            isIcon={false}
            btnStyle={{width: '35%',backgroundColor:green00A}}
          />
          <View style={{flexDirection: 'row'}}>
            {[1, 2].map((item, index) => {
              return (
                <View
                  style={[styles.roundImage, index !== 0 && {marginLeft: -7}]}>
                  <Text style={styles.singleChar}>A</Text>
                </View>
              );
            })}
            <Text style={styles.badgesText}>{`2 badge holders`}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.badgeContainer}>
        <TouchableOpacity style={styles.buttonOuter} onPress={() => null}>
          <IconButton
            title={'Tester'}
            isStar={false}
            isIcon
            btnStyle={{width: '42%'}}
          />
          <View style={{flexDirection: 'row'}}>
            {[1, 2].map((item, index) => {
              return (
                <View
                  style={[styles.roundImage, index !== 0 && {marginLeft: -7}]}>
                  <Text style={styles.singleChar}>A</Text>
                </View>
              );
            })}
            <Text style={styles.badgesText}>{`2 badge holders`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BadgesScreen

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
    buttonOuter: {
        marginTop: 20,
        justifyContent: 'space-between',
        height: 60,
        marginHorizontal:20,
        marginBottom:15,
      },
      badgesText: {
        color: LightGrayColor,
        alignSelf: 'center',
        fontFamily: Fonts.POPPINS_SEMIBOLD,
        fontSize: 12,
        marginLeft: 10,
      },
      roundImage: {
        height: 21,
        width: 21,
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: grayD9,
      },
      singleChar: {
        color: 'white',
        alignSelf: 'center',
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontSize: 13,
      },
      badgeContainer:{
        borderBottomWidth:5,
        borderColor:grayE8EB
        
      }

})