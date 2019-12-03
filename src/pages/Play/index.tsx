import React from 'react';
import {Text} from 'react-native-elements';
import VideoPlayer from '../../components/VideoPlayer';
import {View} from 'react-native';

const Play = () => {
  return (
    <>
      <View
        style={{
          height: 300,
        }}>
        <VideoPlayer />
      </View>
    </>
  );
};
export default Play;
