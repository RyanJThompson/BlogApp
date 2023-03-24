import { FIREBASE_DB_URL } from '@env';
import { firebase, FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { useState } from 'react';
import { View } from 'react-native';
import { BlogContentInput, BlogTitleInput, BlogSubmitButton } from '../../../components/atoms';
import createStyles from './CreateBlogModalLayout.styles';

const styles = createStyles();

interface CreateBlogModalLayoutProps {
  toggleModal: () => void;
}

interface DataItem {
  id: number;
}

const getKey = (snapshot: FirebaseDatabaseTypes.DataSnapshot): string => {
  const snapshotVal = snapshot.val();
  const snapshotLength = snapshotVal.length;
  const snapshotItems: DataItem[] = snapshot.val();

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

const CreateBlogModalLayout: React.FC<CreateBlogModalLayoutProps> = ({ toggleModal }) => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleTitleChange = (newTitle: string) => {
    setBlogTitle(newTitle);
  };

  const handleContentChange = (newContent: string) => {
    setBlogContent(newContent);
  };

  const submitBlogToFirebase = async () => {
    const blogsSnapshot = await firebase.app().database(FIREBASE_DB_URL).ref('/Blogs').once('value');
    const blogKeyFirebase = getKey(blogsSnapshot).toString();
    const newReference = firebase.app().database(FIREBASE_DB_URL).ref('/Blogs').child(blogKeyFirebase);
    newReference.set({
      author: 'Ryan Thompson',
      title: blogTitle,
      description: blogContent,
      image: {
        uri: 'https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-479v.jpg?sfvrsn=4dba955c_12%20479w',
      },
    });
  };

  return (
    <View style={styles.modalBackground}>
      <View style={styles.modalView}>
        <BlogTitleInput onTitleChange={handleTitleChange} />
        <BlogContentInput onContentChange={handleContentChange} />
        <BlogSubmitButton toggleModal={toggleModal} submitBlog={submitBlogToFirebase} />
      </View>
    </View>
  );
};

export default CreateBlogModalLayout;
