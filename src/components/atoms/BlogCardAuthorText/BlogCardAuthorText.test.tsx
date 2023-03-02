import { render } from '@testing-library/react-native';
import BlogCardAuthorText from './BlogCardAuthorText';

describe('Unit - Atoms: BlogCardAuthorText', () => {
  it('SHOULD render the Blog Card Author Text text and use the correct text value', () => {
    const { getByTestId, getByText } = render(<BlogCardAuthorText text="Mr. Blob" testID="author-heading" />);
    expect(getByTestId('author-heading')).toBeDefined();
    expect(getByText('Mr. Blob')).toBeDefined();
  });
});
