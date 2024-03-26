import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput, ViewStyle} from 'react-native';
import {LightPrimaryTextColor, dividerLineColor} from '../../theme/Colors';
import Fonts from '../../assets/Fonts';
import {Search} from '../../assets/images';

interface SearchCustomProps {
  onPress: () => void;
  titleText?: string;
  isSearch?: boolean;
  containerStyle?:ViewStyle
  onChangeText?: (text: string) => void;
  onCancel?: () => void;
}

const SearchCustom: React.FC<SearchCustomProps> = ({
  onPress,
  titleText,
  isSearch = false,
  onChangeText,
  onCancel,
  containerStyle
}) => {
  return (
    <TouchableOpacity
      style={[styles.searchContainer,containerStyle]}
      disabled={titleText ? true : false}
      onPress={onPress}>
      <Search style={styles.searchIcon} />
      {isSearch ? (
        <TextInput
          style={styles.searchText}
          placeholder={titleText ?? 'Search'}
          clearButtonMode="always"
          onChangeText={onChangeText}
        />
      ) : (
        <Text style={styles.searchText}>{titleText ?? 'Search'}</Text>
      )}
      {onCancel && (
        <TouchableOpacity onPress={onCancel} style={{alignSelf:'center',justifyContent:'center'}}>
          <Text style={styles.cancelText}>{'Cancel'}</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default SearchCustom;

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: dividerLineColor,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center', // Add this line to center the content vertically
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  searchText: {
    flex: 1, // Use flex to take up remaining space
    paddingHorizontal: 10, // Add horizontal padding
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 15,
    color: LightPrimaryTextColor,
  },
  cancelText: {
    paddingHorizontal: 10, // Add horizontal padding
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 15,
    color: LightPrimaryTextColor,
    alignSelf:'center'
  },
});
