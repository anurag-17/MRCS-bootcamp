import React, { useState } from 'react';
import { FlatList, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DarkBlue, tertiaryTextColor, white } from '../../../../theme/Colors';
import Header from '../../../../components/Header';
import { GalleryNormal, GallerySquareCheck } from '../../../../assets/images';
import MasonryList from '@react-native-seoul/masonry-list';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import NotesTopicItem from '../../../../components/NotesTopicItem';
import Fonts from '../../../../assets/Fonts';
import CustomButton from '../../../../components/CustomButton';

const NotesPostScreen = () => {
  const [toggle, setToggle] = useState(false);
  const navigation = useNavigation() as NavigationProp<any>
  const route = useRoute()
  
  
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={'Post'}
        titleStyle={{ alignSelf: 'center', marginTop: 15 }}
        containerStyle={styles.headerStyle}
        isThreeDots={true}
      />
      <Text style={styles.topicText}>{'TopicName'}</Text>
      <CustomButton
        buttonStyle={styles.exclusiveButton}
        textStyle={styles.exclusiveText}
        onPress={() => null}
        title="Exclusive"
        validate={false}
      />
      
    </View>
  );
};

export default NotesPostScreen;

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
  topicText: {
    color: tertiaryTextColor,
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 15,
    marginLeft: 20,
    lineHeight: 22,
  },
  exclusiveButton: {
    color: tertiaryTextColor,
    backgroundColor: tertiaryTextColor,
    height: 24,
    borderRadius: 4,
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
    width: 69,
    paddingHorizontal: 0,
  },
  exclusiveText: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: white,
    fontSize: 12,
    borderWidth: 1,
  },
});
