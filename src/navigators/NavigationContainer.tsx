import { NavigationContainer as RN_NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, PopularIcon, LatestIcon, ProfileIcon, SettingsIcon } from '../assets/icons';
import {
  HomeScreenNavigator,
  PopularScreenNavigator,
  LatestScreenNavigator,
  ProfileScreenNavigator,
  SettingsScreenNavigator,
} from '.';
import { AuthScreen } from './../screens';
import { useEffect, useState } from 'react';

const NavigationContainer: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <RN_NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false, unmountOnBlur: true }}>
            <Tab.Screen
              name="Tab Home"
              component={HomeScreenNavigator}
              options={{ tabBarIcon: HomeIcon, title: 'Home' }}
            />
            <Tab.Screen
              name="Tab Most Popular"
              component={PopularScreenNavigator}
              options={{ tabBarIcon: PopularIcon, title: 'Most Popular' }}
            />
            <Tab.Screen
              name="Tab Latest"
              component={LatestScreenNavigator}
              options={{ tabBarIcon: LatestIcon, title: 'Latest' }}
            />
            <Tab.Screen
              name="Tab Profile"
              component={ProfileScreenNavigator}
              options={{ tabBarIcon: ProfileIcon, title: 'Profile' }}
            />
            <Tab.Screen
              name="Tab Settings"
              component={SettingsScreenNavigator}
              options={{ tabBarIcon: SettingsIcon, title: 'Settings' }}
            />
          </Tab.Navigator>
        </RN_NavigationContainer>
      ) : (
        <AuthScreen />
      )}
    </>
  );
};

export default NavigationContainer;
