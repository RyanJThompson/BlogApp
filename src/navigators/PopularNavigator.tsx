import { createStackNavigator } from '@react-navigation/stack';
import { PopularScreen } from '../screens';

const Stack = createStackNavigator();

const PopularScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Popular" component={PopularScreen} />
    </Stack.Navigator>
  );
};

export default PopularScreenNavigator;
