import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import GalleryScreen from '../screens/GalleryScreen';
import ShareScreen from '../screens/ShareScreen';

const BottomTab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Gallery" component={GalleryScreen} />
        <BottomTab.Screen name="Share" component={ShareScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
