import { View, Text, Image, ImageSourcePropType, Pressable } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BlogCardAuthorText } from '../../atoms';
import BlogCardSubtitleText from '../../atoms/BlogCardSubtitleText/BlogCardSubtitleText';
import createStyles from './BlogCard.styles';

interface BlogCardProps {
  title: string;
  description: string;
  image: ImageSourcePropType;
  author: string;
  testID?: string;
}

const styles = createStyles();

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, author, testID }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const blogContent = { title, description, image, author };

  return (
    <View style={styles.card} testID={testID}>
      <Pressable
        onPress={() => {
          navigation.navigate('Blog', { blogContent: blogContent });
        }}>
        <BlogCardAuthorText text={author} />
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <BlogCardSubtitleText text={description} />
      </Pressable>
    </View>
  );
};

export default BlogCard;
