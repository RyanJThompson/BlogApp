import { createStackNavigator } from '@react-navigation/stack';
import { LatestScreen } from '../screens';

const Stack = createStackNavigator();

const LatestScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Latest Stack" component={LatestScreen} />
    </Stack.Navigator>
  );
};

export default LatestScreenNavigator;
