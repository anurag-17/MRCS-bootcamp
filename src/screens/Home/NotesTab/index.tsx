import React from 'react'
import { Text, View,FlatList, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Communication, Critical, Examination, ForwardArrow, Heart, History, Procedure, Search, Surgical } from '../../../assets/images'

const NotesTab = () => {

  const DATA = [
    {
      name:'Surgical Anatomy',
      icon:<Heart style={styles.noteIcon}/>
    },
    {
      name:'Surgical Pathology',
      icon:<Surgical style={styles.noteIcon}/>
    },
    {
      name:'Critical Care',
      icon:<Critical style={styles.noteIcon}/>
    },
    {
      name:'History',
      icon:<History style={styles.noteIcon}/>
    },
    {
      name:'Examination',
      icon:<Examination style={styles.noteIcon}/>
    },
    {
      name:'Communication',
      icon:<Communication style={styles.noteIcon}/>
    },
    {
      name:'Procedures',
      icon:<Procedure style={styles.noteIcon}/>
    },
  ]
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <TouchableOpacity style={styles.serchContainer}>
          <Search style={styles.searchIcon} />
          <Text style={styles.searchText}>{'Search'}</Text>
        </TouchableOpacity>
        <Text style={styles.bootCampText}>{'Boot Camp Notes'}</Text>
        <FlatList
        data={DATA} 
        renderItem={
          ({item,index})=>{
          return (
            <TouchableOpacity style={styles.noteContainer} key={index}>
              <View style={styles.notTag}>
                {item.icon}
                <Text style={styles.noteName}>{item?.name}</Text>
              </View>
              <ForwardArrow style={styles.forwardArrowIcon}/>
            </TouchableOpacity>
          );}
          }

        />

    </View>
  )
}

export default NotesTab