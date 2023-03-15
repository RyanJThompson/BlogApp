import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, BlogScreen } from '../screens';

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Blog" component={BlogScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
