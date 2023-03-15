// Mocks the Firebase realtime database module
export default jest.mock('@react-native-firebase/database', () => ({
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
