import { Image, ImageSourcePropType, StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { LightPrimaryTextColor, grayHomeHeaderIcon } from "../../theme/Colors";
import { styles } from "./styles";
import * as Progress from 'react-native-progress';

interface ExamStudyCardProps {
    isJoined?: boolean;
    subject: string;
    startDate?: string;
    stepsPercentage?: number;
    numberOfParticipants?: number;
    image?:ImageSourcePropType;
    onPress:()=>void;
    containerStyle:StyleProp<ViewStyle>
    type:string
  }
const ExamStudyCard: React.FC<ExamStudyCardProps> = ({
    isJoined=false,
    subject,
    startDate,
    stepsPercentage,
    numberOfParticipants,
    image,
    onPress,
    containerStyle,
    type
  }) => {
    return (
        <View style={[styles.studyProgramContainer,containerStyle]}>
          {image &&<Image
            style={styles.programImage}
            source={image}
            resizeMode='cover'
          />}
          <View style={styles.middleContainr}>
            <Text style={styles.subjectText}>{subject}</Text>
            {type ==='Study' &&isJoined ? (
              <>
                <Text style={styles.courseStartData}>
                  Started on {startDate} - Day {Math.floor(stepsPercentage??0 / 100 * 30)}
                </Text>
                <View style={styles.prgrsBarContainer}>
                  <Progress.Bar
                    progress={stepsPercentage??0 / 100}
                    width={278}
                    color={LightPrimaryTextColor}
                    borderColor={grayHomeHeaderIcon}
                    borderRadius={4}
                    unfilledColor={grayHomeHeaderIcon}
                    animated={false}
                  />
                  <Text style={styles.setepsCompleted}>{stepsPercentage??0}% Steps Completed</Text>
                </View>
              </>
            ) : (
              <>
                <Text style={styles.durationText}>No time limit</Text>
                <Text style={styles.participantText}>
                  Public - {numberOfParticipants} Participants
                </Text>
              </>
            )}
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.btnText}>{isJoined ? `Continue` : `Join`}</Text>
          </TouchableOpacity>
        </View>
    );
  };

export default ExamStudyCard