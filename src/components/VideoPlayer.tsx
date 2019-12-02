import React, {Component} from 'react';
import {Text} from 'react-native-elements';
import Video from 'react-native-video';
import testMp4 from '../test.mp4';
// const testMp4 = require('../test.mp4');

export default () => {
  return (
    <Video
      style={{
        flex: 1,
        width: 300,
        height: 300,
      }}
      source={testMp4}
      controls={true}
    />
  );
};
