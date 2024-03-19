import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DarkBlue,
  black,
  secondaryTextColor,
  white,
} from '../../../../theme/Colors';
import Fonts from '../../../../assets/Fonts';
import {Cross, Share} from '../../../../assets/images';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Svg, {Circle} from 'react-native-svg';
import CustomButton from '../../../../components/CustomButton';

const StepScreen = () => {
  const navigation = useNavigation() as NavigationProp<any>;
  const routes = useRoute();
  const {name} = routes?.params as RouteProp<any>;
  const _stepHeader = () => {
    return (
      <View style={styles.stepHeader}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Cross height={14} style={styles.backArrow} />
          </TouchableOpacity>
          <Text style={styles.title}>{'Step'}</Text>
        </View>
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Share height={16} width={16} style={{alignSelf: 'center'}} />
        </TouchableOpacity>
      </View>
    );
  };

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
  return (
    <SafeAreaView style={styles.mainContainer}>
      {_stepHeader()}
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
      <View style={{flex: 0.07}}>
        <View style={styles.stickyFooter}>
          <CustomButton
            textStyle={styles.completBtnTxtStyle}
            buttonStyle={styles.completBtnStyle}
            title="Mark as Complete"
            validate={false}
            onPress={() => null}
          />
        </View>
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
    height: 85,
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
    height:100,
  },
  completBtnStyle:{
    alignSelf: 'center',
    marginVertical: 15,
    backgroundColor:DarkBlue,
    marginHorizontal:0
  },
  completBtnTxtStyle:{
    color:white,
    fontSize:14,
    fontFamily:Fonts.POPPINS_SEMIBOLD
  }
});
