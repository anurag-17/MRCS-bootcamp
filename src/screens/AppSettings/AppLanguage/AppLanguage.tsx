import React, { useState } from 'react'
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../../components/Header'
import Fonts from '../../../assets/Fonts'
import { DDDDDD, DarkBlue, F8F9FB, gray8E, grayD9, grayE8EB, secondaryTextColor } from '../../../theme/Colors'
import { BlackTick, BlackTickIconSvg } from '../../../assets/images'
// Define a type for language item
type LanguageItem = {
  name: string;
};

const LANGUAGE: LanguageItem[]  = [
    {name:'Arabic',},
    {name:'Chineese',},
    {name:'Czech',},
    {name:'Danish',},
    {name:'Dutch',},
    {name:'English',},
    {name:'French',},
    {name:'German',},
    {name:'Hebrew',}, 
    {name:'Italian',},
    {name:'Japanese',},
    {name:'Korean',},
    {name:'Lithuanian',},
    {name:'Norwegian',},
    {name:'Polish',},
    {name:'Portuguese',},
    {name:'Russian',},
    {name:'Spanish',},
    {name:'Swedish',},
    {name:'Thai',},
    {name:'Turkish',},
    {name:'Ukranian',},
]

const AppLanguage = () => {

  const [selectedLanguage, setSelectedLanguage] = useState<string | null>('English');

  const handleLanguagePress = (language: string) => {
    // Set the selected language
    setSelectedLanguage(language);
  };

  const _renderLanguage = ({ item }: { item: LanguageItem }) => {
    return (
      <TouchableOpacity
        style={[styles.languageContainer]}
        onPress={() => handleLanguagePress(item.name)}
      >
        <Text style={styles.languageText}>{item.name}</Text>
        {selectedLanguage === item.name && <BlackTickIconSvg style={styles.blackTick} />}
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.mainContanier}>
      <Header
        type="blue"
        title={'App Language'}
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerStyle}
        onPost={() => null}
        isPost={false}
        postText="Save"
      />

      <FlatList
        ListHeaderComponent={() => (
          <View style={styles.appRestartView}>
            <Text style={styles.restartText}>
              The app will restart once a new language is saved
            </Text>
          </View>
        )}
        data={LANGUAGE}
        renderItem={_renderLanguage}
        ListFooterComponent={() => <View style={{marginBottom: 60}} />}
      />
    </View>
  );
}

export default AppLanguage

const styles = StyleSheet.create({
    mainContanier:{
        flex:1,
        backgroundColor:'white'
    },
    headerTitle: {
        alignSelf: 'center',
        marginTop: 15,
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

      appRestartView:{
        backgroundColor:grayE8EB,
        marginVertical:20,
        justifyContent:'center',
        height:50,
        paddingHorizontal:20
      },
      restartText:{
        fontSize:14,
        fontFamily:Fonts.POPPINS_LIGHT,
        alignSelf:'center',
      },
      languageContainer:{
        flexDirection:'row',
        height:50,
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:grayD9,
        marginHorizontal:20
      },


      blackTick:{
        alignSelf:'center'
      },
      languageText:{
        fontSize:14,
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        color:secondaryTextColor,
        alignSelf:'center'
      },
      textRegular:{
        fontSize:14,
        fontFamily:Fonts.POPPINS_REGULAR,
        color:secondaryTextColor,
        marginHorizontal:55,
        marginTop:15,
        textAlign:'center'
      }
    
})