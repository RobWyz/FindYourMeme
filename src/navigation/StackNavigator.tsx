import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import GalleryScreen from '../screens/GalleryScreen';
import ImageDetailsScreen from '../screens/ImageDetailsScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Gallery">
      <Stack.Screen
        name="Gallery"
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
