import { SafeAreaView, StyleSheet } from 'react-native';
import { CircularButton } from '../components/molecules';
import { BlogCardList } from '../components/organisms';

const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <BlogCardList />
      <CircularButton />
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
