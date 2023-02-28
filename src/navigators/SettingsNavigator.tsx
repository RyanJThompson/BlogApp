import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../screens';

const Stack = createStackNavigator();

const SettingsScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings Stack" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsScreenNavigator;
