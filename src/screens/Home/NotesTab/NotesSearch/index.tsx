import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import SearchCustom from '../../../../components/SearchCustom';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';
import Fonts from '../../../../assets/Fonts';
import {DarkBlue, LightGrayColor, grayE8EB, secondaryTextColor, white} from '../../../../theme/Colors';
import NotesTopicItem from '../../../../components/NotesTopicItem';

const TAGSDATA = [
    {name:'COPD 5'},
    {name:'TnM stagin 4'},
    {name:'ABCDE 3'},
    {name:'acute inflammation 3'},
    {name:'shoulder 3'},
    {name:'PAD 2'},
    {name:'abscess 2'},
    {name:'AMTS 2'},
    {name:'perforated peti ulcer 2'},
    {name:'peripheral vascular disease 2'},
    {name:'needle stick injury 2'},
    {name:'oropharyngeal carcinoma 2'},
    {name:'phagocytosis 2'},
    {name:'colorectal carcinoma 2'},
    {name:'inguinal hernia 2'},


]

const NotesSearch = () => {
  const navigation = useNavigation() as NavigationProp<any>;
  const [searchText, setSearchText] = useState('');
  const insets = useSafeAreaInsets();

  const tabBar = (props: any) => (
    <MaterialTabBar
      {...props}
      tabStyle={{
        elevation: 0,
        shadowColor: 'red',
        shadowRadius: 0,
        shadowOffset: {width: 0, height: 0},
      }}
      activeColor={DarkBlue}
      labelStyle={{fontFamily: Fonts.POPPINS_MEDIUM}}
      indicatorStyle={{backgroundColor: DarkBlue,}}
    />
  );
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
        containerStyle={{
          marginTop: Platform.OS == 'android' ? insets.top + 5 : 0,
        }}
        onCancel={() => navigation.goBack()}
      />
      <Tabs.Container
        headerContainerStyle={{
          elevation: 0,
          shadowColor: 'transparent',
          borderBottomWidth: 1,
          borderBottomColor: grayE8EB,
        }}
        allowHeaderOverscroll={false}
        renderTabBar={tabBar}
        pagerProps={{scrollEnabled: true}}>
        <Tabs.Tab name="Posts" label="Posts">
          <Tabs.FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{backgroundColor: white}}
            data={[1,2,3,4,5,6,7]}
            renderItem={()=><NotesTopicItem topicName={'Actinomycosis'} screenName={"Surgical Pathology" ?? ''} viewCount={223} chatCount={0} />}
        
          />
        </Tabs.Tab>
        <Tabs.Tab name="Tags" label={'Tags'}>
          <Tabs.ScrollView >
            <View style={{flexDirection:'row',flexWrap:'wrap',marginHorizontal:20,marginTop:15}}>
            {TAGSDATA.map((item,index)=><TabButton onPressTag={()=>navigation.navigate('NotesTagScreen',{headerName:item.name})} tagName={item.name} />)}
            </View>
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    </SafeAreaView>
  );
};

const TabButton = ({onPressTag,tagName}:{onPressTag:()=>void,tagName:string})=>{
    return (
    <TouchableHighlight underlayColor={'white'} onPress={onPressTag} style={styles.tagButton}>
        <Text style={styles.tagText}>{tagName}</Text>
    </TouchableHighlight>
    )
}

export default NotesSearch;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  tagButton:{
    borderWidth:1,
    borderColor:grayE8EB,
    borderRadius:20,
    padding:5,
    paddingHorizontal:10,
    marginRight:10,
    marginBottom:10,
  },
  tagText:{
    fontFamily:Fonts.POPPINS_REGULAR,
    color:secondaryTextColor,
    fontSize:12,
    alignSelf:'center',
  }
});
