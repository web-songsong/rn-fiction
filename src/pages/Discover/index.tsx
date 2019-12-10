import React, {useEffect, useState} from 'react';
import SearchBarHome from '../../components/SearchBarHome';
import CarouselImg, {ImgItemType} from '../../components/CarouselImg';
import {ScrollView} from 'react-native';
import {TabRouterProps} from '../../utils/typeInterface';
import {getAlbumNewest, getPersonalized} from '../../api/discover';
import RecommendList from './RecommendList';
const Discover = (props: TabRouterProps) => {
  const [dataList, setDataList] = useState<Array<ImgItemType>>();
  const [personalized, setPersonalized] = useState();

  useEffect(() => {
    (async () => {
      const resultAlbum: any = await getAlbumNewest();
      const resultPersonal: any = await getPersonalized();
      setDataList(resultAlbum.albums);
      setPersonalized(resultPersonal.result);
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
        {/*/}
        {/*  title="Go to Details... again"*/}
        {/*  onPress={() => {*/}
        {/*    props.route.navigation.navigate('MvVideo', {testName: 'songsong'});*/}
        {/*  }}*/}
        {/*/>*/}
        {personalized && (
          <RecommendList
            personalized={personalized}
            onPress={recommendData => {
              props.route.navigation.navigate('SongList', recommendData);
            }}
          />
        )}
      </ScrollView>
    </>
  );
};

export default Discover;
