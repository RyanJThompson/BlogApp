import { createStackNavigator } from '@react-navigation/stack';
import { PopularScreen } from '../screens';

const Stack = createStackNavigator();

const PopularScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Popular Stack" component={PopularScreen} />
    </Stack.Navigator>
  );
};

export default PopularScreenNavigator;
