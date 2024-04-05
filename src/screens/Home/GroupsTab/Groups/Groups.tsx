import React, { useState } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  ImageBackground,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Fonts from '../../../../assets/Fonts';
import {
  DarkBlue,
  LightBlueADD,
  blueTypeTextColor,
  grayE8,
  secondaryTextColor,
  white,
} from '../../../../theme/Colors';
import Header from '../../../../components/Header';
import ExamStudyCard from '../../../../components/ExamStudyCard';
import { Cross, ForwardArrow, MemberPlus, Search, SearchIcon } from '../../../../assets/images';

const Groups = () => {
    const [searchToggle, setSearchToggle] = useState(false);
    const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'Groups'}
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerStyle}
      />
      <View style={styles.searchBox}>
        {!searchToggle ? (
          <>
            <Text style={[styles.text13Semi_sec, {fontSize: 16}]}>
              Group List
            </Text>
            <TouchableOpacity onPress={() => setSearchToggle(true)}>
              <SearchIcon />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <SearchIcon style={{marginRight:10}} />
            <TextInput
                placeholder='Search'
                onChangeText={(txt)=>setSearchText(txt)}
            />
            </View>
            <TouchableOpacity
              onPress={() => setSearchToggle(false)}>
                <Cross height={14}/>
              </TouchableOpacity>
          </>
        )}
      </View>
      <View style={styles.memberReqBox}>
        <View style={{flexDirection: 'row'}}>
          <MemberPlus style={{marginRight: 10, alignSelf: 'center'}} />
          <View>
            <Text style={[styles.text13Semi_sec, {height: 20}]}>
              Member request (2)
            </Text>
            <Text style={[styles.text13Reg_sec]}>
              Review new requests to join groups
            </Text>
          </View>
        </View>
        <ForwardArrow />
      </View>
      <Text style={styles.leftGroupText}>{'MY GROUPS'}</Text>
      <View style={{flexDirection: 'row'}}>
        <ImageBackground
          style={styles.groupsBgImage}
          source={require('../../../../assets/images/group/group.png')}>
          <Text style={styles.imageBgText}>May - June 2024 Exam...</Text>
        </ImageBackground>
        <ImageBackground
          style={styles.groupsBgImage}
          source={require('../../../../assets/images/group/group.png')}>
          <Text style={styles.imageBgText}>May - June 2024 Exam...</Text>
        </ImageBackground>
      </View>
      <FlatList
        ListHeaderComponent={() => (
          <Text style={styles.leftGroupText}>{'SUGGESTED GROUPS'}</Text>
        )}
        data={[1, 2, 3, 4, 5, 6, 7]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 15}} />}
        renderItem={() => (
          <ExamStudyCard
            image={require('../../../../assets/images/group/suggestedGroup.png')}
            subject="May - June 2024 Exam Cohort"
            onPress={() => console.log('-/')}
            containerStyle={{}}
            subjectStyle={styles.subjectText}
            type="SuggestedGroup"
            btnTitle={`Join Group`}
            numberOfParticipants={23}
            publicMember={false}
            btnTextStyle={{color: blueTypeTextColor}}
            roundImageArray={['']}
          />
        )}
        ListFooterComponent={() => <View style={{marginBottom: 60}} />}
      />
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    alignSelf: 'center',
    marginTop: Platform.OS == 'ios' ? 10 : 20,
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
  searchBox:{
    marginTop:10,
    height:60,
    borderBottomWidth:1,
    borderBottomColor:grayE8,
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:'center',
    justifyContent:'space-between'

  },

  leftGroupText: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 13,
    color: secondaryTextColor,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  groupsBgImage: {
    height: 80,
    width: 105,
    justifyContent: 'center',
    marginLeft: 20,
    borderRadius: 4,
    overflow: 'hidden',
  },
  imageBgText: {
    color: white,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    alignSelf: 'center',
  },
  subjectText: {
    fontSize: 14,
  },
  memberReqBox:{
    backgroundColor:LightBlueADD,
    height:54,
    borderRadius:5,
    marginHorizontal:20,
    flexDirection:'row',
    marginTop:30,
    marginBottom:15,
    paddingHorizontal:15,
    alignItems:'center',
    justifyContent:'space-between'
  },
  text13Reg_sec:{
    fontFamily:Fonts.POPPINS_REGULAR,
    fontSize:13,
    color:secondaryTextColor
  },
  text13Semi_sec:{
    fontFamily:Fonts.POPPINS_SEMIBOLD,
    fontSize:13,
    color:secondaryTextColor
  }
});
