import { useEffect, useState } from 'react';
import { FlatList, ImageURISource } from 'react-native';
import BlogCard from '../molecules/BlogCard/BlogCard';
import createStyles from './BlogCardList.styles';
import { FIREBASE_DB_URL } from '@env';
import { firebase } from '@react-native-firebase/database';

interface DataItem {
  id: number;
  title: string;
  description: string;
  image: ImageURISource;
}

const styles = createStyles();

const BlogCardList: React.FC = () => {
  const [blogs, setBlogs] = useState<DataItem[]>();

  useEffect(() => {
    const getBlogs = async (): Promise<void> => {
      const snapshot = await firebase.app().database(FIREBASE_DB_URL).ref('/Blogs').once('value');
      const blogsData: DataItem[] = snapshot.val();
      const formattedBlogs = blogsData.map((item, index) => ({
        id: index,
        title: item.title,
        description: item.description,
        image: { uri: item.image.uri },
      }));
      setBlogs(formattedBlogs);
    };
    getBlogs();
  }, []);

  const renderItem = ({ item }: { item: DataItem }) => (
    <BlogCard title={item.title} description={item.description} image={item.image} />
  );

  return (
    <FlatList data={blogs} renderItem={renderItem} keyExtractor={item => item.id.toString()} style={styles.flatList} />
  );
};

export default BlogCardList;
