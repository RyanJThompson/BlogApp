import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import BlogCard from '../molecules/BlogCard';

interface DataItem {
  id: number;
  title: string;
  description: string;
  image: any;
}

const data: DataItem[] = [
  {
    id: 1,
    title: 'Covid 19 bla bla title',
    description:
      'Covid 19 is less impacting europe and how is the eceonomy changing?',
    image: {
      uri: 'https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-479v.jpg?sfvrsn=4dba955c_12%20479w',
    },
  },
  {
    id: 2,
    title: 'The Importance of Self-Care for Mental Health',
    description:
      "In today's fast-paced and often stressful world, taking care of one's mental health has become more crucial than ever. Self-care is the practice of intentionally taking time to prioritize one's own physical, emotional, and mental well-being. ",
    image: {
      uri: 'https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-479v.jpg?sfvrsn=4dba955c_12%20479w',
    },
  },
  {
    id: 3,
    title:
      "The Power of Gratitude: Why It's Important to Cultivate a Thankful Mindset",
    description:
      "Expressing gratitude is a simple yet powerful practice that can have profound effects on our mental health and overall well-being. By focusing on the good in our lives and acknowledging the people and things we're grateful for, we can reduce stress and anxiety, improve our relationships, and cultivate a more positive outlook on life. So take a few moments each day to reflect on the blessings in your life and express your gratitude – your mind and body will thank you.",
    image: {
      uri: 'https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-479v.jpg?sfvrsn=4dba955c_12%20479w',
    },
  },
];

// Aim: add author to Blog Card above image, create tests that test the card lists logic
const BlogCardList: React.FC = () => {
  const renderItem = ({item}: {item: DataItem}) => (
    <BlogCard
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    padding: 20,
  },
});

export default BlogCardList;
