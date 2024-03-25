import React, { useState } from 'react';
import {Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {white, DarkBlue, LightGrayColor, black, grayE8, grayE8EB, grayD9, grayF1} from '../../../../theme/Colors';
import Header from '../../../../components/Header';
import { MaterialTabBar,   Tabs as Tab,} from 'react-native-collapsible-tab-view';
import Fonts from '../../../../assets/Fonts';
import { PhotoIcon, PollIcon, VideoIcon, clockIcon, locationIcon } from '../../../../assets/images';
import ReactionPost from '../../../../components/ReactionPost';

const EventDetails = () => {
    const tabBar = (props: any) => (
        <MaterialTabBar
          {...props}
          
          activeColor={DarkBlue}
          labelStyle={{fontFamily: Fonts.POPPINS_MEDIUM}}
          indicatorStyle={{backgroundColor: DarkBlue}}
        />
      );
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={'Event Details'}
        titleStyle={{alignSelf: 'center', marginTop: 15}}
        containerStyle={styles.headerStyle}
        isShare={true}
      />
      <Tab.Container allowHeaderOverscroll={false} renderTabBar={tabBar} >
        <Tab.Tab name="About" label="About">
          <Tab.FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{backgroundColor: white}}
            data={['']}
            renderItem={() => <About/>}
          />
        </Tab.Tab>
        <Tab.Tab name="Discussion" label={'Discussion'}>
          <Tab.FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{backgroundColor: white}}
            data={['']}
            renderItem={() => <Discussion/>}
          />
        </Tab.Tab>
      </Tab.Container>
    </View>
  );
};

const About = () => {
    const [showMore, setShowMore] = useState(false);
  return (
  <View style={styles.aboutContainer}>
    <Text style={styles.bootText}>Boot Camp Online Mock</Text>
    <View>
        <View style={styles.iconRow}>
            <Image style={styles.iconStyle} source={clockIcon}/>
            <Text style={styles.iconText}>Mar 29, 2024 4:00 PM</Text>
        </View>
        <View style={styles.iconRow}>
            <Image style={styles.iconStyle} source={locationIcon}/>
            <Text style={styles.iconText}>Online</Text>
        </View>
    </View>
    <View style={{marginTop:20}}>
        <Text style={[styles.paraTextStyle,{fontFamily:Fonts.POPPINS_SEMIBOLD,}]}>About the Event</Text>
        <Text style={[styles.paraTextStyle,]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa beatae aliquid quam magnam voluptates debitis doloribus unde maxime in asperiores vitae earum aut obcaecati nesciunt, quis harum veritatis delectus dolorem!</Text>
        <Text style={[styles.paraTextStyle,]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa beatae aliquid quam magnam voluptates debitis doloribus unde maxime in asperiores vitae earum aut obcaecati nesciunt, quis harum veritatis delectus dolorem!</Text>
    </View>



   {!showMore&& <TouchableOpacity onPress={()=>setShowMore(!showMore)}>
    <Text style={[styles.paraTextStyle,{fontFamily:Fonts.POPPINS_SEMIBOLD,}]}>Show more</Text>
    </TouchableOpacity>}
    {showMore &&
            <>
            
            <Text style={[styles.paraTextStyle,]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa beatae aliquid quam magnam voluptates debitis doloribus unde maxime in asperiores vitae earum aut obcaecati nesciunt, quis harum veritatis delectus dolorem!</Text>
            <Text style={[styles.paraTextStyle,]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa beatae aliquid quam magnam voluptates debitis doloribus unde maxime in asperiores vitae earum aut obcaecati nesciunt, quis harum veritatis delectus dolorem!</Text>
            <TouchableOpacity onPress={()=>setShowMore(!showMore)}>
    <Text style={[styles.paraTextStyle,{fontFamily:Fonts.POPPINS_SEMIBOLD,}]}>Show less</Text>
    </TouchableOpacity>
            </>
    }

  </View>
  );
};

const Discussion = ()=>{
    return (
      <View>
        <View style={styles.fatDivider} />
        <View style={styles.shareSomContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Image style={styles.roundImage} />
            <TouchableOpacity style={styles.shareButton} onPress={() => null}>
              <Text style={styles.sharSomeText}>Share something...</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconMainContainer}>
            <TouchableOpacity style={styles.flexRow}>
              <PhotoIcon height={10} width={12} style={styles.sharSomeIcon} />
              <Text style={styles.photoText}>Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexRow}>
              <VideoIcon height={10} width={17} style={styles.sharSomeIcon} />
              <Text style={styles.photoText}>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexRow}>
              <PollIcon height={10} width={12} style={styles.sharSomeIcon} />
              <Text style={styles.photoText}>Poll</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ReactionPost
          name="Boot camp"
          dateText="2w ago"
          postText="Welcome to the discussion! Connect with other guests and share ideas, thoughts, pictures & more. Have something to say? Leave a comment or share a post!"
        />
      </View>
    );
}

export default EventDetails;

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

  //About Styles
  aboutContainer:{
    marginHorizontal:20,
    marginTop:20,
    marginBottom:40
  },
  bootText:{
    color:DarkBlue,
    fontSize:22,
    fontFamily:Fonts.POPPINS_SEMIBOLD,
  },
  iconRow:{
    flexDirection:'row',
    marginTop:12
  },
  iconStyle:{
    height:20,
    width:20,
    alignSelf:'center',
    marginRight:10
  },
  iconText:{
    fontSize:14,
    fontFamily:Fonts.POPPINS_REGULAR,
    color:LightGrayColor,
    alignSelf:'center'
  },
  paraTextStyle:{
    fontSize:14,
    fontFamily:Fonts.POPPINS_LIGHT,
    color:black,
    marginTop:15
  },

  //Disucssion Styles
  fatDivider:{
    marginTop:2,
    backgroundColor:grayE8EB,
    height:8,
    
  },
  shareSomContainer:{
    marginTop:10,
    borderBottomWidth:8,
    borderBottomColor:grayE8EB
  },
  roundImage:{
    height:40,
    width:40,
    borderRadius:50,
    justifyContent:'center',
    backgroundColor:grayD9,
    alignItems:'center',
    alignSelf:'center'
  },

  shareButton:{
    backgroundColor:grayF1,
    height:40,
    alignSelf:'center',
    justifyContent:'center',
    paddingLeft:15,
    borderRadius:25,
    width:'75%'
  },
  sharSomeText:{
    color:LightGrayColor,
    fontSize:14,
    fontFamily:Fonts.POPPINS_SEMIBOLD,
  },
  iconMainContainer:{
    marginTop:20,
    marginBottom:10,
    flexDirection:'row',
    justifyContent:'space-around',
  },
  flexRow:{
    flexDirection:'row'
  },
  sharSomeIcon:{
    alignSelf:'center',
    marginRight:15
  },
  photoText:{
    fontSize:14,
    fontFamily:Fonts.POPPINS_REGULAR,
    color:DarkBlue,
    alignSelf:'center'
  }

});
