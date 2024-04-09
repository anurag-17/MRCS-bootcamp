import React, { useState } from 'react';
import { Dimensions, ImageBackground, Text, TouchableOpacity, View,FlatList, Animated } from 'react-native';
import { styles } from './styles';
import ExamStudyCard from '../../../components/ExamStudyCard';
import { DarkBlue, blueTypeTextColor, grayD9, grayE8, grayOuterLine, secondaryTextColor } from '../../../theme/Colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
import Carousel, { Pagination } from 'react-native-snap-carousel-new';
const entries = [
  {
    image: require('../../../assets/images/group/group.png'),
    subject: 'May - June 2024 Exam Cohort',
    onPress: () => console.log('-/'),
    containerStyle: { width: 283, marginHorizontal: 0,},
    subjectStyle: styles.subjectText,
    type: 'ViewGroup',
    btnTitle: `View Group`,
    numberOfParticipants: 23,
    publicMember: false,
    btnTextStyle: { color: blueTypeTextColor },
  },
  {
    image: require('../../../assets/images/group/group.png'),
    subject: 'May - June 2024 Exam Cohort',
    onPress: () => console.log('-/'),
    containerStyle: { width: 283, marginHorizontal: 0, },
    subjectStyle: styles.subjectText,
    type: 'ViewGroup',
    btnTitle: `View Group`,
    numberOfParticipants: 23,
    publicMember: false,
    btnTextStyle: { color: blueTypeTextColor },
  },
  {
    image: require('../../../assets/images/group/group.png'),
    subject: 'May - June 2024 Exam Cohort',
    onPress: () => console.log('-/'),
    containerStyle: { width: 283, marginHorizontal: 0, },
    subjectStyle: styles.subjectText,
    type: 'ViewGroup',
    btnTitle: `View Group`,
    numberOfParticipants: 23,
    publicMember: false,
    btnTextStyle: { color: blueTypeTextColor },
  },
  // Add more entries as needed
];
const GroupTab = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation() as NavigationProp <any>
  const SLIDER_WIDTH = Dimensions.get('window').width + 30;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const _renderItem = ({ item, index }:{item:any,index:number}) => {
    return <ExamStudyCard {...item}  onPress={()=>navigation.navigate('ViewGroups')}/>;
  };
  
  console.log("activeIndex : ",activeIndex)
  return (
    <View style={styles.container}>
       
      <FlatList
        data={[1, 2, 3, 4]}
        ListHeaderComponent={() => (
          <>
          <View style={styles.firstRow}>
            <Text
              style={[styles.examNViewAllText, {color: secondaryTextColor}]}>
              {'Exam Cohorts'}
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Groups')}>
              <Text style={styles.examNViewAllText}>{'View All'}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.dividerLine,{marginBottom:40}]} />
            <MyCarousel/>
          <View style={[styles.dividerLine,{marginTop:30}]} />
          <Text style={styles.leftGroupText}>{'MY GROUPS'}</Text>
          <View style={{flexDirection: 'row'}}>
            <ImageBackground
              style={styles.groupsBgImage}
              source={require('../../../assets/images/group/group.png')}>
              <Text style={styles.imageBgText}>May - June 2024 Exam...</Text>
            </ImageBackground>
            <ImageBackground
              style={styles.groupsBgImage}
              source={require('../../../assets/images/group/group.png')}>
              <Text style={styles.imageBgText}>May - June 2024 Exam...</Text>
            </ImageBackground>
          </View>
          <Text style={styles.leftGroupText}>{'SUGGESTED GROUPS'}</Text>
        </>
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 15}} />}
        renderItem={() => (
          <ExamStudyCard
            image={require('../../../assets/images/group/suggestedGroup.png')}
            subject="May - June 2024 Exam Cohort"
            onPress={() => console.log('-/')}
            containerStyle={{}}
            subjectStyle={styles.subjectText}
            type="SuggestedGroup"
            btnTitle={`Join Group`}
            numberOfParticipants={23}
            publicMember={false}
            btnTextStyle={{color: blueTypeTextColor}}
            roundImageArray={['']}
          />
        )}
        ListFooterComponent={()=><View style={{marginBottom:60}}/>}
      />
    </View>
  );
};

const MyCarousel =() => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation() as NavigationProp <any>
console.log("index : ",index)
  const _renderItem = ({ item, index }:{item:any,index:number}) => {
    return <ExamStudyCard {...item}  onPress={()=>navigation.navigate('ViewGroups')}/>;
  };
  return (
    <>
      <Carousel
        data={entries}
        contentContainerStyle={{
          justifyContent: 'flex-start',
          borderWidth: 1,
        }}
        sliderWidth={400}
        itemWidth={300}
        windowSize={300}
        pagingEnabled
        renderItem={_renderItem}
        showsHorizontalScrollIndicator={false}
        onSnapToItem={index => setIndex(index)}
        layout={'default'}
      />
      <View style={{marginTop:-15}}>
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={index}
        containerStyle={{paddingBottom:0,marginBottom:0}}
        dotStyle={{
          width: 7,
          height: 7,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: blueTypeTextColor,
        }}
        inactiveDotStyle={{backgroundColor: grayD9}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      </View>
    </>
  );
}

export default GroupTab;
