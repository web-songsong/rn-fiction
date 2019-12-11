import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import ShowImageWrap from '../../components/ShowImageWrap';
import {getPlaylistDetail} from '../../api/songlist';
import {ScrollView} from 'react-native';
import {MusicState} from '../../models/music';
import {connect} from 'react-redux';
import {NavigatorProps} from '../../utils/typeInterface';
import ListItem from './ListItem';
import SongBaseInfo from './SongBaseInfo';

interface SongListProps extends NavigatorProps {}

const SongList = ({navigation, dispatch}: SongListProps) => {
  const params: any = navigation.state.params;
  const [songList, setSongList] = useState();
  useEffect(() => {
    (async () => {
      getPlaylistDetail({id: params.id}).then((result: any) =>
        setSongList(result.playlist),
      );
    })();
  }, [params.id]);
  if (!songList) {
    return null;
  }
  return (
    <ScrollView
      style={{
        padding: 10,
      }}>
      <View
        style={{
          marginTop: 30,
          alignItems: 'center',
        }}>
        <ShowImageWrap uri={params.picUrl} borderRadius={20} />
      </View>
      <SongBaseInfo name={songList.name} docs={songList.description} />
      {songList && (
        <>
          <ListItem
            onPress={(songData: any) => {
              console.log(`song ${songData.name} `, songData);
              dispatch({
                type: 'music/getSongInfo',
                payload: {
                  ...songData,
                },
              });
            }}
            list={songList.tracks}
          />
        </>
      )}
    </ScrollView>
  );
};

export default connect(({music}: {music: MusicState}) => ({music}))(SongList);
