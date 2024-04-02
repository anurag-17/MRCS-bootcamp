import React from 'react'
import { View, StyleSheet, Platform, Text, FlatList } from 'react-native'
import Fonts from '../../../assets/Fonts'
import { white, DarkBlue, LightGrayColor, grayD9, grayOuterLine, secondaryTextColor } from '../../../theme/Colors'
import Header from '../../../components/Header'
import { GroupsIcon, GroupsScreenIcon } from '../../../assets/images'

const GroupsScreen = () => {
    const _renderGroupsItem = ()=>{
        return (
          <View>
            <View style={styles.groupView}>
              <GroupsScreenIcon height={44} width={44} style={styles.imageIcon} />
              <View>
                <Text style={styles.dateText} ellipsizeMode="tail">
                  May - June 2024 Exa...
                </Text>
                <Text style={styles.text12Light67}>Private | 14 Members</Text>
                <Text style={styles.text13Reg67}>MRCS Boot Camp UK</Text>
              </View>
            </View>
            <View style={styles.grayBr} />
          </View>
        );
      }

  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'Groups'}
        titleStyle={styles.ordersTitle}
        containerStyle={styles.headerStyle}
      />
      <FlatList
        data={[1,2]}
        renderItem={()=>_renderGroupsItem()}
      />

    </View>
  )
}

export default GroupsScreen

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
    groupView:{
        marginTop:10,
        flexDirection:'row'
      },
      imageIcon:{
        marginHorizontal:20,
        alignSelf:'center',
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
        width:'79%',
        alignSelf:'flex-end',
        backgroundColor:grayOuterLine,
        marginTop:10
      },
      text13Reg67:{
        fontSize:13,
        fontFamily:Fonts.POPPINS_REGULAR,
        color:LightGrayColor
      },
      text12Light67:{
        fontSize:12,
        fontFamily:Fonts.POPPINS_REGULAR,
        color:LightGrayColor
      },
      
})