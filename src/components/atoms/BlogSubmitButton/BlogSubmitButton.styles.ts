import { StyleSheet } from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#2196F3',
      borderRadius: 4,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginTop: 15,
    },
  });

export default createStyles;
