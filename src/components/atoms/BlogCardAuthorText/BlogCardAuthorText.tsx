import { Text } from 'react-native';
import createStyles from './BlogCardAuthorText.styles';

interface BlogCardAuthorText {
  text: string;
  testID?: string;
}

const styles = createStyles();

const BlogCardAuthorText: React.FC<BlogCardAuthorText> = ({ text, testID }) => {
  return (
    <Text style={styles.authorHeading} testID={testID}>
      {text}
    </Text>
  );
};

export default BlogCardAuthorText;
