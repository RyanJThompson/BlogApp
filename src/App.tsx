/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, PopularScreen, LatestScreen, ProfileScreen, SettingsScreen } from './screens';
import { Home, Latest, Popular, Profile, Settings } from './assets/icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: Home }} />
        <Tab.Screen name="Most Popular" component={PopularScreen} options={{ tabBarIcon: Popular }} />
        <Tab.Screen name="Latest" component={LatestScreen} options={{ tabBarIcon: Latest }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: Profile }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: Settings }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
