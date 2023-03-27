import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const Tag: React.FC<{
  category: String;
  selectedCategory: String;
  setSelectedCategory: Function;
}> = ({category, selectedCategory, setSelectedCategory}) => {
  const handlePress = useCallback(() => {
    setSelectedCategory(category);
  }, [category, setSelectedCategory]);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selectedCategory === category && styles.selected,
      ]}
      onPress={handlePress}>
      <Text style={styles.text}>{`${
        category.charAt(0).toUpperCase() + category.slice(1)
      }`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 12,
    height: 28,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
    backgroundColor: '#FFA50066',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
  selected: {
    backgroundColor: '#FF8800',
    borderColor: '#FF6600',
  },
});
