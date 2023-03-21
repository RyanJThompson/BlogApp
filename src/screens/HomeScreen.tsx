import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { CreateBlogButton } from '../components/atoms';
import { BlogCardList, CreateBlogModal } from '../components/organisms';

const HomeScreen = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BlogCardList />
      <CreateBlogButton onPress={toggleModalVisibility} />
      <CreateBlogModal isVisible={modalVisible} toggleModal={toggleModalVisibility} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
