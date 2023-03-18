import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CircularButton: React.FC = ({}) => {
  const handleOnPress = () => {
    console.log('HELLO');
  };

  return (
    <View style={styles.overlay}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          handleOnPress();
        }}
        activeOpacity={0.7}>
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default CircularButton;

const styles = StyleSheet.create({
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
