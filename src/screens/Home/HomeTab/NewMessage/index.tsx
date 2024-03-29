import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DarkBlue,
  LightGrayColor,
  blueTypeTextColor,
  grayE8EB,
  grayEC,
  grayF1,
  white,
} from '../../../../theme/Colors';
import Fonts from '../../../../assets/Fonts';
import Header from '../../../../components/Header';
import SearchCustom from '../../../../components/SearchCustom';
import MembersItem from '../../../../components/MembersItem';
import {BootCampRoundLogo, GroupChat} from '../../../../assets/images';

const DATA = [
  {
    title: '3',
    data: [
      {name: '3233232322', imageUri: false},
      {name: '323323234323', imageUri: false},
      {name: '3708853', imageUri: false},
      {name: '3moorysobeah', imageUri: false},
      {name: '3bdallah77ahmed', imageUri: false},
    ],
  },
  {
    title: '4',
    data: [{name: '472100mag', imageUri: false}],
  },
  {
    title: '6',
    data: [{name: '64832923', imageUri: false}],
  },
  {
    title: '6',
    data: [{name: '64832923', imageUri: false}],
  },
  {
    title: 'A',
    data: [
      {name: 'Anuj', imageUri: false},
      {name: 'Akash', imageUri: false},
    ],
  },
  {
    title: 'B',
    data: [
      {name: 'Bhavya', imageUri: false},
      {name: 'Bhavesh', imageUri: false},
    ],
  },
];

const NewMessage = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  // Function to filter data based on search text
  const filterData = (text: string) => {
    const newData = DATA.filter(item => {
      const itemData = item.data.filter(subItem => {
        const itemName = subItem.name.toLowerCase();
        const textData = text.toLowerCase();
        return itemName.indexOf(textData) > -1;
      });
      return itemData.length > 0;
    });
    setFilteredData(newData);
  };

  const renderListItem = ({item}) => (
    // Render your list item component here
    <MembersItem
      name={item.name}
      imageUri={item.imageUri}
      onPress={() => console.log('done..')}
      onPressFollow={() => console.log('foll')}
    />
  );

  const _sectionListHeader = (isLast:boolean) => {
    return (
      <View style={styles.listHeaderView}>
        <TouchableOpacity  onPress={() => null}>
          <View style={styles.flexRow}>
            <View style={styles.groupBgRound}>
              <GroupChat height={30} width={30} style={styles.groupImage} />
            </View>
            <View style={styles.groupContainer}>
              <Text style={styles.groupNameText}>New Group Chat</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <View style={[styles.flexRow]}>
            <BootCampRoundLogo
              height={40}
              width={40}
              style={styles.groupImage}
            />
            <View style={[styles.groupContainer,isLast ?{borderBottomWidth:1}:{borderBottomWidth:0}]}>
              <Text style={styles.groupNameText}>MRCS Boot Camp UK</Text>
              <View style={styles.officialView}>
                <Text style={styles.officialText}>Official</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        type="white"
        titleStyle={styles.headerTitle}
        title="New Message"
        containerStyle={[
          {marginBottom: 10},
          Platform.OS == 'android' ? {marginTop: 35} : {},
        ]}
      />

      <SearchCustom
        titleText="Search 1722 members"
        isSearch={true}
        onPress={() => console.log('dd')}
        onChangeText={text => {
          setSearchText(text);
          filterData(text);
        }}
      />
      {searchText.length > 0 ? (
        // If search text exists, render filtered data or show "No members found" text
        filteredData.length > 0 ? (
          <SectionList
            ListHeaderComponent={()=>_sectionListHeader(false)}
            stickySectionHeadersEnabled
            sections={filteredData}
            keyExtractor={(item, index) => (item.name + index).toString()}
            renderItem={renderListItem}
            showsVerticalScrollIndicator={false}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        ) : (
          <>
          {_sectionListHeader(true)}
          <Text style={styles.noMemberText}>No members found</Text>
          </>
        )
      ) : (
        // Otherwise, render the entire data
        <SectionList
          ListHeaderComponent={()=>_sectionListHeader(false)}
          stickySectionHeadersEnabled
          sections={DATA}
          keyExtractor={(item, index) => (item.name + index).toString()}
          renderItem={renderListItem}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default NewMessage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 16,
    color: DarkBlue,
    alignSelf: 'center',
    marginTop: Platform.OS == 'android' ? 3 : 0,
    marginLeft: 30,
  },
  sectionHeader: {
    backgroundColor: grayEC,
    paddingHorizontal: 20,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: LightGrayColor,
    fontSize: 12,
  },
  noMemberText: {
    marginTop: 10,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: LightGrayColor,
    alignSelf: 'center',
    fontSize: 14,
  },
  listHeaderView: {},

  flexRow: {
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 20,
  },
  groupBgRound: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: grayF1,
    justifyContent: 'center',
  },
  groupImage: {
    alignSelf: 'center',
  },
  groupContainer: {
    borderBottomWidth: 1,
    borderColor: grayE8EB,
    flexDirection: 'row',
    height: 50,
    flex: 1,
    justifyContent: 'space-between',
  },
  officialView: {
    backgroundColor: grayF1,
    height: 18,
    borderRadius: 3,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginRight: 20,
  },
  officialText: {
    color: LightGrayColor,
    fontSize: 10,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    alignSelf: 'center',
  },
  groupNameText: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: blueTypeTextColor,
    fontSize: 14,
    alignSelf: 'center',
    marginLeft: 15,
  },
});
