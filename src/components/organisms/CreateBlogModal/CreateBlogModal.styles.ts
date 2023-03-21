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
    blogTitleInput: {
      width: '100%',
      height: '5%',
      borderRadius: 4,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 20,
      marginTop: 5,
      paddingHorizontal: 5,
    },
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
