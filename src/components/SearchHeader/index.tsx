import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LightPrimaryTextColor, dividerLineColor } from '../../theme/Colors'
import Fonts from '../../assets/Fonts'

const SearchHeader = () => {
  return (
    <View style={styles.container}>
        
    </View>
  )
}

export default SearchHeader


const styles = StyleSheet.create({
    container: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: dividerLineColor,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center' // Add this line to center the content vertically
    },
    searchIcon: {
        height: 20,
        width: 20,
        marginRight: 10
    },
    searchText: {
        flex: 1, // Use flex to take up remaining space
        paddingHorizontal: 10, // Add horizontal padding
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: 15,
        color: LightPrimaryTextColor
    },
})