import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DarkBlue,
  LightBlueADD,
  LightGrayColor,
  grayE8EB,
  secondaryTextColor,
  white,
} from '../../../../../theme/Colors';
import {
  AddMemberIcon,
  Cross,
  ShareLinkIcon,
} from '../../../../../assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Fonts from '../../../../../assets/Fonts';
import {
  Avatar,
  Button,
  Checkbox,
  Colors,
  ListItem,
  Text,
} from 'react-native-ui-lib';
import Header from '../../../../../components/Header';
import SearchCustom from '../../../../../components/SearchCustom';

interface rowItemDataInterface {
  name: string;
  selected: boolean;
}

const rowItemData: rowItemDataInterface[] = [
  {
    name: 'Alrazi',
    selected: false,
  },
  {
    name: '3559443',
    selected: false,
  },
  {
    name: '38599443',
    selected: false,
  },
  {
    name: '63559443',
    selected: false,
  },
  {
    name: 'aabakc',
    selected: false,
  },
  {
    name: 'abashir',
    selected: false,
  },
  {
    name: 'abid',
    selected: false,
  },
  {
    name: 'aditya',
    selected: false,
  },
  {
    name: 'add565',
    selected: false,
  },
];

const AddMembers = () => {
  const navigation = useNavigation() as NavigationProp<any>;
  const [searchText, setSearchText] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [nameData, setNameData] = useState(rowItemData);

  const toggleSelecteAll = () => {
    const updatedData = [...nameData];
    const allSelected = updatedData.every(item => item.selected);
    setSelectAll(!allSelected);
    const updateValue = updatedData.map(item => ({
      ...item,
      selected: !allSelected,
    }));
    setNameData(updateValue);
  };
  
  const singleSelect = (index: number) => {
    const updatedData = [...nameData];
    updatedData[index].selected = !updatedData[index].selected;
    
    const allSelected = updatedData.every(item => item.selected);
    setSelectAll(allSelected);
    setNameData(updatedData);
  };

  const _renderRowItem = ({
    item,
    index,
  }: {
    item: rowItemDataInterface;
    index: number;
  }) => {
    return (
      <ListItem
        activeOpacity={0.9}
        onPress={() => singleSelect(index)}
        style={{marginLeft: 10}}>
        <ListItem.Part left containerStyle={{marginRight: 15}}>
          <Avatar
            size={37}
            backgroundColor={grayE8EB}
            label="3"
            labelColor="white"
          />
        </ListItem.Part>
        <ListItem.Part middle containerStyle={[styles.itemContainer]}>
          <ListItem.Part containerStyle={{marginBottom: 3}}>
            <Text
              color={secondaryTextColor}
              style={{fontFamily: Fonts.POPPINS_MEDIUM, flex: 1, fontSize: 15}}
              numberOfLines={1}>
              {item.name}
            </Text>
            <Checkbox
              onValueChange={() => singleSelect(index)}
              color={DarkBlue}
              value={item.selected}
            />
          </ListItem.Part>
        </ListItem.Part>
      </ListItem>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        type="white"
        titleStyle={styles.headerTitle}
        title="Add Members"
        isPost={true}
        postText="Save"
        onPost={() => null}
        containerStyle={Platform.OS == 'android' ? {marginTop: 35} : {}}
      />
      <SearchCustom
        titleText="Search"
        containerStyle={{
          borderTopWidth: 8,
          borderTopColor: grayE8EB,
          marginTop: 10,
        }}
        placeholderTextColor={secondaryTextColor}
        isSearch={true}
        onPress={() => console.log('dd')}
        onChangeText={text => {
          setSearchText(text);
        }}
      />

      <FlatList
        ListHeaderComponent={() => (
          <ListItem
            activeOpacity={0.9}
            onPress={toggleSelecteAll}
            style={{marginLeft: 10}}>
            <ListItem.Part middle containerStyle={[styles.itemContainer]}>
              <ListItem.Part containerStyle={{marginBottom: 3}}>
                <Text
                  color={secondaryTextColor}
                  style={{
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    flex: 1,
                    fontSize: 15,
                  }}
                  numberOfLines={1}>
                  {'Select All'}
                </Text>
                <Checkbox
                  onValueChange={toggleSelecteAll}
                  color={DarkBlue}
                  value={selectAll}
                />
              </ListItem.Part>
            </ListItem.Part>
          </ListItem>
        )}
        data={nameData}
        renderItem={_renderRowItem}
      />
    </SafeAreaView>
  );
};

export default AddMembers;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    color: DarkBlue,
    marginLeft: 30,
  },
  text_12_semi: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 12,
    alignSelf: 'center',
  },
  text_14_semi: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    alignSelf: 'center',
  },
  text_16: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 16,
    alignSelf: 'center',
  },
  text_14_light: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 14,
    alignSelf: 'center',
  },
  inviteLinkRow: {
    backgroundColor: LightBlueADD,
    height: 40,
    marginTop: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 7,
  },
  linkIcon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginRight: 8,
    tintColor: LightGrayColor,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: grayE8EB,
    paddingRight: 15,
  },
});
