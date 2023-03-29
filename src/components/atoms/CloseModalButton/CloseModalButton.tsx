import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { CloseIcon } from '../../../assets/icons';
import createStyles from './CloseModalButton.styles';

interface CloseModalButtonProps {
  toggleModal: () => void;
}

const styles = createStyles();

const CloseModalButton: React.FC<CloseModalButtonProps> = ({ toggleModal }) => {
  return (
    <TouchableOpacity onPress={toggleModal}>
      <View style={styles.closeModalButton}>
        <CloseIcon />
      </View>
    </TouchableOpacity>
  );
};

export default CloseModalButton;
