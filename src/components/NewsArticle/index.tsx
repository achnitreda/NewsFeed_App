import React, {useCallback} from 'react';
import moment from 'moment';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

type Post = {
  title: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  author: string;
};

export const NewsArticle: React.FC<{post: Post}> = ({post}) => {
  const navigation: any = useNavigation();
  const handleNavigate = useCallback(() => {
    navigation.navigate('NewsDetails', {article: post});
  }, [navigation, post]);
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={handleNavigate}>
      <Image
        source={{
          uri:
            post.urlToImage ??
            `https://picsum.photos/${Math.floor(Math.random() * 1000)}`,
          /* A prop for the Image component. It forces the image to be cached. */
          cache: 'force-cache',
        }}
        resizeMode={'cover'}
        style={styles.image}
      />
      <LinearGradient
        colors={['#0000', '#000A', '#000']}
        style={styles.titleContainer}>
        <Text style={styles.text}>{post?.title}</Text>
        <Text style={styles.timestamp}>
          {moment(post?.publishedAt).format('HH:MM DD, MMMM')}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const boxShadow: any = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  android: {elevation: 6},
});

const styles = StyleSheet.create({
  container: {
    height: 240,
    marginBottom: 18,
    backgroundColor: '#eee',
    borderRadius: 24,
    marginHorizontal: 16,
    ...boxShadow,
  },
  image: {
    flex: 1,
    borderRadius: 24,
    height: 300,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: 160,
    paddingLeft: 16,
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
    paddingBottom: 24,
  },
  timestamp: {
    position: 'absolute',
    color: '#eee',
    fontSize: 12,
    fontWeight: '300',
    right: 16,
    bottom: 8,
  },
});
