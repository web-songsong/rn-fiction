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
  cover?: any;
}

export default ({
  uri,
  borderRadius,
  width,
  height,
  margin,
  onPress,
  cover,
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
      {cover}
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri}}
          containerStyle={{}}
          style={{
            width: width || 200,
            height: height || 200,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
