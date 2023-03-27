import React, {useCallback} from 'react';
import {StyleSheet, TextInput, useColorScheme} from 'react-native';
import {useDispatch} from 'react-redux';
import {resetSearchResults, searchNews} from '../../redux/actions';
import {debounce} from 'lodash';

export const SearchInput: React.FC<{
  searchText: string;
  setSearchText: Function;
  setIsLoading: Function;
}> = ({searchText, setSearchText, setIsLoading}) => {
  const backgroundColor = useColorScheme() === 'dark' ? '#333' : '#ddd';
  const placeholderColor = useColorScheme() === 'dark' ? '#eee' : '#111';
  const color = useColorScheme() === 'dark' ? '#fff' : '#000';
  const dispatch: Function = useDispatch();

  const searchForText = useCallback(
    debounce((text: string) => {
      if (text?.trim().length > 0) {
        dispatch(searchNews(text, setIsLoading));
      } else {
        dispatch(resetSearchResults());
      }
    }, 1000),
    [setSearchText, dispatch, setIsLoading],
  );
  return (
    <TextInput
      style={[styles.container, {backgroundColor, color}]}
      placeholder={'Search'}
      placeholderTextColor={placeholderColor}
      value={searchText}
      onChangeText={(text: string) => {
        setSearchText(text);
        searchForText(text);
      }}
      maxLength={40}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginHorizontal: 24,
    marginBottom: 8,
    borderRadius: 20,
    paddingHorizontal: 24,
    fontWeight: '400',
  },
});
