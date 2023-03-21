import { StyleSheet } from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    overlay: {
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
    buttonContainer: {
      backgroundColor: '#007AFF',
      borderRadius: 50,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
    },
  });

export default createStyles;
