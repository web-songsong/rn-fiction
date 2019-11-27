import React from 'react';
import {Header, Avatar} from 'react-native-elements';
export default () => {
  return (
    <Header
      placement="left"
      leftComponent={{
        text: 'DISCOVER',
        style: {color: '#fff', fontWeight: '900', fontSize: 18},
      }}
      rightComponent={
        <Avatar
          rounded
          source={{
            uri:
              'http://ww1.sinaimg.cn/large/8449ed5dly1g8xdkv1jr4j20xc0xcdik.jpg',
          }}
        />
      }
      backgroundColor="transparent"
    />
  );
};
