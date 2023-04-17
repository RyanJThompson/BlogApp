import { createStackNavigator } from '@react-navigation/stack';
import { LatestScreen } from '../screens';
import React from 'react';

const Stack = createStackNavigator();

const LatestScreenNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Latest" component={LatestScreen} />
    </Stack.Navigator>
  );
};

export default LatestScreenNavigator;
