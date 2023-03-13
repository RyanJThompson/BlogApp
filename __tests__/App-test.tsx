/**
 * @format
 */

import 'react-native';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../src/api/firebase/realtimeDatabaseConfig.ts', () => {
  return {
    firebaseDBRef: jest.fn(),
    firebaseDatabaseurl: jest.fn(),
  };
});

jest.useFakeTimers();
// TODO: Fix firebase causing app test to fail
it('renders correctly', () => {
  renderer.create(<App />);
});
