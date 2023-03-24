import { useState } from 'react';
import { TextInput } from 'react-native';
import createStyles from './BlogContentInput.styles';

interface BlogContentInputProps {
  onContentChange: (content: string) => void;
}

const styles = createStyles();

const BlogContentInput: React.FC<BlogContentInputProps> = ({ onContentChange }) => {
  const [contentText, setContentText] = useState('');

  const handleChange = (newTitleText: string) => {
    setContentText(newTitleText);
    onContentChange(newTitleText);
  };
  return (
    <TextInput
      style={styles.blogTextInput}
      multiline={true}
      maxLength={4000}
      placeholder="Blog Content"
      onChangeText={handleChange}
      defaultValue={contentText}
    />
  );
};

export default BlogContentInput;
