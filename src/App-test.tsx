/**
 * @format
 */

import 'react-native';
import App from './App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import '../__mocks__/@react-native-firebase/database';

jest.useFakeTimers();
// TODO: Fix firebase causing app test to fail
it('renders correctly', () => {
  renderer.create(<App />);
});
