import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {NewsCategory} from '../../constants';
import {Tag} from '../Tag';

export const NewsTags: React.FC<{
  selectedCategory: String;
  setSelectedCategory: Function;
}> = ({selectedCategory, setSelectedCategory}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={Object.values(NewsCategory)}
      keyExtractor={(item: string) => item}
      renderItem={({item}: any) => (
        <Tag
          category={item}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    maxHeight: 40,
  },
  contentContainer: {
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
