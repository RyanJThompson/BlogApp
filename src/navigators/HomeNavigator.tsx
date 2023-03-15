import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, BlogScreen } from '../screens';

interface RouteParams {
  name?: string;
}

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Blog"
        component={BlogScreen}
        options={({ route }) => ({ title: (route.params as RouteParams)?.name })}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
