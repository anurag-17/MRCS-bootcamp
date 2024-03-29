import React, { useState } from 'react';
import {Platform, StatusBar, StyleSheet, View, Image, Text,FlatList, TouchableOpacity, SectionList, SafeAreaView} from 'react-native';
import Header from '../../../../components/Header';
import {DarkBlue, LightGrayColor, grayD9, grayE8, grayEC, grayOuterLine, secondaryTextColor, white} from '../../../../theme/Colors';
import SearchCustom from '../../../../components/SearchCustom';
import Fonts from '../../../../assets/Fonts';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../../../../components/IconButton';

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

const MembersSearchScreen = () => {
 const [searchText, setSearchText] = useState('');
 const [filteredData, setFilteredData] = useState(DATA);

  // Function to filter data based on search text
  const filterData = (text) => {
    const newData = DATA.filter((item) => {
        const itemData = item.data.filter((subItem) => {
            const itemName = subItem.name.toLowerCase();
            const textData = text.toLowerCase();
            return itemName.indexOf(textData) > -1;
        });
        return itemData.length > 0;
    });
    setFilteredData(newData);
};

// Render item component
const renderListItem = ({ item }) => (
    // Render your list item component here
    <MembersItem
        name={item.name}
        imageUri={item.imageUri}
        isFollow={true}
        onPress={() => console.log('done..')}
        onPressFollow={() => console.log('foll')}
    />
);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        type="white"
        titleStyle={styles.headerTitle}
        title="Search Members"
        isLogo={false}
        isThreeDots={true}
        containerStyle={ Platform.OS=='android'? {marginTop:35}:{}}
      />
      <View style={{height:10}}/>
      <SearchCustom
        titleText="Search 1695 members"
        isSearch={true}
        onPress={() => console.log('dd')}
        onChangeText={(text) => {
            setSearchText(text);
            filterData(text);
        }}      />
      
      {searchText.length > 0 ? (
                // If search text exists, render filtered data or show "No members found" text
                filteredData.length > 0 ? (
                    <SectionList
                        sections={filteredData}
                        keyExtractor={(item, index) => item + index}
                        renderItem={renderListItem}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.sectionHeader}>{title}</Text>
                        )}
                    />
                ) : (
                    <Text style={styles.noMemberText}>No members found</Text>
                )
            ) : (
                // Otherwise, render the entire data
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderListItem}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.sectionHeader}>{title}</Text>
                    )}
                />
            )}
    </SafeAreaView>
  );
};


interface MembersItemProps {
  name: string;
  imageUri?: boolean;
  onPress:()=>void;
  isFollow?:boolean;
  onPressFollow:()=>void;
  isSubscription?:boolean

}

const MembersItem: React.FC<MembersItemProps> = ({name, imageUri,onPress,onPressFollow,isFollow,isSubscription}) => {
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
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.nameText}>{name}</Text>
          <View style={[styles.flexRow]}>
            <Text style={styles.memberText}>{'Private member'}</Text>
            {!isSubscription &&<Text
              style={styles.lastSeenText}
              ellipsizeMode="tail"
              numberOfLines={1}>
              . Last seen Jan 4, 2023{' '}
            </Text>}
          </View>
          {isSubscription && (
            <IconButton
              isIcon
              title={'Part B Subscription'}
              isStar={true}
            />
          )}
        </View>
      </View>
      {isFollow == true && (
        <TouchableOpacity style={styles.followBtn} onPress={onPressFollow}>
          <Text style={[styles.nameText, {alignSelf: 'center'}]}>Follow</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default MembersSearchScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    color: secondaryTextColor,
    marginLeft: 20,
    alignSelf: 'center',
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: white,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },
  noMemberText:{
    marginTop:10,
    fontFamily:Fonts.POPPINS_REGULAR,
    color:LightGrayColor,
    alignSelf:'center',
    fontSize:14
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
