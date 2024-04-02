import React, { useState } from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DarkBlue,
  black,
  grayE8,
  secondaryTextColor,
  white,
} from '../../../../theme/Colors';
import Fonts from '../../../../assets/Fonts';
import {Cross, GreenCheckIcon, Share} from '../../../../assets/images';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Svg, {Circle} from 'react-native-svg';
import CustomButton from '../../../../components/CustomButton';
import Header from '../../../../components/Header';

const StepScreen = () => {
  const navigation = useNavigation() as NavigationProp<any>;
  const routes = useRoute();
  const {name} = routes?.params as RouteProp<any>;
  interface Step {
    id: number;
    value: string;
    subLabel?: {value: string}[];
  }

  interface Section {
    title: string;
    steps: Step[];
  }

  const stepArray: Section[] = [
    {
      title: 'Introduction',
      steps: [
        {id: 1, value: 'Wash Your hands'},
        {id: 2, value: 'Chronic diarrhea'},
      ],
    },
    {
      title: 'Presenting Complaints',
      steps: [
        {
          id: 1,
          value: 'Wash Your hands',
        },
        {
          id: 2,
          value: 'Chronic diarrhea',
          subLabel: [{value: 'Onset : '}, {value: 'Duration : '}],
        },
      ],
    },
    {
        title: 'Introduction',
        steps: [
          {id: 1, value: 'Wash Your hands'},
          {id: 2, value: 'Chronic diarrhea'},
        ],
      },
      {
        title: 'Presenting Complaints',
        steps: [
          {
            id: 1,
            value: 'Wash Your hands',
          },
          {
            id: 2,
            value: 'Chronic diarrhea',
            subLabel: [{value: 'Onset : '}, {value: 'Duration : '}],
          },
        ],
      },
      {
        title: 'Introduction',
        steps: [
          {id: 1, value: 'Wash Your hands'},
          {id: 2, value: 'Chronic diarrhea'},
        ],
      },
      {
        title: 'Presenting Complaints',
        steps: [
          {
            id: 1,
            value: 'Wash Your hands',
          },
          {
            id: 2,
            value: 'Chronic diarrhea',
            subLabel: [{value: 'Onset : '}, {value: 'Duration : '}],
          },
        ],
      },
      {
        title: 'Introduction',
        steps: [
          {id: 1, value: 'Wash Your hands'},
          {id: 2, value: 'Chronic diarrhea'},
        ],
      },
      {
        title: 'Presenting Complaints',
        steps: [
          {
            id: 1,
            value: 'Wash Your hands',
          },
          {
            id: 2,
            value: 'Chronic diarrhea',
            subLabel: [{value: 'Onset : '}, {value: 'Duration : '}],
          },
        ],
      },
  ];

  const _renderSection = ({item}: {item: Section}) => {
    return (
      <View style={{paddingLeft: 20}}>
        <Text style={styles.topicTextUnderline}>{item.title}</Text>
        <View style={{paddingLeft: 20}}>
          {item.steps.map(data => (
            <>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <View style={styles.filledDot} />
                <Text style={styles.paraText}>{data.value}</Text>
              </View>
              {data.subLabel?.map(subData => {
                return(<View style={{flexDirection: 'row', marginTop: 5,paddingLeft:20}}>
                  <View style={styles.hollowDot} />
                  <Text style={styles.paraText}>{subData.value}</Text>
                </View>)
              })}
            </>
          ))}
        </View>
      </View>
    );
  };

  const [isMarked, setIsMarked] = useState(false);

  console.log("isMarked : ",isMarked)
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'}/>
      <Header 
      type="white"
      title='Step'
      isShare={true}
      containerStyle={ Platform.OS=='android'? {marginTop:35}:{}}
      titleStyle={styles.title}
      />
      <View style={{flex: 0.93}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <>
              <Text style={styles.diseaseTitle}>{name}</Text>
              <View style={styles.borderLeftView}>
                <Text style={[styles.paraText, {alignSelf: 'center'}]}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti repellat, asperiores sed, quam nihil iste dolore
                  facere illum quaerat atque vero quia in autem ipsam, nesciunt
                  soluta accusantium. Perspiciatis, nisi.
                </Text>
              </View>
            </>
          )}
          style={{marginTop: 15}}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          data={stepArray}
          renderItem={_renderSection}
        />
      </View>
      <View style={[isMarked ? {flex: 0.125} : {flex: 0.07},Platform.OS=="android"?{marginBottom:35}:{}]}>
        {isMarked === false ? (
          <View style={styles.stickyFooter}>
            <CustomButton
              textStyle={styles.completBtnTxtStyle}
              buttonStyle={styles.completBtnStyle}
              title="Mark as Complete"
              validate={false}
              onPress={() => {
                setIsMarked(true);
                navigation.navigate('StepCompletedScreen');
              }}
            />
          </View>
        ) : (
          <View >
            <View style={{flexDirection: 'row',borderBottomWidth:1,paddingBottom:10,borderBottomColor:grayE8}}>
              <GreenCheckIcon height={20} style={{alignSelf: 'center'}} />
              <View>
                <Text style={styles.stepCompleTxt}>Step Completed</Text>
                <Text style={styles.dateTxt}>Mar 16, 2024</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
            <CustomButton
              textStyle={styles.undoBtnTexStyle}
              buttonStyle={styles.undoButtonStyle}
              title="Undo"
              validate={false}
              onPress={() => {
                setIsMarked(false)
              }}
            />
            <CustomButton
              textStyle={styles.completBtnTxtStyle}
              buttonStyle={styles.completBtnStyle}
              title="Next Step"
              validate={false}
              onPress={() => {
               null
              }}
            />
            </View>

          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StepScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
    justifyContent:'space-between'
  },
  stepHeader: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backArrow: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  title: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 16,
    color: DarkBlue,
    marginTop: -3,
    marginLeft: 30,
  },
  diseaseTitle: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 18,
    color: DarkBlue,
    marginLeft: 20,
    marginVertical: 15,
  },
  borderLeftView: {
    borderLeftColor: DarkBlue,
    borderLeftWidth: 4,
    paddingLeft: 15,
    justifyContent: 'center',
    marginHorizontal: 30,
    marginBottom:25
  },
  paraText: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 13,
    color: DarkBlue,
  },
  filledDot: {
    height: 8,
    width: 8,
    borderRadius: 50,
    backgroundColor: DarkBlue,
    alignSelf: 'center',
    marginRight: 7,
  },
  hollowDot: {
    height: 8,
    width: 8,
    borderRadius: 50,
    borderColor: DarkBlue,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginRight: 7,
  },
  topicTextUnderline: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    textDecorationLine: 'underline',
    textShadowColor: DarkBlue,
    fontSize: 13,
    color: DarkBlue,
  },
  stickyFooter:{
    backgroundColor:'rgba(250,250,250,0.6)',
  },
  completBtnStyle:{
    alignSelf: 'center',
    marginVertical: 15,
    backgroundColor:DarkBlue,
    marginHorizontal:0,
  },
  completBtnTxtStyle:{
    color:white,
    fontSize:14,
    fontFamily:Fonts.POPPINS_SEMIBOLD
  },
  stepCompleTxt:{
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    color: DarkBlue,
  },
  dateTxt:{
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 12,
    color: secondaryTextColor,
  },
  undoButtonStyle: {
    backgroundColor: white,
    marginVertical: 15,
    borderRadius: 35,
    borderWidth:1,
    borderColor:DarkBlue,
  },
  undoBtnTexStyle: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 13,
    color:DarkBlue
  },
});
