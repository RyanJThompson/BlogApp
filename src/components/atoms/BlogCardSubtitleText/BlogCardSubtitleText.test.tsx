import { render } from '@testing-library/react-native';
import BlogCardSubtitleText from './BlogCardSubtitleText';

describe('Unit - Atoms: BlogCardSubtitleText', () => {
  it('SHOULD render the Blog Card Subtitle Text and use the correct text value', () => {
    const { getByTestId, getByText } = render(
      <BlogCardSubtitleText text="Mr. Blobs subtitle" testID="subtitle-text" />,
    );
    expect(getByTestId('subtitle-text')).toBeDefined();
    expect(getByText('Mr. Blobs subtitle')).toBeDefined();
  });
});
