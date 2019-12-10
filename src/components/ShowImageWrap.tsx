import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
export interface ShowImageWrapProps {
  uri: string;
  width?: number;
  height?: number;
  margin?: number;
  onPress?: any;
  borderRadius?: number;
}

export default ({
  uri,
  borderRadius,
  width,
  height,
  margin,
  onPress,
}: ShowImageWrapProps) => {
  return (
    <View
      style={{
        width: width || 200,
        height: height || 200,
        borderRadius: borderRadius || 0,
        overflow: 'hidden',
        margin,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri}}
          containerStyle={{
            borderRadius: 300,
          }}
          style={{
            width: width || 200,
            height: height || 200,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
