import React from 'react';
import {View} from 'react-native';

export default (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 5,
      }}>
      {props.children}
    </View>
  );
};
