import { StyleSheet, Text } from 'react-native';

interface BlogCardAuthorText {
  text: string;
}

const BlogCardAuthorText: React.FC<BlogCardAuthorText> = ({ text }) => {
  return <Text style={styles.authorHeading}>{text}</Text>;
};

export default BlogCardAuthorText;

const styles = StyleSheet.create({
  authorHeading: {
    fontWeight: 'normal',
    fontSize: 14,
    paddingBottom: 10,
  },
});
