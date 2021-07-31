import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import GalleryScreen from '../screens/GalleryScreen';
import ImageDetailsScreen from '../screens/ImageDetailsScreen';

const Stack = createStackNavigator();

export default function GalleryNavigator() {
  return (
    <Stack.Navigator initialRouteName="GalleryHome">
      <Stack.Screen
        name="GalleryHome"
        component={GalleryScreen}
        options={{ headerTitle: 'Gallery', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="ImageDetails"
        component={ImageDetailsScreen}
        options={{ headerTitle: 'Image Details', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
}
