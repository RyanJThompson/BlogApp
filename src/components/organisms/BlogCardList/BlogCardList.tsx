// BlogCardList.tsx
import React, { useEffect } from 'react';
import { FlatList, ImageURISource } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { setBlogs } from '../../../store/blog';
import { firebaseDBRef } from '../../../api/firebase/realtimeDatabaseConfig';
import { BlogCard } from '../../molecules';
import createStyles from './BlogCardList.styles';

interface DataItem {
  id: number;
  title: string;
  description: string;
  image: ImageURISource;
  author: string;
}

interface BlogCardListProps {
  testID?: string;
}

const styles = createStyles();

const BlogCardList: React.FC<BlogCardListProps> = ({ testID }) => {
  const dispatch = useDispatch();
  const blogs = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    const getBlogs = async (): Promise<void> => {
      const blogsSnapshot = await firebaseDBRef.ref('/Blogs').once('value');
      const blogsData: DataItem[] = blogsSnapshot.val();
      const nonNullBlogs = blogsData.filter(item => item !== null);
      const formattedBlogs = nonNullBlogs.map((item, index) => ({
        id: index,
        title: item.title,
        description: item.description,
        image: { uri: item.image.uri },
        author: item.author,
      }));
      dispatch(setBlogs(formattedBlogs));
    };
    getBlogs();
  }, [dispatch]);

  const renderItem = ({ item }: { item: DataItem }) => (
    <BlogCard title={item.title} description={item.description} image={item.image} author={item.author} />
  );

  return (
    <FlatList
      data={blogs}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      style={styles.flatList}
      testID={testID}
    />
  );
};

export default BlogCardList;
