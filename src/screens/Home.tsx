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
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});
