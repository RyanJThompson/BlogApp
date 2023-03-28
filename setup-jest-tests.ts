export {};

jest.mock('@react-navigation/native', () => {
  return {
    // avoids mocking the entire module which leads to unexpected failures
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

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

/* (just to remember)
... () => () => { ... });
Is a higher-order function.
The first () => creates an arrow function that takes no arguments.
This function then returns another arrow function, also with no arguments: () =>
*/
jest.mock('@react-native-firebase/auth', () => () => {
  return {
    onAuthStateChanged: jest.fn(),
  };
});
