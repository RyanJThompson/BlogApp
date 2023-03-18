import { render } from '@testing-library/react-native';
import { FlatList, ImageURISource } from 'react-native';
import { BlogCard } from '../../molecules';

interface DataItem {
  id: number;
  title: string;
  description: string;
  image: ImageURISource;
  author: string;
}

const mockData: DataItem[] = [];
const MockBlogCardElementData = (numOfTimes: number) => {
  for (let i = 0; i < numOfTimes; i++) {
    mockData[i] = {
      id: i + 1,
      title: `title number ${i + 1}`,
      description: `description number ${i + 1}`,
      image: { uri: `https://test-image.com/number-${i + 1}` },
      author: `Author ${i + 1}`,
    };
  }
};

let i = -1;
const renderItem = () => {
  i++;
  return (
    <BlogCard
      title={`title number ${i + 1}`}
      description={`description number ${i + 1}`}
      image={{ uri: `https://test-image.com/number-${i + 1}` }}
      author={`Author ${i + 1}`}
    />
  );
};

describe('Unit - Organisms: BlogCardList', () => {
  it('SHOULD render the Blog Card List with the correct values', () => {
    MockBlogCardElementData(4);
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        testID="blog-card-list"
      />,
    );

    expect(getByTestId('blog-card-list')).toBeDefined();
    const element = getByTestId('blog-card-list');
    expect(element.props.data[0].title).toBe('title number 1');
    expect(element.props.data[1].description).toBe('description number 2');
    expect(element.props.data[2].image.uri).toBe('https://test-image.com/number-3');
    expect(element.props.data[3].author).toBe('Author 4');
  });
});
