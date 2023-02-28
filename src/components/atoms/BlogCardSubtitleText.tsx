import { StyleSheet, Text } from 'react-native';

interface BlogCardSubtitleTextProps {
  text: string;
}

const BlogCardSubtitleText: React.FC<BlogCardSubtitleTextProps> = ({ text }) => {
  const shortenText = (): string => {
    const textLengthAllowed = 150;
    return text.length > textLengthAllowed ? text.substring(0, textLengthAllowed).trimEnd().concat('...') : text;
  };
  return <Text style={styles.subtitleText}>{shortenText()}</Text>;
};

export default BlogCardSubtitleText;

const styles = StyleSheet.create({
  subtitleText: {
    fontWeight: 'normal',
    fontSize: 14,
    marginTop: 10,
  },
});
