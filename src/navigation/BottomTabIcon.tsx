import React from 'react';
import { Text, View, Image, ImageSourcePropType, StyleSheet } from 'react-native';

interface BottomTabData {
  title: string;
  iconSource: ImageSourcePropType;
  isFocused: boolean;
}

export default function BottomTabIcon(data: BottomTabData) {
  return (
    <View style={styles.container}>
      <Image source={data.iconSource} resizeMode="contain" style={styles.image} />
      <Text
        style={{
          fontWeight: data.isFocused ? 'bold' : 'normal',
          ...styles.text,
        }}
      >
        {data.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 25,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});
