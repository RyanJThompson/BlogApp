import { TextInput } from 'react-native';
import createStyles from './BlogTitleInput.styles';

const styles = createStyles();
const BlogTitleInput = () => {
  return <TextInput style={styles.blogTitleInput} maxLength={200} placeholder="Blog Title" />;
};

export default BlogTitleInput;
