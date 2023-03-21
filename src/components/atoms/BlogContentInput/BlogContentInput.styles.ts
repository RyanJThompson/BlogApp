import { StyleSheet } from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    blogTextInput: {
      width: '100%',
      height: '80%',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      textAlignVertical: 'top',
      paddingHorizontal: 5,
    },
  });

export default createStyles;
