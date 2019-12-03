import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
export interface ShowImageWrapProps {
  uri: string;
}

export default ({uri}: ShowImageWrapProps) => {
  return (
    <View
      style={{
        width: 200,
        height: 200,
        borderRadius: 20,
        overflow: 'hidden',
      }}>
      <Image
        source={{uri}}
        containerStyle={{
          borderRadius: 300,
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
};
