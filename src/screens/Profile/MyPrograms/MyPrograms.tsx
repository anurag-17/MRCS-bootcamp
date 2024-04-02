import React from 'react'
import { FlatList, Platform, StyleSheet, View } from 'react-native'
import Fonts from '../../../assets/Fonts'
import { DarkBlue, white } from '../../../theme/Colors'
import Header from '../../../components/Header'
import ExamStudyCard from '../../../components/ExamStudyCard'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const studyPrograms = [
  {
    key: '1',
    isJoined: true,
    image: require('../../../assets/images/study/study.png'),
    startDate: 'Feb 22, 2024',
    stepsPercentage: 0,
    numberOfParticipants: 59,
    subject: 'History',
  },
  {
    key: '2',
    isJoined: true,
    image: require('../../../assets/images/study/stethoscope.png'),
    startDate: 'Feb 22, 2024',
    numberOfParticipants: 59,
    stepsPercentage: 0,
    subject: 'Examination',
  },
  {
    key: '3',
    isJoined: true,
    image: require('../../../assets/images/study/study.png'),
    startDate: 'Feb 22, 2024',
    numberOfParticipants: 38,
    stepsPercentage: 0,
    subject: 'Communication',
  },
  {
    key: '4',
    isJoined: true,
    image: require('../../../assets/images/study/stethoscope.png'),
    startDate: 'Feb 22, 2024',
    numberOfParticipants: 51,
    stepsPercentage: 16,
    subject: 'Procedure',
  },
];

const MyPrograms = () => {
  const navigation = useNavigation() as NavigationProp <any>

  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'My Programs'}
        titleStyle={styles.myProgramTitle}
        containerStyle={styles.headerStyle}
      />
      <FlatList
        data={studyPrograms}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={()=><View style={{height:15}} />}
        renderItem={({item}) => (
          <ExamStudyCard
            isJoined={item.isJoined}
            image={item.image}
            startDate={item.startDate}
            stepsPercentage={item.stepsPercentage}
            numberOfParticipants={item.numberOfParticipants}
            subject={item.subject}
            onPress={() => navigation.navigate('StudyStack',{ screen: 'StudyInnerTab',params:{subject:item.subject}})}
            containerStyle={{}}
            type='Study'
            btnTitle={item.isJoined ? `Continue` : `Join`}
          />
        )}
      />
   
    </View>
  )
}

export default MyPrograms

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: white,
    },
    myProgramTitle:{
      alignSelf: 'center', 
      marginTop: 15,
      fontSize:15,
      fontFamily:Fonts.POPPINS_SEMIBOLD
    },
    headerStyle: {
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: DarkBlue,
      paddingTop: Platform.OS == 'android' ? 25 : 40,
      height: Platform.OS == 'android' ? 90 : 100,
      marginBottom:20
    },
})
