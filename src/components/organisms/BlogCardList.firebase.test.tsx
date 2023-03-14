import { render, waitFor } from '@testing-library/react-native';
import BlogCardList from './BlogCardList';

jest.mock('@react-native-firebase/database', () => ({
  firebase: {
    app: jest.fn(() => ({
      database: jest.fn(() => ({
        ref: jest.fn(() => ({
          once: jest.fn(() =>
            Promise.resolve({
              val: jest.fn(() => [
                {
                  id: 1,
                  title: 'Blog 1',
                  description: 'Description 1',
                  image: { uri: 'https://example.com/image1.png' },
                },
                {
                  id: 2,
                  title: 'Blog 2',
                  description: 'Description 2',
                  image: { uri: 'https://example.com/image2.png' },
                },
              ]),
            }),
          ),
        })),
      })),
    })),
  },
}));

describe('BlogCardList', () => {
  it('renders correctly', async () => {
    const { getByTestId } = render(<BlogCardList testID="blog-card-list" />);
    await waitFor(() => {
      const blogCardList = getByTestId('blog-card-list');
      expect(blogCardList).toBeDefined();
      expect(blogCardList.props.data.length).toEqual(2);
    });
  });
});
