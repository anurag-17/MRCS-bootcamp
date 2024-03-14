import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import ExamStudyCard from '../../../components/ExamStudyCard';
import { white } from '../../../theme/Colors';


const Study = () => {

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
      isJoined: false,
      image: require('../../../assets/images/study/stethoscope.png'),
      startDate: 'Feb 22, 2024',
      numberOfParticipants: 59,
      subject: 'Examination',
    },
    {
      key: '3',
      isJoined: true,
      image: require('../../../assets/images/study/study.png'),
      startDate: 'Feb 22, 2024',
      numberOfParticipants: 38,
      subject: 'Communication',
    },
    {
      key: '4',
      isJoined: false,
      image: require('../../../assets/images/study/stethoscope.png'),
      startDate: 'Feb 22, 2024',
      numberOfParticipants: 51,
      subject: 'Procedure',
    },
  ];
  return (
    <View style={styles.container}>
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
            onPress={() => console.log('hhelo')}
            containerStyle={{}}
            type='Study'
          />
        )}
      />
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingTop:15,
  },
  
});

export default Study;
