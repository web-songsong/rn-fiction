import React, {Component} from 'react';
import {Text} from 'react-native-elements';
import Video from 'react-native-video';
import {connect} from 'react-redux';
import {DvaModel} from '../utils/typeInterface';
import {MusicState} from '../models/music';
import testMp4 from '../test.mp4';

interface MusicPlayerProps extends DvaModel {
  music: MusicState;
}

const MusicPlayer = ({music}: MusicPlayerProps) => {
  return (
    <>
      {!!music.playList.length && (
        <Video
          source={{uri: music.playList[music.currentIndex].uri}}
          paused={music.paused}
        />
      )}
    </>
  );
};

export default connect(({music}: {music: MusicState}) => ({
  music,
}))(MusicPlayer);
