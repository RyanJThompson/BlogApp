import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Add } from '../../../assets/icons';
import createStyles from './CircularButton.styles';

const styles = createStyles();

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
        <Add />
      </TouchableOpacity>
    </View>
  );
};

export default CircularButton;
