import React from 'react';
import Video from 'react-native-video';
import {connect} from 'react-redux';
import {DvaModel} from '../utils/typeInterface';
import {MusicState} from '../models/music';

interface MusicPlayerProps extends DvaModel {
  music: MusicState;
}

const MusicPlayer = ({music}: MusicPlayerProps) => {
  if (!music.playList.length) {
    return null;
  }
  return (
    <>
      {!!music.playList.length && (
        <Video
          source={{uri: music.playList[music.currentIndex].url}}
          paused={music.paused}
        />
      )}
    </>
  );
};

export default connect(({music}: {music: MusicState}) => ({
  music,
}))(MusicPlayer);
