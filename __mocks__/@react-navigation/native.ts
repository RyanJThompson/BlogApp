// Mocks the @react-navigation/native module
export default jest.mock('@react-navigation/native', () => {
  return {
    // avoids mocking the entire module which leads to unexpected failures
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});
