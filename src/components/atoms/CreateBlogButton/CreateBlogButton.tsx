import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AddIcon } from '../../../assets/icons';
import createStyles from './CreateBlogButton.styles';

const styles = createStyles();

interface CreateBlogButtonProps {
  onPress: () => void;
}

const CreateBlogButton: React.FC<CreateBlogButtonProps> = ({ onPress }) => {
  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress} activeOpacity={0.7}>
        <AddIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CreateBlogButton;
