import { useCallback, useEffect, useState } from 'react';
import { Modal, Alert, View } from 'react-native';
import { BlogTitleInput, BlogContentInput, BlogSubmitButton } from '../../../components/atoms';
import { firebase, FirebaseDatabaseTypes } from '@react-native-firebase/database';
import createStyles from './CreateBlogModel.styles';
import CloseModalButton from '../../atoms/CloseModalButton/CloseModalButton';
import { firebaseDBRef } from '../../../api/firebase/realtimeDatabaseConfig';

interface CreateBlogModalProps {
  isVisible: boolean;
  toggleModal: () => void;
}

interface BlogDataItem {
  id: number;
}

const getKey = (snapshot: FirebaseDatabaseTypes.DataSnapshot): string => {
  const snapshotVal = snapshot.val();
  const snapshotLength = snapshotVal.length;
  const snapshotItems: BlogDataItem[] = snapshot.val();

  const snapshotKeys = snapshotItems
    .map((item, index) => {
      if (item !== null) {
        return index;
      }
    })
    .filter(number => number !== undefined);

  for (let i = 0; i < snapshotLength; i++) {
    if (!snapshotKeys.includes(i)) {
      return i.toString();
    }
  }
  return snapshotLength.toString();
};

const styles = createStyles();

const CreateBlogModal: React.FC<CreateBlogModalProps> = ({ isVisible, toggleModal }) => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [, setUsersName] = useState('');
  const [currentUsersEmail] = useState(firebase.auth().currentUser?.email);

  const handleTitleChange = (newTitle: string) => {
    setBlogTitle(newTitle);
  };

  const handleContentChange = (newContent: string) => {
    setBlogContent(newContent);
  };

  const getUsersFullName = useCallback(async () => {
    if (currentUsersEmail) {
      const nameToMatch = currentUsersEmail.split('.').join('-').toString();
      const userSnapshot = await firebaseDBRef.ref('/Users').orderByKey().equalTo(nameToMatch).once('value');
      const userData = userSnapshot.val();
      const userKey = Object.keys(userData)[0];
      const user = userData[userKey];
      const formattedName = {
        firstName: user.first_name,
        lastName: user.last_name,
      };
      const fullName = formattedName.firstName.toString() + ' ' + formattedName.lastName.toString();
      setUsersName(fullName);
      return fullName;
    }
    return '';
  }, [currentUsersEmail]);

  const submitBlogToFirebase = async (authorName: string) => {
    const blogsSnapshot = await firebaseDBRef.ref('/Blogs').once('value');
    const blogKeyFirebase = getKey(blogsSnapshot).toString();
    const newReference = firebaseDBRef.ref('/Blogs').child(blogKeyFirebase);
    console.log('Name state: ' + authorName);
    await newReference.set({
      author: authorName,
      title: blogTitle,
      description: blogContent,
      image: {
        uri: 'https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-479v.jpg?sfvrsn=4dba955c_12%20479w',
      },
    });
  };

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
            <CloseModalButton toggleModal={toggleModal} />
            <BlogTitleInput onTitleChange={handleTitleChange} />
            <BlogContentInput onContentChange={handleContentChange} />
            <BlogSubmitButton
              toggleModal={toggleModal}
              submitBlog={async () => {
                const authorName = await getUsersFullName();
                await submitBlogToFirebase(authorName);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateBlogModal;
