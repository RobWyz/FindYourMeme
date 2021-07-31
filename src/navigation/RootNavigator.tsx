import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import GalleryScreen from '../screens/GalleryScreen';
import DebugScreen from '../screens/DebugScreen';
import BottomTabIcon from './BottomTabIcon';

const BottomTab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: '#fff',
            height: 70,
            borderTopColor: '#555',
          },
        }}
      >
        <BottomTab.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              BottomTabIcon({
                title: 'Gallery',
                iconSource: require('../../assets/gallery-tab-icon.png'),
                isFocused: focused,
              }),
          }}
        />
        <BottomTab.Screen
          name="Debug"
          component={DebugScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              BottomTabIcon({
                title: 'Debug',
                iconSource: require('../../assets/debug-tab-icon.png'),
                isFocused: focused,
              }),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
