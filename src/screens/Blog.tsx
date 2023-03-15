import { SafeAreaView, StyleSheet, Text } from 'react-native';

const BlogScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
    </SafeAreaView>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
