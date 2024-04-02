import React from 'react'
import { Image, View,FlatList } from 'react-native'
import { styles } from './style'
import ItalicTagContainer from '../../../components/ItalicTagContainer'

const HallOfFameTab = () => {
  return (
   <View style={styles.container}>
      
      <FlatList
        ListHeaderComponent={()=>
        <ItalicTagContainer
          containerStyle={{marginTop:0}}
          topText='HALL OF FAME'
          tagText={'What successful condidates said about us!'}
          detailsText={'Action speak louder than words. Have a look at these statements yourself. You can br here too!'}
        />}
       data={[1,2,3,4,5]}
       showsVerticalScrollIndicator={false}
       ItemSeparatorComponent={()=><View style={{height:20}}/>}
       ListFooterComponent={()=><View style={{height:60}}/>}
       renderItem={()=>
      <Image style={styles.fameImage} source={require('../../../assets/images/home/fame.png')} resizeMode='contain' />}
      />
   </View>
  )
}

export default HallOfFameTab