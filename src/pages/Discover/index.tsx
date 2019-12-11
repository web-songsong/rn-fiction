import React, {useEffect, useState} from 'react';
import SearchBarHome from '../../components/SearchBarHome';
import CarouselImg, {ImgItemType} from '../../components/CarouselImg';
import {ScrollView} from 'react-native';
import {NavigatorProps, TabRouterProps} from '../../utils/typeInterface';
import {connect} from 'react-redux';
import {MusicState} from '../../models/music';
import {
  getPersonalizedNewSong,
  getAlbumNewest,
  getPersonalized,
  getPersonalizedMv,
} from '../../api/discover';
import NewSong from './NewSong';
import RecommendList from './RecommendList';
import MvModel from './MvModel';

const Discover = (props: TabRouterProps & NavigatorProps) => {
  const [dataList, setDataList] = useState<Array<ImgItemType>>();
  const [personalized, setPersonalized] = useState();
  const [newSongInfo, setNewSongInfo] = useState();
  const [mvInfo, setMvInfo] = useState();
  useEffect(() => {
    (async () => {
      getAlbumNewest().then((resultAlbum: any) =>
        setDataList(resultAlbum.albums),
      );
      getPersonalized().then((resultPersonal: any) =>
        setPersonalized(resultPersonal.result),
      );
      getPersonalizedNewSong().then((resultNewSong: any) =>
        setNewSongInfo(resultNewSong.result),
      );
      getPersonalizedMv().then((resMvInfo: any) => setMvInfo(resMvInfo.result));
    })();
  }, []);

  return (
    <>
      <SearchBarHome />
      <ScrollView>
        {dataList && (
          <CarouselImg
            dataList={dataList}
            onPress={(data: ImgItemType) => {
              let navigateName = 'AlbumListDetails';
              props.route.navigation.navigate(navigateName, data);
            }}
          />
        )}
        {personalized && (
          <RecommendList
            personalized={personalized}
            onPress={recommendData => {
              props.route.navigation.navigate('SongList', recommendData);
            }}
          />
        )}
        {newSongInfo && (
          <NewSong
            personalized={newSongInfo}
            onPress={songData => {
              console.log(`song ${songData.name} `, songData);
              props.dispatch({
                type: 'music/getSongInfo',
                payload: {
                  ...songData,
                },
              });
            }}
          />
        )}
        {mvInfo && (
          <MvModel
            list={mvInfo}
            onPress={(data: any) => {
              props.route.navigation.navigate('MvVideo', data);
            }}
          />
        )}
      </ScrollView>
    </>
  );
};

export default connect(({music}: {music: MusicState}) => ({music}))(Discover);
