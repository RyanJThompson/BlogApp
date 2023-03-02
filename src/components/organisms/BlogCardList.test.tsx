import { render } from '@testing-library/react-native';
import { FlatList, ImageURISource } from 'react-native';
import BlogCard from '../molecules/BlogCard/BlogCard';

interface DataItem {
  id: number;
  title: string;
  description: string;
  image: ImageURISource;
}

/*  Each time MockBlogCardElement() is called it will create a new member of the mockData
    array and when used as a render item prop it will render the BlogCard n number
    of times where n = the length of the mockData array */
const mockData: DataItem[] = [];
let index = -1;
const MockBlogCardElement = () => {
  index++;
  mockData[index] = {
    id: index + 1,
    title: `title number ${index + 1}`,
    description: `description number ${index + 1}`,
    image: { uri: `https://test-image.com/number-${index + 1}` },
  };
  return (
    <BlogCard
      title={`title number ${index + 1}`}
      description={`description number ${index + 1}`}
      image={{ uri: `https://test-image.com/number-${index + 1}` }}
    />
  );
};

describe('Unit - Organisms: BlogCardList', () => {
  it('SHOULD render the Blog Card List with the correct values', () => {
    [2].forEach(() => {
      MockBlogCardElement();
    });
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={MockBlogCardElement}
        keyExtractor={item => item.id.toString()}
        testID="blog-card-list"
      />,
    );
    expect(getByTestId('blog-card-list')).toBeDefined();
    const element = getByTestId('blog-card-list');
    expect(element.props.data[0].title).toBe('title number 1');
    expect(element.props.data[1].description).toBe('description number 2');
    expect(element.props.data[1].image.uri).toBe('https://test-image.com/number-2');
  });
});
