import React, { useState } from 'react';
import { Image, Platform, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { DarkBlue, white } from '../../../../theme/Colors';
import Header from '../../../../components/Header';
import { GalleryNormal, GallerySquareCheck } from '../../../../assets/images';
import MasonryList from '@react-native-seoul/masonry-list';

const GalleryScreen = () => {
  const [toggle, setToggle] = useState(false);

  // Function to generate random height for each row
  const getRandomHeightForRow = () => {
    const minHeight = 150; // Minimum height for the items in a row
    const maxHeight = 300; // Maximum height for the items in a row

    return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
  };

  const getRandomWidth = () => {
    const minWidth = 100; // Minimum width for the items
    const maxWidth = 200; // Maximum width for the items

    return Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
  };
  
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={'Gallery'}
        titleStyle={{ alignSelf: 'center', marginTop: 15 }}
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
      <MasonryList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        numColumns={toggle ? 1 : 2}
        contentContainerStyle={{paddingBottom:50}}
        showsVerticalScrollIndicator={false}
        loading={false}
        renderItem={({ item, index }) => (
          <Image
            source={require('../../../../assets/images/home/fame.png')}
            style={[styles.londonImage, { height: index % 2 === 0 ? getRandomHeightForRow() : getRandomHeightForRow(), }]}
            resizeMode="cover"
          />
        )}
       
      />
    </View>
  );
};

export default GalleryScreen;

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
  iconRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  icon: {
    alignSelf: 'center',
    marginRight: 15,
  },
  londonImage: {
    marginTop: 20,
    alignSelf: 'center',
    width: '90%',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
