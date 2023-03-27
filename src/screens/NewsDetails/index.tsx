import React from 'react';
import {View, Text, Image} from 'react-native';

interface Route {
  params: {
    article: {
      author: string;
      title: string;
      urlToImage: string;
      publishedAt: string;
      url: string;
      content: string;
    };
    articleIndex: number;
  };
}

export const NewsDetails: React.FC<{route: Route}> = ({route}) => {
  const {article} = route.params;
  return (
    <View>
      <Image source={{uri: article.urlToImage}} resizeMode="cover" />
      <View>
        <Text>{article.title}</Text>
        <Text>{article.content}</Text>
        <Text>{article.author}</Text>
        <Text>{article.publishedAt}</Text>
      </View>
    </View>
  );
};
