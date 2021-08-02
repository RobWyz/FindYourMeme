import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GalleryScreenNavigationProps } from '../navigation/navigation.types';

export default function GalleryScreen({ navigation }: GalleryScreenNavigationProps) {
  return (
    <View style={styles.container}>
      <Text style={{ paddingBottom: 20 }}>Welcome to Gallery Screen!</Text>
      <Button
        title="Image Details"
        onPress={() => {
          navigation.navigate('ImageDetails');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
