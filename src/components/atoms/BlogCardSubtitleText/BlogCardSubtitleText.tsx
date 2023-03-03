import { Text } from 'react-native';
import createStyles from './BlogCardSubtitleText.styles';

interface BlogCardSubtitleTextProps {
  text: string;
  testID?: string;
}

const styles = createStyles();

const BlogCardSubtitleText: React.FC<BlogCardSubtitleTextProps> = ({ text, testID }) => {
  const shortenText = (): string => {
    const textLengthAllowed = 150;
    return text.length > textLengthAllowed ? text.substring(0, textLengthAllowed).trimEnd().concat('...') : text;
  };
  return (
    <Text style={styles.subtitleText} testID={testID}>
      {shortenText()}
    </Text>
  );
};

export default BlogCardSubtitleText;
