import { Text, ViewStyle } from 'react-native';

interface BlogCardAuthorText {
  style: ViewStyle;
  text: string;
}

const BlogCardAuthorText: React.FC<BlogCardAuthorText> = ({ style, text }) => {
  return <Text style={style}>{text}</Text>;
};

export default BlogCardAuthorText;
