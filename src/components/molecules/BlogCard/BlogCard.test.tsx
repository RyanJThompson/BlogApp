import { render } from '@testing-library/react-native';
import { ImageURISource } from 'react-native';
import BlogCard from './BlogCard';

describe('Unit - Atoms: BlogCardSubtitleText', () => {
  it('SHOULD render the Blog Card Subtitle Text and use the correct text value', () => {
    const image: ImageURISource = {
      uri: 'https://test-image.com',
    };
    const { getByTestId, getByText } = render(
      <BlogCard title={'Mr. Blob'} description={'Mr. Blobs description'} image={image} testID="blog-card" />,
    );
    expect(getByTestId('blog-card')).toBeDefined();
    expect(getByText('Mr. Blob')).toBeDefined();
    expect(getByText('Mr. Blobs description')).toBeDefined();
  });
});
