import { NavigationContainer as RN_NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Popular, Latest, Profile, Settings } from '../assets/icons';
import {
  HomeScreenNavigator,
  PopularScreenNavigator,
  LatestScreenNavigator,
  ProfileScreenNavigator,
  SettingsScreenNavigator,
} from '.';

const NavigationContainer: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <RN_NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreenNavigator} options={{ tabBarIcon: Home }} />
        <Tab.Screen name="Most Popular" component={PopularScreenNavigator} options={{ tabBarIcon: Popular }} />
        <Tab.Screen name="Latest" component={LatestScreenNavigator} options={{ tabBarIcon: Latest }} />
        <Tab.Screen name="Profile" component={ProfileScreenNavigator} options={{ tabBarIcon: Profile }} />
        <Tab.Screen name="Settings" component={SettingsScreenNavigator} options={{ tabBarIcon: Settings }} />
      </Tab.Navigator>
    </RN_NavigationContainer>
  );
};

export default NavigationContainer;
