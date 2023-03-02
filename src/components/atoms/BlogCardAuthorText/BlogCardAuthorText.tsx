import { StyleSheet, Text } from 'react-native';

interface BlogCardAuthorText {
  text: string;
  testID?: string;
}

const BlogCardAuthorText: React.FC<BlogCardAuthorText> = ({ text, testID }) => {
  return (
    <Text style={styles.authorHeading} testID={testID}>
      {text}
    </Text>
  );
};

export default BlogCardAuthorText;

const styles = StyleSheet.create({
  authorHeading: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom: 10,
  },
});
