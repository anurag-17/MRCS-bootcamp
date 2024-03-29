import React from 'react'
import { View, StyleSheet, Platform, Image, Text, FlatList } from 'react-native'
import { white, DarkBlue, grayD9, black11, secondaryTextColor, LightGrayColor, grayOuterLine } from '../../../theme/Colors'
import Header from '../../../components/Header'
import LeftRightText from '../../../components/LeftRightText'
import Fonts from '../../../assets/Fonts'

const OrdersScreen = () => {

  const _renderOrderItem = ()=>{
    return <>
    <View style={styles.orderView}>
      <View style={styles.imageIcon}/>
      <View style={styles.righContainer}>
          <View>
            <Text style={styles.dateText} >March 9, 2024</Text>
            <Text style={styles.orderNumber} >Order 11385-1 item</Text>

          </View>
          <Text style={styles.priceText} >£299.00</Text>

      </View>
    </View>
    <View style={styles.grayBr}/>
    </>
  }

  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'Orders'}
        titleStyle={styles.ordersTitle}
        containerStyle={styles.headerStyle}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1,2,3,4,5,6,8,9,67,8,6,6,]}
        renderItem={_renderOrderItem}
      />
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: white,
    },
    ordersTitle:{
      alignSelf: 'center', 
      marginTop: 15,
      fontSize:15,
      fontFamily:Fonts.POPPINS_SEMIBOLD
    },
    headerStyle: {
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: DarkBlue,
      paddingTop: Platform.OS == 'android' ? 25 : 40,
      height: Platform.OS == 'android' ? 90 : 100,
    },
    
    orderView:{
      marginTop:10,
      flexDirection:'row'
    },
    imageIcon:{
      height:61,
      width:61,
      marginHorizontal:20,
      alignSelf:'center',
      backgroundColor:grayD9
    },
    righContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      flex:1,
      paddingTop:10
    },
    dateText:{
      fontFamily:Fonts.POPPINS_SEMIBOLD,
      fontSize:16,
      color:secondaryTextColor,

    },
    priceText:{
      fontFamily:Fonts.POPPINS_SEMIBOLD,
      fontSize:14,
      color:secondaryTextColor,
      marginRight:20
    },
    orderNumber:{
      fontFamily:Fonts.POPPINS_REGULAR,
      fontSize:14,
      color:LightGrayColor
    },
    grayBr:{
      height:1, 
      width:'74%',
      alignSelf:'flex-end',
      backgroundColor:grayOuterLine,
      marginTop:10
    }
  
  })