import { Modal, Alert, View } from 'react-native';
import { CreateBlogModalLayout } from '../../../components/molecules';

interface CreateBlogModalProps {
  isVisible: boolean;
  toggleModal: () => void;
}

const CreateBlogModal: React.FC<CreateBlogModalProps> = ({ isVisible, toggleModal }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          toggleModal();
        }}>
        <CreateBlogModalLayout toggleModal={toggleModal} />
      </Modal>
    </View>
  );
};

export default CreateBlogModal;
