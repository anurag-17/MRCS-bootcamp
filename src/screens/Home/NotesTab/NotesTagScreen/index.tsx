import React, { useState } from 'react';
import { FlatList, Image, Platform, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { DarkBlue, white } from '../../../../theme/Colors';
import Header from '../../../../components/Header';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import NotesTopicItem from '../../../../components/NotesTopicItem';

const NotesTagScreen = () => {
  const navigation = useNavigation() as NavigationProp<any>
  const route = useRoute()

  const {headerName}  = route.params
  
  
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={headerName??''}
        titleStyle={{ alignSelf: 'center', marginTop: 15 }}
        containerStyle={styles.headerStyle}
      />
      <FlatList
        data={[1,2,3,4,5,6,7]}
        renderItem={()=><NotesTopicItem topicName={'Actinomycosis'} screenName={"Surgical Pathology" ?? ''} viewCount={223} chatCount={0} 
        onPress={()=>navigation.navigate('NotesPostScreen')} 
        />
        }
      />
      
    </View>
  );
};

export default NotesTagScreen;

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
  
});
