import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import ShowImageWrap from '../../components/ShowImageWrap';
import {getPlaylistDetail} from '../../api/songlist';
import {ScrollView} from 'react-native';
import {MusicState} from '../../models/music';
import {connect} from 'react-redux';
import {NavigatorProps} from '../../utils/typeInterface';
import ListItem from './ListItem';
interface SongListProps extends NavigatorProps {}
const SongList = ({navigation, dispatch}: SongListProps) => {
  const params: any = navigation.state.params;
  const [songList, setSongList] = useState();
  useEffect(() => {
    (async () => {
      const result: any = await getPlaylistDetail({id: params.id});
      setSongList(result.playlist);
    })();
  }, [params.id]);
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
        <ShowImageWrap uri={params.picUrl} />
      </View>
      {songList && (
        <>
          <ListItem
            onPress={() => {
              dispatch({});
            }}
            list={songList.tracks}
          />
        </>
      )}
    </ScrollView>
  );
};

export default connect(({music}: {music: MusicState}) => ({music}))(SongList);
