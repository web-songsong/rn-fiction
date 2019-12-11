import React from 'react';
import {Button} from 'react-native-elements';
import globalColor from '../globalColor';
import {View, ViewStyle} from 'react-native';
export interface MadeButtonProps {
  title?: string;
  icon?: any;
  onPress?: any;
  style?: ViewStyle;
}

export default ({title, icon, onPress, style}: MadeButtonProps) => {
  return (
    <>
      <View style={style}>
        <Button
          onPress={onPress}
          title={title}
          icon={icon}
          buttonStyle={{
            backgroundColor: '#F9E259',
            padding: 3,
            minWidth: 60,
            borderRadius: 20,
          }}
          titleStyle={{
            color: globalColor.INPUT_BG,
            fontSize: 14,
          }}
        />
      </View>
    </>
  );
};
