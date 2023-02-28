import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../screens';

const Stack = createStackNavigator();

const ProfileScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile Stack" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileScreenNavigator;
