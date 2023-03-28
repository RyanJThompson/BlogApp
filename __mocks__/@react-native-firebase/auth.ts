/* (just to remember)
... () => () => { ... });
Is a higher-order function.
The first () => creates an arrow function that takes no arguments.
This function then returns another arrow function, also with no arguments: () =>
*/
export default jest.mock('@react-native-firebase/auth', () => () => {
  return {
    onAuthStateChanged: jest.fn(),
  };
});
