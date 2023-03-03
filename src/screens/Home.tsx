import { SafeAreaView, StyleSheet } from 'react-native';
import BlogCardList from '../components/organisms/BlogCardList';

const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <BlogCardList />
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
