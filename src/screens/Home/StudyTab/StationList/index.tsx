import React from 'react';
import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DarkBlue,
  LightGrayColor,
  grayEC,
  secondaryTextColor,
  white,
} from '../../../../theme/Colors';
import Header from '../../../../components/Header';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Fonts from '../../../../assets/Fonts';
import {ForwardArrow, Station} from '../../../../assets/images';

const StationList = () => {
  const navigation = useNavigation() as NavigationProp<any>;
  const routes = useRoute();
  const {subject} = routes?.params as RouteProp<any>;

  const goToStepScreen = (name:string)=> {
    console.log("step")
    navigation.navigate('StepScreen',{name:name})
}

  const _renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <TouchableOpacity style={styles.contentBox} onPress={()=>goToStepScreen('Chronic Diarrhea')}>
        <View style={{flexDirection: 'row'}}>
          <Station height={14} style={styles.forwardArrowIcon} />
          <Text style={[styles.osceText]}>{'Chronic Diarrhoea'}</Text>
        </View>
        <ForwardArrow style={styles.forwardArrowIcon} />
      </TouchableOpacity>
    );
  };
  const _renderHeader = () => {
    return (
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>{`${subject} Stations`}</Text>
        <Text style={styles.stepsText}>26 steps</Text>
        <Text style={styles.osceText}>{`OSCE ${subject} Stations`}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Header
        title={'Section Details'}
        containerStyle={styles.headerStyle}
        subTitle={`${subject} Stations`}
      />

      <FlatList
        ListHeaderComponent={_renderHeader}
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default StationList;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: white,
    flex: 1,
  },
  headerStyle: {
    borderWidth: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },
  topContainer: {
    borderBottomWidth: 1,
    borderBottomColor: grayEC,
    marginBottom:7
  },
  titleText: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    color: secondaryTextColor,
  },
  stepsText: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 12,
    marginLeft: 20,
    color: LightGrayColor,
  },
  osceText: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 14,
    marginLeft: 20,
    color: secondaryTextColor,
    marginVertical: 10,
  },
  contentBox: {
    backgroundColor: white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: grayEC,
    borderWidth: 1,
    marginBottom: 5,
    borderColor: grayEC,
    shadowOpacity: 0.9,
    shadowRadius: 2.0,
    elevation: 3,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginTop: 5,
  },
  forwardArrowIcon: {
    height: 11,
    width: 11,
    alignSelf: 'center',
  },
});
