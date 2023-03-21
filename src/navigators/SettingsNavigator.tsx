import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../screens';

const Stack = createStackNavigator();

const SettingsScreenNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsScreenNavigator;
