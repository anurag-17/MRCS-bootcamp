import React, { FC } from 'react';
import {FlatList, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  DarkBlue,
  LightGrayColor,
  grayD9,
  grayE8EB,
  knowledgeBlue,
  skillGreen,
  white,
} from '../../../../../theme/Colors';
import {
  useNavigation,
  NavigationProp,
  useRoute,
} from '@react-navigation/native';
import Header from '../../../../../components/Header';
import IconButton from '../../../../../components/IconButton';
import Fonts from '../../../../../assets/Fonts';

interface MemberItemProps{
  name:string,
  membertype:'Admin'| 'Member' |"Private Member",
  lastSeen?:string,
  isActiveNow?:boolean
}

const DATA :MemberItemProps[]= [
  { name:"Avi",
    membertype:'Member',
    lastSeen:'May 31 2023',
    isActiveNow:false
  },
  { name:"Ani",
    membertype:'Admin',
    isActiveNow:true
  },
  { name:"Aki",
    membertype:'Admin',
    isActiveNow:false
  },
  { name:"Bhavya",
    membertype:'Private Member',
    lastSeen:'Mar 21 2023',
    isActiveNow:false
  },
  
]

const BadgesTypeScreen = () => {
  const navigation = useNavigation() as NavigationProp<any>;
  const route = useRoute();
  const {Badgetype, numberOfMember} = route.params;



  const GetBadge = () => {
    if(numberOfMember && Badgetype)
    return (
      <View style={styles.typeContainer}>
        {Badgetype.includes('Part B Subscription' )? (
          <IconButton
            isIcon
            title={'Part B Subscription'}
            isStar={true}
            btnStyle={{width: '40%', alignSelf: 'center', marginTop: 15}}
          />
        ) : Badgetype.includes('Tester') ? (
          <IconButton
            title={'Tester'}
            isStar={false}
            isIcon
            btnStyle={{width: '20%', alignSelf: 'center', marginTop: 15}}
          />
        ) : Badgetype.includes('Skills') ? (
          <IconButton
            title={'Skills April 2024'}
            isStar={false}
            isIcon={false}
            btnStyle={{
              width: '35%',
              backgroundColor: skillGreen,
              marginTop: 15,
              alignSelf:'center'
            }}
          />
        ) : Badgetype.includes('Knowledge') ? (
          <IconButton
            title={'Knowledge March 2024'}
            isStar={false}
            isIcon={false}
            btnStyle={{width: '48%', height:26, backgroundColor: knowledgeBlue,marginTop: 15,
            alignSelf:'center'}}
          />
        ) : null}

        {numberOfMember &&<Text
          style={
            styles.awardedText
          }>{` ${numberOfMember} member were awarded this badge`}</Text>}
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={Badgetype ?? 'Badge Type'}
        containerStyle={styles.headerStyle}
        subTitle={'MRCS Boot Camp UK'}
      />

      {/* <MemberItem
        name='Myat'
        membertype={'Admin'}
        isActiveNow={true}
      /> */}
      <FlatList
        data={DATA}
        ListHeaderComponent={
          GetBadge
        }
        renderItem={({item,index})=><MemberItem
        name={item.name}
        membertype={item.membertype}
        isActiveNow={item.isActiveNow}
        lastSeen={ item.lastSeen && `Last seen ${item.lastSeen}`}
      />}
      />

    </View>
  );
};

interface MemberItemProps{
  name:string,
  membertype:'Admin'| 'Member'|'Private Member',
  lastSeen?:string,
  isActiveNow?:boolean
}
const MemberItem:FC<MemberItemProps> =(
  {
    name,
    membertype,
    lastSeen,
    isActiveNow
  }
)=>{
  return (
  <View style ={styles.memberItemView}>
    <View style={styles.roundImage}>
      <Text style={{color:'white',alignSelf:'center'}}>A</Text>
    </View>
    <View style={styles.memberNameView}>
      <Text style={styles.memberNameTxt}>{name}</Text>
      <Text style={styles.memberTypeTxt}>{`${membertype}`}
        <Text style={styles.timeText}>{membertype=='Admin' && isActiveNow ? ` · Active Now`:lastSeen ? " · "+lastSeen:''}</Text>
      </Text>

    </View>
  </View>
  )
}

export default BadgesTypeScreen;

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
  typeContainer: {
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderColor: grayE8EB,
  },
  awardedText: {
    fontSize: 12,
    color: LightGrayColor,
    fontFamily: Fonts.POPPINS_MEDIUM,
    alignSelf: 'center',
    marginVertical: 10,
  },
  memberItemView:{
    marginLeft:20,
    flexDirection:'row',
    marginTop:15
  },
  roundImage:{
    height:44,
    width:44,
    borderRadius:50,
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:grayD9
  },
  memberNameView:{
    borderBottomWidth:1,
    borderBlockColor:grayE8EB,
    paddingBottom:10,
    marginLeft:15,
    flex:1
  },
  memberNameTxt:{
    fontSize: 12,
    color: LightGrayColor,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
  memberTypeTxt:{
    fontSize: 12,
    color: LightGrayColor,
    fontFamily: Fonts.POPPINS_MEDIUM,
    
  },
  timeText: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: LightGrayColor,
  },
});
