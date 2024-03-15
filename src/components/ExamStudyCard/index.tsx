import { Image, ImageSourcePropType, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { LightPrimaryTextColor, grayD9 } from "../../theme/Colors";
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
    containerStyle?:StyleProp<ViewStyle>
    subjectStyle?:StyleProp<TextStyle>
    type:string
    btnTitle:string
    publicMember?:boolean,
    btnTextStyle?:StyleProp<TextStyle>
    roundImageArray?:String[];
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
    subjectStyle,
    type,
    btnTitle,
    publicMember,
    btnTextStyle,
    roundImageArray
  }) => {

    return (
        <View style={[styles.studyProgramContainer,containerStyle]}>
          {image && type !=='SuggestedGroup' &&<Image
            style={styles.programImage}
            source={image}
            resizeMode='cover'
          />}

          {type !=='SuggestedGroup'&&<View style={styles.middleContainr}>
            <Text style={[styles.subjectText,subjectStyle]}>{subject}</Text>
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
                    borderColor={grayD9}
                    borderRadius={4}
                    unfilledColor={grayD9}
                    animated={false}
                  />
                  <Text style={styles.setepsCompleted}>{stepsPercentage??0}% Steps Completed</Text>
                </View>
              </>
            ) : type ==='Study' && (
              <>
                <Text style={styles.durationText}>No time limit</Text>
                <Text style={styles.participantText}>
                    Public - {numberOfParticipants} Participants
                </Text>
              </>
            )}
            {type ==='ViewGroup' &&
            <>
            <Text style={styles.participantText}>
             {`${publicMember? `Public`:`Private`} - ${numberOfParticipants} Members`}
            </Text>
            {roundImageArray &&<View style={styles.roundProfilesContainer}>
              <Image style={styles.roundProfileImage}/>
              <View style={[styles.roundProfileImage,styles.roundProfileImageLeftOverLap]}>
              <Text style={styles.blankProfileImageText}>
                 a
                </Text>
              </View>
              <View style={[styles.roundProfileImage,styles.roundProfileImageLeftOverLap]}>
                <Text style={styles.blankProfileImageText}>
                 d
                </Text>
              </View>
            </View>}
            </>
            }

          </View>}
          {type =='SuggestedGroup'&&
          <View style={styles.suggestedGroupContainer}>
             {image &&<Image
            style={styles.suggestedImage}
            source={image}
            resizeMode='cover'
          />}
            <View style={{alignSelf:'center'}}>
            <Text style={[styles.subjectText,subjectStyle]}>{subject}</Text>
            <Text style={styles.participantText}>
             {`${publicMember? `Public`:`Private`} - ${numberOfParticipants} Members`}
            </Text>
            {roundImageArray &&<View style={styles.roundProfilesContainer}>
              <Image style={styles.roundProfileImage}/>
              <View style={[styles.roundProfileImage,styles.roundProfileImageLeftOverLap]}>
              <Text style={styles.blankProfileImageText}>
                 a
                </Text>
              </View>
              <View style={[styles.roundProfileImage,styles.roundProfileImageLeftOverLap]}>
                <Text style={styles.blankProfileImageText}>
                 d
                </Text>
              </View>
            </View>}
            </View>
          </View>
          }
          <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={[styles.btnText,btnTextStyle]}>{btnTitle}</Text>
          </TouchableOpacity>
        </View>
    );
  };

export default ExamStudyCard