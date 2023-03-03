import { StyleSheet } from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 10,
    },
    image: {
      height: 150,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      resizeMode: 'cover',
      marginBottom: 5,
    },
  });

export default createStyles;
