/**
 * @format
 */

import 'react-native';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.useFakeTimers();
// TODO: Fix firebase causing app test to fail
it('renders correctly', () => {
  renderer.create(<App />);
});
