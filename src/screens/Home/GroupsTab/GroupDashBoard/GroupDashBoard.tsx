import React from 'react';
import Header from '../../../../components/Header';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Fonts from '../../../../assets/Fonts';
import {
  white,
  DarkBlue,
  LightGrayColor,
  secondaryTextColor,
  grayE8EB,
  grayEC,
  redFC3D30,
} from '../../../../theme/Colors';
import CustomButton from '../../../../components/CustomButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {CirclePlus, ForwardArrow} from '../../../../assets/images';
import {Avatar} from 'react-native-ui-lib';
interface RowItemInterface {
  name: string;
  onPress: () => void;
  isRed?:boolean
}
const GroupDashBoard = () => {
  const navigation = useNavigation() as NavigationProp<any>;
  const _goTo = (screenName: string) => navigation.navigate(screenName);

  const MemebersData: RowItemInterface[] = [
    {
      name: 'Request to join',
      onPress: () => null,
    },
    {
      name: 'Permissions',
      onPress: () => _goTo('MemberPermissions'),
    },
    {
      name: 'Membership questions',
      onPress: () => _goTo("MembershipQuestions"),
    },
  ];

  const ContentData: RowItemInterface[] = [
    {
      name: 'Description',
      onPress: () => null,
    },
    {
      name: 'Rules',
      onPress: () => _goTo('GroupRules'),
    },
    {
      name: 'Tabs',
      onPress: () => null,
    },
    {
      name: 'Auto posts',
      onPress: () => null,
    },
    {
      name: 'Topics',
      onPress: () => _goTo('TopicsScreen'),
    },
  ];

  const NotificationData:RowItemInterface[] = [
    {
      name:'App',
      onPress:()=>null
    },
    {
      name:'Email',
      onPress:()=>null
    },
    {
      name:'Leave Group',
      onPress:()=>null,
      isRed:true
    },
    {
      name:'Delete Group',
      onPress:()=>null,
      isRed:true
    }
  ]

  const _renderRowItem = ({
    item,
    index,
  }: {
    item: RowItemInterface;
    index: number;
  }) => {
    return (
      <TouchableOpacity onPress={item.onPress} key={index}>
        <View style={styles.itemRow}>
          <Text style={[styles.itemName,item.isRed &&{color:redFC3D30}]}>{item.name}</Text>
         {!item.isRed && <ForwardArrow style={{alignSelf: 'center'}} />}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'Group Dashboard'}
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerStyle}
      />
      <ScrollView>
        <View style={styles.topContainer}>
          <View style={styles.groupImageContainer}>
            <Image
              source={require('../../../../assets/images/group/group.png')}
              style={styles.groupImage}
            />
            <View>
              <Text style={styles.dateText}>May - June 2024 Exam</Text>
              <Text style={styles.groupTypeText}>Private</Text>
            </View>
          </View>
          <CustomButton
            buttonStyle={styles.editButton}
            textStyle={styles.editTxt}
            onPress={() => null}
            title="Edit"
            validate={false}
            isTouchableHighLight
          />
        </View>
        <View style={styles._ItemView}>
          <Text style={styles.h1Text}>Members</Text>
          {MemebersData.map((item, index) => _renderRowItem({item, index}))}
          <TouchableOpacity onPress={() => null}>
            <View style={styles.itemRow}>
              <Text style={styles.itemName}>{'34 Members'}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar
                  size={25}
                  backgroundColor={grayEC}
                  label="A"
                  labelColor="white"
                />
                <Avatar
                  size={25}
                  backgroundColor={grayEC}
                  containerStyle={{marginLeft: -10}}
                  label="A"
                  labelColor="white"
                />
                <Avatar
                  size={25}
                  backgroundColor={grayEC}
                  containerStyle={{marginLeft: -10}}
                  label="A"
                  labelColor="white"
                />
                <ForwardArrow style={{alignSelf: 'center', marginLeft: 10}} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>_goTo('InviteMembers')}>
            <Image source={CirclePlus} style={styles.circlePlus} />
            <Text style={styles.itemName}>{'Invite Members'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles._ItemView}>
          <Text style={styles.h1Text}>Content</Text>
          {ContentData.map((item, index) => _renderRowItem({item, index}))}
        </View>
        <View style={styles._ItemView}>
          <Text style={styles.h1Text}>Events</Text>
          <TouchableOpacity style={{flexDirection: 'row', marginTop: 10}}>
            <Image source={CirclePlus} style={styles.circlePlus} />
            <Text style={styles.itemName}>{'Connect Events'}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles._ItemView,{borderBottomWidth:0,marginBottom:30}]}>
          <Text style={styles.h1Text}>Notifications</Text>
          {NotificationData.map((item, index) => _renderRowItem({item, index}))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GroupDashBoard;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    alignSelf: 'center',
    marginTop: Platform.OS == 'ios' ? 15 : 20,
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
  topContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderBottomColor: grayE8EB,
  },
  groupImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  groupImage: {
    height: 35,
    width: 35,
    borderRadius: 5,
    marginRight: 10,
    alignSelf: 'center',
  },
  dateText: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    color: secondaryTextColor,
  },
  groupTypeText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 13,
    color: LightGrayColor,
  },
  editButton: {
    alignSelf: 'center',
    height: 25,
    paddingHorizontal: 20,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: DarkBlue,
    marginLeft: 20,
  },
  editTxt: {
    color: DarkBlue,
    fontSize: 13,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  itemRow: {
    flexDirection: 'row',
    height: 35,
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  itemName: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 14,
    color: secondaryTextColor,
    alignSelf: 'center',
  },
  h1Text: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 18,
    color: secondaryTextColor,
    marginBottom: 5,
  },
  _ItemView: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: grayE8EB,
  },
  circlePlus: {
    alignSelf: 'center',
    height: 20,
    width: 20,
    marginRight: 10,
  },
});
