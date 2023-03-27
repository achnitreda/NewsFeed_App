import React, {useCallback, useEffect, useState} from 'react';
import uuid from 'react-native-uuid';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsFeed} from '../../redux/actions';
import {NewsArticle} from '../../components/NewsArticle';
import {NewsCategory} from '../../constants';
import {NewsTags} from '../../components/NewsTags';
import {SearchInput} from '../../components/SearchInput';

export const Feed: React.FC = () => {
  const {newsFeed, searchResults} = useSelector(
    (state: any) => state.feedReducer,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    NewsCategory.business,
  );
  const [searchText, setSearchText] = useState('');
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(getNewsFeed(setIsLoading, selectedCategory));
  }, [dispatch, selectedCategory]);

  const handleRefresh = useCallback(() => {
    dispatch(getNewsFeed(setIsLoading, selectedCategory));
  }, [dispatch, selectedCategory]);

  const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
        setIsLoading={setIsLoading}
      />
      {!searchText?.trim() && (
        <NewsTags
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      <FlatList
        keyExtractor={() => uuid.v4().toString()}
        showsVerticalScrollIndicator={false}
        data={searchText?.trim() ? searchResults : newsFeed}
        renderItem={({item}: any) => <NewsArticle post={item} />}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
        }
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    marginTop: 8,
  },
  list: {
    flex: 1,
    flexGrow: 1,
    paddingVertical: 8,
  },
});
