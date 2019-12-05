import React from 'react';
import {Button, Icon} from 'react-native-elements';
import globalColor from '../globalColor';
export interface MadeButtonProps {
  title?: string;
  icon?: any;
  onPress?: any;
}

export default ({title, icon, onPress}: MadeButtonProps) => {
  return (
    <>
      <Button
        onPress={onPress}
        title={title}
        icon={icon}
        buttonStyle={{
          backgroundColor: '#F9E259',
          padding: 3,
          width: 60,
          borderRadius: 20,
        }}
        titleStyle={{
          color: globalColor.INPUT_BG,
          fontSize: 14,
        }}
      />
    </>
  );
};
