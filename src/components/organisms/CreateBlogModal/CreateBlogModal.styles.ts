import { StyleSheet } from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 35,
      paddingTop: 30,
      paddingBottom: 10,
      justifyContent: 'flex-start',
      alignItems: 'center',
      textAlignVertical: 'flex-start',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      maxHeight: '70%',
    },
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
