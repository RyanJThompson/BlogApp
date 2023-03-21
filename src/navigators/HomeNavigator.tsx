import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, BlogScreen } from '../screens';

interface RouteParams {
  blogContent: {
    author: string;
  };
}

const Stack = createStackNavigator();

const HomeScreenNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Blog"
        component={BlogScreen}
        options={({ route }) => ({ title: (route.params as RouteParams)?.blogContent.author })}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
