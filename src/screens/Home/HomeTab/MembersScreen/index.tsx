import React from 'react';
import {Platform, StatusBar, StyleSheet, View, Image, Text,FlatList, TouchableOpacity, SectionList} from 'react-native';
import Header from '../../../../components/Header';
import {DarkBlue, LightGrayColor, grayD9, grayE8, grayEC, grayOuterLine, secondaryTextColor, white} from '../../../../theme/Colors';
import SearchDisable from '../../../../components/SearchCustom';
import Fonts from '../../../../assets/Fonts';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const DATA = [
    {
        title: 'A',
        data: [
            { name: 'Anuj', imageUri: false },
            { name: 'Akash', imageUri: false },
        ],
    },
    {
        title: 'B',
        data: [
            { name: 'Bhavya', imageUri: false },
            { name: 'Bhavesh', imageUri: false },
        ],
    },
    {
        title: 'Numbers',
        data: [
            { name: '3233232322', imageUri: false },
            { name: '323323234323', imageUri: false },
            { name: '43434232322', imageUri: false },
            { name: '435542232322', imageUri: false },
            { name: '56742232322', imageUri: false },
            { name: '6742232322', imageUri: false },
        ],
    },
];

const MembersScreen = () => {
  const navigation = useNavigation() as NavigationProp<any>

  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={'Members'}
        containerStyle={styles.headerStyle}
        subTitle={'MRCS Boot Camp UK'}
        isThreeDots={true}
        
      />
      <SearchDisable
        titleText="Search 1695 members"
        onPress={() => navigation.navigate('MembersSearchScreen')}
      />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, index, section}) => (
          <>
            <MembersItem
              name={item.name}
              imageUri={item.imageUri}
              onPress={() => console.log('done..')}
              onPressFollow={() => console.log('foll')}
            />
            {index !== section.data.length - 1 && <View style={styles.br} />}
          </>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </View>
  );
};


interface MembersItemProps {
  name: string;
  imageUri?: boolean;
  onPress:()=>void;
  onPressFollow:()=>void;

}

const MembersItem: React.FC<MembersItemProps> = ({name, imageUri,onPress,onPressFollow}) => {
  return (
    <TouchableOpacity style={styles.membersItemContainer} onPress={onPress}>
      <View style={styles.flexRow}>
        {imageUri ? (
          <Image style={styles.roundImage} />
        ) : (
          <View style={styles.roundImage}>
            <Text
              style={{
                color: white,
                fontFamily: Fonts.POPPINS_MEDIUM,
                fontSize: 16,
              }}>
              {name.charAt(0)}
            </Text>
          </View>
        )}
        <View style={{alignSelf:'center'}}>
            <Text style={styles.nameText}>{name}</Text>
            <View style={[styles.flexRow]}>
            <Text style={styles.memberText}>{"Private member"}
            </Text>
            <Text style={styles.lastSeenText} ellipsizeMode='tail' numberOfLines={1}>. Last seen Jan 4, 2023 </Text>
            </View>
        </View>
      </View>
      <TouchableOpacity style={styles.followBtn} onPress={onPressFollow}>
      <Text style={[styles.nameText,{alignSelf:'center'}]}>Follow</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MembersScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
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
  membersItemContainer: {
    backgroundColor:white,
    paddingHorizontal: 20,
    paddingVertical:10,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  roundImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: grayEC,
    justifyContent:'center',
    marginRight:15
  },
  flexRow:{
    flexDirection:'row'
  },
  nameText:{
    fontFamily:Fonts.POPPINS_SEMIBOLD,
    color:DarkBlue,
    fontSize:14
  },
  memberText:{
    fontFamily:Fonts.POPPINS_MEDIUM,
    color:LightGrayColor,
    alignSelf:'center',
    fontSize:12
  },
  lastSeenText:{
    fontFamily:Fonts.POPPINS_LIGHT,
    color:LightGrayColor,
    alignSelf:'center',
    fontSize:12,
  },
  followBtn:{
    alignSelf:'center',
    height:40,
    width:60,
    justifyContent:'center'
  },
  br:{
    backgroundColor:grayEC,
    height:1,
    width:'78.5%',
    marginLeft:'auto'
  },
  sectionHeader: {
    backgroundColor: grayEC,
    paddingHorizontal: 20,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: LightGrayColor,
    fontSize: 12,
},
initialText: {
    color: white,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
},
});
