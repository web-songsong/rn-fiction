import React from 'react';
import {Icon} from 'react-native-elements';
import globalColor from '../globalColor';
import {View} from 'react-native';

export default () => {
  return (
    <View
      style={{
        marginRight: 20,
      }}>
      <Icon
        name="kebab-horizontal"
        color={globalColor.ICON_BUTTON}
        type="octicon"
      />
    </View>
  );
};
