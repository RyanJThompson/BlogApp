import { useState } from 'react';
import { View } from 'react-native';
import { BlogContentInput, BlogTitleInput, BlogSubmitButton } from '../../../components/atoms';
import createStyles from './CreateBlogModalLayout.styles';

const styles = createStyles();

interface CreateBlogModalLayoutProps {
  toggleModal: () => void;
}

const CreateBlogModalLayout: React.FC<CreateBlogModalLayoutProps> = ({ toggleModal }) => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleTitleChange = (newTitle: string) => {
    setBlogTitle(newTitle);
  };

  const handleContentChange = (newContent: string) => {
    setBlogContent(newContent);
  };
  // Temporary check to confirm children input data is passed through to this component
  console.log(blogTitle);
  console.log(blogContent);
  return (
    <View style={styles.modalBackground}>
      <View style={styles.modalView}>
        <BlogTitleInput onTitleChange={handleTitleChange} />
        <BlogContentInput onContentChange={handleContentChange} />
        <BlogSubmitButton toggleModal={toggleModal} />
      </View>
    </View>
  );
};

export default CreateBlogModalLayout;
