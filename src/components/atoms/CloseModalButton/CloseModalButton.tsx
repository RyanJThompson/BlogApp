import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { Close } from '../../../assets/icons';
import createStyles from './CloseModalButton.styles';

interface CloseModalButtonProps {
  toggleModal: () => void;
}

const styles = createStyles();

const CloseModalButton: React.FC<CloseModalButtonProps> = ({ toggleModal }) => {
  return (
    <TouchableOpacity onPress={toggleModal}>
      <View style={styles.closeModalButton}>
        <Close />
      </View>
    </TouchableOpacity>
  );
};

export default CloseModalButton;
