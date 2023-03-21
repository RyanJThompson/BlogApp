import { Modal, Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';
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
            <TextInput style={styles.blogTitleInput} placeholder="Blog Title" />
            <TextInput style={styles.blogTextInput} multiline={true} numberOfLines={4} placeholder="Blog Content" />
            <TouchableOpacity style={styles.button} onPress={toggleModal}>
              <Text style={styles.buttonText}>Add Blog</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateBlogModal;
