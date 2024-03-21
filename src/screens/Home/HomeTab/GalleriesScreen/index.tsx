import React from 'react'
import { Platform, Pressable, SafeAreaView, StatusBar, StyleSheet,View } from 'react-native'
import { DarkBlue, grayOuterLine, white } from '../../../../theme/Colors'
import Header from '../../../../components/Header'

const Gallaries = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={'Galleries'}
        titleStyle={{alignSelf:'center',marginTop:15}}
        containerStyle={styles.headerStyle}
        isThreeDots={true}
      />
       <Pressable onPress={() => null}>
        <View style={styles.multiImageContainer}>
          <View style={styles.firstImage} />
          <View style={styles.rightImageContainer}>
            <View style={styles.quarterImageContainer}>
              <View style={styles.quarterImage} />
              <View style={styles.quarterImage} />
            </View>
            <View style={styles.quarterImageContainer}>
              <View style={styles.quarterImage} />
              <View style={styles.quarterImage} />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default Gallaries

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:white
    },
    headerStyle: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        borderWidth:1,
        justifyContent:'space-between',
        backgroundColor: DarkBlue,
        paddingTop: Platform.OS == 'android' ? 25 : 40,
        height: Platform.OS == 'android' ? 90 : 100,
      },
    multiImageContainer:{
        marginTop:20,
        height:160,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20
    },
    firstImage:{
        height:158,
        backgroundColor:grayOuterLine,
        width:'48%',
        borderRadius:3,
    },
    rightImageContainer:{
        width:'50%',
        height:158,
        justifyContent:'space-between'
    },
    quarterImageContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    quarterImage:{
        width:'48%',
        height:75,
        backgroundColor:grayOuterLine,
        borderRadius:3,
    },
})