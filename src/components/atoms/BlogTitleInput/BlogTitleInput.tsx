import { useState } from 'react';
import { TextInput } from 'react-native';
import createStyles from './BlogTitleInput.styles';

const styles = createStyles();

interface BlogTitleInputProps {
  onTitleChange: (title: string) => void;
}

const BlogTitleInput: React.FC<BlogTitleInputProps> = ({ onTitleChange }) => {
  const [titleText, setTitleText] = useState('');

  const handleChange = (newTitleText: string) => {
    setTitleText(newTitleText);
    onTitleChange(newTitleText);
  };

  return (
    <TextInput
      style={styles.blogTitleInput}
      maxLength={200}
      placeholder="Blog Title"
      onChangeText={handleChange}
      defaultValue={titleText}
    />
  );
};

export default BlogTitleInput;
