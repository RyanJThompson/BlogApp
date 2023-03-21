import { Text, TouchableOpacity } from 'react-native';
import createStyles from './BlogSubmitButton.styles';

interface BlogSubmitButtonProps {
  toggleModal: () => void;
}

const styles = createStyles();

const BlogSubmitButton: React.FC<BlogSubmitButtonProps> = ({ toggleModal }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={toggleModal}>
      <Text style={styles.buttonText}>Add Blog</Text>
    </TouchableOpacity>
  );
};

export default BlogSubmitButton;
