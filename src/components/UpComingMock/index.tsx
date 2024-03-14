import React from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import { styles } from './style';
import { Share } from '../../assets/images';

interface UpComingMockProps {
  day: string;
  month: string;
  dateTime: string;
  status:string;
  isEnded: boolean;
}

const UpComingMock: React.FC<UpComingMockProps> = ({
  day,
  month,
  dateTime,
  status,
  isEnded,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.upperLeftSide}>
          <Text style={styles.dayText}>{day}</Text>
          <Text style={styles.monthText}>{month}</Text>
        </View>
        <View style={styles.upperRightSide}>
          <Text style={styles.bootCampOnlineText}>{'Boot Camp Online Mock'}</Text>
          <Text style={styles.dateTimeStatusText}>{`${dateTime} ${status}` }</Text>
        </View>
      </View>
      <View style={[styles.lowerContainer, isEnded?{justifyContent:'center'}:{}]}>
        {isEnded ? (
          <Text style={styles.eventEndedText}>{'Event has ended'}</Text>
        ) : (
          <>
            <TouchableOpacity style={styles.shareContainer}>
              <Share style={styles.shareIcon}/>
              <Text style={styles.shareText}>{'Share'}</Text>
            </TouchableOpacity>
            <View style={styles.verticalLine}/>
            <TouchableOpacity style={styles.detailContainer}>
            <Text style={styles.detailsText}>{'Details'}</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

export default UpComingMock;
