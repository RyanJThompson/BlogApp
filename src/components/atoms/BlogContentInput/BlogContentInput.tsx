import { TextInput } from 'react-native';
import createStyles from './BlogContentInput.styles';

const styles = createStyles();

const CreateBlogContent: React.FC = () => {
  return <TextInput style={styles.blogTextInput} multiline={true} maxLength={1500} placeholder="Blog Content" />;
};

export default CreateBlogContent;
