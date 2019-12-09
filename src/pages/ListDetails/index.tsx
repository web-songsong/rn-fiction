import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {NavigatorProps} from '../../utils/typeInterface';
import ShowImageWrap from '../../components/ShowImageWrap';
import {getAlbumInfo} from '../../api/listDetails';
import AlbumBaseInfo from './AlbumBaseInfo';
import {ScrollView} from 'react-native';
import AlbumList from './AlbumList';
import {MusicState} from '../../models/music';
import {connect} from 'react-redux';

interface ListDetailsProps extends NavigatorProps {
  music: MusicState;
}
const ListDetails = ({navigation, dispatch}: ListDetailsProps) => {
  const {params} = navigation.state;
  const [albumInfo, setAlbumInfo] = useState();
  useEffect(() => {
    const fn = async () => {
      const result = await getAlbumInfo({albummid: params.jump_info.url});
      setAlbumInfo(result.data);
    };
    fn();
  }, [params.jump_info.url]);
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
        <ShowImageWrap uri={params.uri} />
      </View>
      {albumInfo && (
        <>
          <AlbumBaseInfo
            date={albumInfo.aDate}
            name={albumInfo.name}
            singerName={albumInfo.singername}
            docs={albumInfo.desc}
          />
          <AlbumList
            total={albumInfo.total}
            list={albumInfo.list}
            onPress={(songData: any) => {
              console.log(`song list ${songData.songname} `, songData);
              dispatch({
                type: 'music/getSongInfo',
                payload: {
                  ...songData,
                },
              });
            }}
          />
        </>
      )}
    </ScrollView>
  );
};

export default connect(({music}: {music: MusicState}) => ({music}))(
  ListDetails,
);
