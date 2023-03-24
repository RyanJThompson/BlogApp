import { Text, TouchableOpacity } from 'react-native';
import createStyles from './BlogSubmitButton.styles';

interface BlogSubmitButtonProps {
  toggleModal: () => void;
  submitBlog: () => void;
}

const styles = createStyles();

const BlogSubmitButton: React.FC<BlogSubmitButtonProps> = ({ toggleModal, submitBlog }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        toggleModal();
        submitBlog();
      }}>
      <Text style={styles.buttonText}>Add Blog</Text>
    </TouchableOpacity>
  );
};

export default BlogSubmitButton;
