import { ParamListBase } from '@react-navigation/native';
import { Image, ImageSourcePropType, SafeAreaView, Text } from 'react-native';
import { BlogCardSubtitleText } from '../components/atoms';
import createStyles from '../components/molecules/BlogCard/BlogCard.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface RouteParams {
  blogContent: {
    title: string;
    description: string;
    image: ImageSourcePropType;
    author: string;
  };
}

const styles = createStyles();

type BlogScreenProps = NativeStackScreenProps<ParamListBase, 'Blog'>;

const BlogScreen = ({ route }: BlogScreenProps): JSX.Element => {
  const getContent = (route.params as RouteParams)?.blogContent;

  return (
    <SafeAreaView>
      <Image source={getContent.image} style={styles.image} />
      <Text style={styles.title}>{getContent.title}</Text>
      <BlogCardSubtitleText text={getContent.description} />
    </SafeAreaView>
  );
};

export default BlogScreen;
