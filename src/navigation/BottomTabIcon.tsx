import React from 'react';
import { Text, View, Image, ImageSourcePropType } from 'react-native';

interface BottomTabData {
  title: string;
  iconSource: ImageSourcePropType;
  isFocused: boolean;
}

export default function BottomTabIcon(data: BottomTabData) {
  return (
    <View style={{ flex: 1, width: 100, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={data.iconSource}
        resizeMode="contain"
        style={{
          width: 70,
          height: 25,
        }}
      />
      <Text
        style={{
          color: 'black',
          fontWeight: data.isFocused ? 'bold' : 'normal',
          fontSize: 16,
        }}
      >
        {data.title}
      </Text>
    </View>
  );
}
