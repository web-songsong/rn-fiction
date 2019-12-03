import React from 'react';
import {Image} from 'react-native-elements';
import headerMore from '../assets/images/header-more.png';

export default () => {
  return (
    <Image
      source={headerMore}
      style={{width: 30, height: 20, marginRight: 30}}
    />
  );
};
