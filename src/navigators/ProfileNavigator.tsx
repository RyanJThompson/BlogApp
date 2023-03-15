import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../screens';

const Stack = createStackNavigator();

const ProfileScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileScreenNavigator;
