import React from 'react';
import {SocialIcon} from 'react-native-elements';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {DvaModel} from '../utils/typeInterface';
import {MusicState} from '../models/music';
import MusicPlayer from './MusicPlayer';

export default connect(({music}: {music: MusicState}) => ({music}))(
  ({dispatch}: DvaModel) => {
    const changePaused = () => {
      dispatch({
        type: 'music/changePaused',
      });
    };
    const upSong = () => {
      dispatch({
        type: 'music/upSong',
      });
    };
    const downSong = () => {
      dispatch({
        type: 'music/downSong',
      });
    };
    return (
      <>
        <MusicPlayer />
        <View
          style={{
            position: 'absolute',
            bottom: 30,
            left: 30,
          }}>
          <SocialIcon type="twitter" onPress={() => upSong()} />
          <SocialIcon type="medium" onPress={() => changePaused()} />
          <SocialIcon type="twitter" onPress={() => downSong()} />
        </View>
      </>
    );
  },
);
