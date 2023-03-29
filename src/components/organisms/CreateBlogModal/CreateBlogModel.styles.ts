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
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 30,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
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
  });

export default createStyles;
