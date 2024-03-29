import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  NativeModules,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchCustom from '../../../../components/SearchCustom';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../../../components/CustomButton';
import {
  LightBlue,
  LightGrayColor,
  grayD9,
  grayE8EB,
  gray8E,
  secondaryTextColor,
  white,
} from '../../../../theme/Colors';
import Fonts from '../../../../assets/Fonts';

import Modal from 'react-native-modal';

import {BlueTick, Filter} from '../../../../assets/images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const filterArray = [
  'Best match',
  'Recent activity',
  'Newest post',
  'Most comments',
  'Most reactions',
];

const ForumSearchPost = () => {
  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const insets = useSafeAreaInsets()

  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [categorButton, setCategorButton] = useState('All');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selctedIndex, setSelctedIndex] = useState(0);

  const _renderItem = ({item, index}: {item: string; index: number}) => {
    return (
      <TouchableHighlight underlayColor={grayE8EB}  onPress={()=>{
        setSelctedIndex(index)
        setIsModalVisible(false)
        }}>
        <View style={styles.itemButton}>
        <Text style={styles.itemBtnText}>{item}</Text>
        {selctedIndex == index && (
          <BlueTick style={{alignSelf: 'center'}} height={13} width={17} />
        )}
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} />
      <SearchCustom
        titleText="Search"
        isSearch={true}
        onPress={() => console.log('dd')}
        onChangeText={text => {
          setSearchText(text);
        }}
        containerStyle={{marginTop:Platform.OS=='android'?insets.top+5:0
      }}
        onCancel={() => navigation.goBack()}
      />
      <View style={styles.btnRow}>
        <CustomButton
          buttonStyle={[
            categorButton == 'All' ? styles.altButtonStyle : styles.buttonStyle,
            {marginRight: 10},
          ]}
          textStyle={[
            categorButton == 'All' ? styles.altBtnTexStyle : styles.btnTexStyle,
          ]}
          onPress={() => setCategorButton('All')}
          title="All Categories"
          validate={false}
          isTouchableHighLight={true}
        />
        <CustomButton
          buttonStyle={[
            categorButton == 'Gen' ? styles.altButtonStyle : styles.buttonStyle,
          ]}
          textStyle={[
            categorButton == 'Gen' ? styles.altBtnTexStyle : styles.btnTexStyle,
          ]}
          onPress={() => setCategorButton('Gen')}
          title="General Disscussion"
          validate={false}
          isTouchableHighLight={true}
        />
      </View>
      <View style={[styles.rowSpaceBetween, {marginHorizontal: 20}]}>
        <Text style={[styles.recentText]}>{filterArray[selctedIndex]}</Text>
        <TouchableOpacity
          style={styles.filterContainer}
          onPress={() => setIsModalVisible(!isModalVisible)}>
          <Filter style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      {true && <View style={{marginTop: 10}}>
        <Text
          style={[styles.recentText, {alignSelf: 'center', marginVertical: 0}]}>
          Search the forum
        </Text>
        <Text style={[styles.text12]}>
          Enter a keyword to search for posts, commens or members
        </Text>
      </View>}

      {false && <View style={{marginTop: 10}}>
        <Text
          style={[styles.recentText, {alignSelf: 'center', marginVertical: 0}]}>
          No Result Found
        </Text>
        <Text style={[styles.text12,{textAlign:'left'}]}>
          We couldn't find what you're looking for. Try another search.
        </Text>
      </View>}

      <Modal
        isVisible={isModalVisible}
        style={{justifyContent: 'flex-end'}}
        backdropColor="rgba(0,0,0,0.26)"
        onBackdropPress={() => setIsModalVisible(false)}
        onSwipeComplete={() => setIsModalVisible(false)}
        useNativeDriverForBackdrop
        swipeDirection={['down']}>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: 'white',
            marginBottom: 20,
          }}>
          <View style={styles.modalNotch} />
          <Text style={styles.modalTitleText}>Sort results by</Text>
          <View style={styles.br} />
          <FlatList
            data={filterArray}
            renderItem={_renderItem}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};



export default ForumSearchPost;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomSheetContentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: white,
    height: 23,
    borderRadius: 35,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: grayE8EB,
  },

  btnTexStyle: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 12,
    color: secondaryTextColor,
  },
  altButtonStyle: {
    backgroundColor: white,
    height: 23,
    borderRadius: 35,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: LightBlue,
  },

  altBtnTexStyle: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 12,
    color: LightBlue,
  },
  btnRow: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  filterIcon: {
    height: 15,
    width: 19,
    alignSelf: 'center',
    marginRight: 10,
  },
  recentText: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    color: secondaryTextColor,
    marginVertical: 14,
  },
  text12: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 12,
    color: LightGrayColor,
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  modalNotch: {
    width: 50,
    height: 4,
    borderRadius: 5,
    backgroundColor: grayE8EB,
    marginTop: 10,
    alignSelf: 'center',
  },
  modalTitleText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: gray8E,
    marginHorizontal: 20,
  },
  br: {
    marginTop: 15,
    height: 1,
    width: 'auto',
    backgroundColor: grayD9,
  },
  itemButton: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical:15,
    flexDirection:'row'
  },
  itemBtnText: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
});
