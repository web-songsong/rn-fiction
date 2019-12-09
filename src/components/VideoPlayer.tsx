import React from 'react';
import Video from 'react-native-video';

export interface VideoPlayerProps {
  uri: string;
}
export default ({uri}: VideoPlayerProps) => {
  return (
    <Video
      style={{
        flex: 1,
      }}
      source={{uri}}
      controls={true}
    />
  );
};
