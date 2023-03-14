/**
 * @format
 */

import 'react-native';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Mock the Firebase realtime database module
jest.mock('@react-native-firebase/database', () => ({
  firebase: {
    app: jest.fn(() => ({
      database: jest.fn(() => ({
        ref: jest.fn(() => ({
          once: jest.fn(() => ({
            val: jest.fn(() => ({
              map: jest.fn(),
            })),
          })),
        })),
      })),
    })),
  },
}));

jest.useFakeTimers();
// TODO: Fix firebase causing app test to fail
it('renders correctly', () => {
  renderer.create(<App />);
});
