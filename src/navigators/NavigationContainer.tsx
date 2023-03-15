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
        <Tab.Screen name="Tab Home" component={HomeScreenNavigator} options={{ tabBarIcon: Home, title: 'Home' }} />
        <Tab.Screen
          name="Tab Most Popular"
          component={PopularScreenNavigator}
          options={{ tabBarIcon: Popular, title: 'Most Popular' }}
        />
        <Tab.Screen
          name="Tab Latest"
          component={LatestScreenNavigator}
          options={{ tabBarIcon: Latest, title: 'Latest' }}
        />
        <Tab.Screen
          name="Tab Profile"
          component={ProfileScreenNavigator}
          options={{ tabBarIcon: Profile, title: 'Profile' }}
        />
        <Tab.Screen
          name="Tab Settings"
          component={SettingsScreenNavigator}
          options={{ tabBarIcon: Settings, title: 'Settings' }}
        />
      </Tab.Navigator>
    </RN_NavigationContainer>
  );
};

export default NavigationContainer;
