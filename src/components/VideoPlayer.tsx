import React from 'react';
import Video from 'react-native-video';
import testMp4 from '../test.mp4';

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
