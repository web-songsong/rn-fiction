import React, {useEffect, useState} from 'react';
import SearchBarHome from '../../components/SearchBarHome';
import CarouselImg, {ImgItemType} from '../../components/CarouselImg';
import {ScrollView, Button} from 'react-native';
import {TabRouterProps} from '../../utils/typeInterface';
import {getAlbumNewest} from '../../api/home';
import MusicPlayer from '../../components/MusicPlayer';

const Discover = (props: TabRouterProps) => {
  const [dataList, setDataList] = useState<Array<ImgItemType>>();

  useEffect(() => {
    (async () => {
      const result: any = await getAlbumNewest();
      setDataList(result.albums);
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
              let navigateName = 'ListDetails';
              props.route.navigation.navigate(navigateName, data);
            }}
          />
        )}
        <Button
          title="Go to Details... again"
          onPress={() => {
            props.route.navigation.navigate('MvVideo', {testName: 'songsong'});
          }}
        />
        <MusicPlayer />
      </ScrollView>
    </>
  );
};

export default Discover;
