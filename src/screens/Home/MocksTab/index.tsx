import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {styles} from './style';
import UpComingMock from '../../../components/UpComingMock';
import CustomButton from '../../../components/CustomButton';
import { DarkBlue, darkBg } from '../../../theme/Colors';

const MocksTab = () => {
  return (
     
      <FlatList
        style={styles.container}
        ListHeaderComponent={()=> 
        <View style={styles.topContainer}>
          <Text style={styles.joinFreeText}>Join Our Free Groups</Text>
          <View style={styles.buttonContainer}>
          <CustomButton
            buttonStyle={{
              alignSelf: 'center',
              marginVertical: 15,
              backgroundColor:DarkBlue,
              marginRight:10
            }}
            onPress={()=>null}
            title="Telegram"
            validate={false}
          />
          <CustomButton
            buttonStyle={{
              alignSelf: 'center',
              marginVertical: 15,
              backgroundColor:DarkBlue
            }}
            onPress={()=>null}
            title="Whatsapp"
            validate={false}
          />
          </View>
        </View>
        }
        data={['','','','']}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={()=><View style={{height:20}}/>}
        renderItem={()=>  <UpComingMock day={'8'} month={"MAR"} dateTime={'Mar 8, 2024 | 16:00'} status={"Online"} isEnded={false}/>
        
      }
      ListFooterComponent={()=><View style={{marginBottom:60}}/>}

      />
  );
};

export default MocksTab;
