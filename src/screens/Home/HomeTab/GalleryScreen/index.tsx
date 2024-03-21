import React, { useState } from 'react'
import { FlatList, Image, Platform, Pressable, SafeAreaView, StatusBar, StyleSheet,TouchableOpacity,View } from 'react-native'
import { DarkBlue, grayOuterLine, white } from '../../../../theme/Colors'
import Header from '../../../../components/Header'
import { GalleryNormal, GallerySquareCheck } from '../../../../assets/images'
import MasonryList from '@react-native-seoul/masonry-list'
const GalleryScreen = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={'Gallery'}
        titleStyle={{alignSelf: 'center', marginTop: 15}}
        containerStyle={styles.headerStyle}
        isShare={true}
      />
      <View style={styles.iconRow}>
        <TouchableOpacity onPress={() => setToggle(!toggle)}>
          <GallerySquareCheck height={20} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setToggle(!toggle)}>
          <GalleryNormal height={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {
        toggle ?
        <FlatList
        data={[1, 2, 3, 4, 5]}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <Image
            source={require('../../../../assets/images/home/fame.png')}
            style={styles.londonImage}
            resizeMode="cover"
          />
        )}
      />:
      <MasonryList
        data={[1, 2, 3, 4, 5,6,7,8]}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        loading={false}
        renderItem={({item}) => (
          <Image
            source={require('../../../../assets/images/home/fame.png')}
            style={styles.londonImage}
            resizeMode="cover"
          />
        )}
      />}
    </View>
  );
}

export default GalleryScreen

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
    iconRow:{
        flexDirection:'row',
        alignSelf:'flex-end',
        marginTop:20
    },
    icon:{
       alignSelf:'center',
       marginRight:15,
    },
    londonImage:{
        marginTop:20,
        alignSelf:'center',
        width:'90%',
    }
})