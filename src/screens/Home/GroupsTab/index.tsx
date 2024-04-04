import React, { useState } from 'react';
import { Dimensions, ImageBackground, Text, TouchableOpacity, View,FlatList, Animated } from 'react-native';
import { styles } from './styles';
import ExamStudyCard from '../../../components/ExamStudyCard';
import { blueTypeTextColor, grayD9, grayE8, grayOuterLine, secondaryTextColor } from '../../../theme/Colors';
const {height, width} = Dimensions.get('window');

const GroupTab = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const SLIDER_WIDTH = Dimensions.get('window').width + 30;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const _renderItem = ({ item, index }:{item:any,index:number}) => {
    return <ExamStudyCard {...item} />;
  };
  
  console.log("crrIndx : ",currentIndex)
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
              <TouchableOpacity>
                <Text style={styles.examNViewAllText}>{'View All'}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.dividerLine,{marginBottom:40}]} />
            <View>
              <FlatList
                data={entries}
                horizontal
                contentContainerStyle={{
                  justifyContent: 'flex-start',
                  paddingHorizontal: 20,
                }}
                pagingEnabled
                onScroll={e => {
                  // const x = e.nativeEvent.contentOffset.x;
                  // console.log("x Value : ",(x / width).toFixed(0))
                  // setCurrentIndex((x / width).toFixed(0));
                  const { contentOffset, layoutMeasurement } = e.nativeEvent;
                  const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
                  console.log("currentIndex : ",currentIndex)
                }}
                renderItem={_renderItem}
                ItemSeparatorComponent={() => <View style={{width: 15}} />}
                keyExtractor={(item, index) => `${item.type}-${index}`} // Ensure each item has a unique key
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={[styles.dividerLine,{marginTop:60}]} />
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

export default GroupTab;
