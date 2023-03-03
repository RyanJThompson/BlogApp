import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { BlogCardAuthorText } from '../../atoms';
import BlogCardSubtitleText from '../../atoms/BlogCardSubtitleText/BlogCardSubtitleText';
import createStyles from './BlogCard.styles';

interface BlogCardProps {
  title: string;
  description: string;
  image: ImageSourcePropType;
  testID?: string;
}

const styles = createStyles();

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, testID }) => {
  return (
    <View style={styles.card} testID={testID}>
      <BlogCardAuthorText text={'Ryan Thompson'} />
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <BlogCardSubtitleText text={description} />
    </View>
  );
};

export default BlogCard;
