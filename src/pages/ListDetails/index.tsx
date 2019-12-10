import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {NavigatorProps} from '../../utils/typeInterface';
import ShowImageWrap from '../../components/ShowImageWrap';
import {getAlbum} from '../../api/listDetails';
import AlbumBaseInfo from './AlbumBaseInfo';
import {ScrollView} from 'react-native';
import AlbumList from './AlbumList';
import {MusicState} from '../../models/music';
import {connect} from 'react-redux';
import {ImgItemType} from '../../components/CarouselImg';
import {dateFormat} from '../../utils/tools';

interface ListDetailsProps extends NavigatorProps {
  music: MusicState;
}
const ListDetails = ({navigation, dispatch}: ListDetailsProps) => {
  const params: ImgItemType = navigation.state.params;
  const [albumInfo, setAlbumInfo] = useState();
  useEffect(() => {
    (async () => {
      const result: any = await getAlbum({id: params.id});
      setAlbumInfo(result);
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
      {albumInfo && (
        <>
          <AlbumBaseInfo
            date={dateFormat(params.publishTime)}
            name={params.name}
            singerName={params.artist.name}
            docs={albumInfo.album.description}
          />
          <AlbumList
            total={albumInfo.songs.length}
            list={albumInfo.songs}
            onPress={(songData: any) => {
              console.log(`song list ${songData.name} `, songData);
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
