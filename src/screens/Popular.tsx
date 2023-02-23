import React from 'react';
import {View, Text} from 'react-native';
import IconStyling from '../styles/Icons';

const PopularScreen = (): JSX.Element => {
  return (
    <View style={IconStyling}>
      <Text>Most Popular Blogs!</Text>
    </View>
  );
};

export default PopularScreen;
