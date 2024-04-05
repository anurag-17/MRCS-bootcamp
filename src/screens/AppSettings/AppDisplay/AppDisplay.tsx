import React, { useMemo, useState } from 'react';
import {StyleSheet, Platform, StatusBar, View, Text, TouchableOpacity} from 'react-native';
import Fonts from '../../../assets/Fonts';
import {white, DarkBlue, secondaryTextColor} from '../../../theme/Colors';
import Header from '../../../components/Header';

const AppDisplay = () => {

 
    const [selectedId, setSelectedId] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        titleStyle={styles.headerTitle}
        title={'App Display'}
        containerStyle={styles.headerStyle}
        onPost={() => null}
        isPost={false}
        postText="Save"
      />
      <TouchableOpacity style={styles.flexRow} onPress={()=>setSelectedId(0)}>
        <Text style={styles.text14_Light}>Use device settings</Text>
        <View style={styles.outerCirlce}>
            {selectedId==0 && <View style={styles.filledCirlce}/>}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.flexRow} onPress={()=>setSelectedId(1)}>
        <Text style={styles.text14_Light}>Dark Mode</Text>
        <View style={styles.outerCirlce}>
            {selectedId==1 && <View style={styles.filledCirlce}/>}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.flexRow} onPress={()=>setSelectedId(2)}>
        <Text style={styles.text14_Light}>Light</Text>
        <View style={styles.outerCirlce}>
            {selectedId==2 && <View style={styles.filledCirlce}/>}
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

export default AppDisplay;

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
  headerTitle: {
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
  outerCirlce:{
    borderWidth:2,
    borderColor:DarkBlue,
    borderRadius:50,
    height:20,
    width:20,
    justifyContent:'center'
  },
  flexRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    alignContent:'center',
    alignItems:'center',
    marginTop:20,
  },
  filledCirlce:{
    borderWidth:1,
    backgroundColor:DarkBlue,
    borderRadius:50,
    height:10,
    width:10,
    alignSelf:'center'

  },
  text14_Light:{
    fontSize:14,
    fontFamily:Fonts.POPPINS_LIGHT,
    color:secondaryTextColor
  }
});
