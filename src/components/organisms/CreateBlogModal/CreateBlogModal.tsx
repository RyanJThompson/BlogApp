import { Modal, Alert, View } from 'react-native';
import { BlogContentInput, BlogSubmitButton, BlogTitleInput } from '../../../components/atoms';
import createStyles from './CreateBlogModal.styles';

interface CreateBlogModalProps {
  isVisible: boolean;
  toggleModal: () => void;
}

const styles = createStyles();

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
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <BlogContentInput />
            <BlogTitleInput />
            <BlogSubmitButton toggleModal={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateBlogModal;
