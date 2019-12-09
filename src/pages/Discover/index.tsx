import React, {useEffect, useState} from 'react';
import SearchBarHome from '../../components/SearchBarHome';
import CarouselImg, {ImgItemType} from '../../components/CarouselImg';
import {ScrollView, Button} from 'react-native';
import {TabRouterProps} from '../../utils/typeInterface';
import {getRecommend} from '../../api/home';
import MusicPlayer from '../../components/MusicPlayer';
import {formatUrl} from '../../utils/tools';
import MusicControl from '../../components/MusicControl';
interface AllProps {
  [props: string]: any;
}
const Tools = {
  CarouselImgDataListInit(focus: AllProps) {
    return focus.data.content.map((item: AllProps) => {
      return {
        id: item.id,
        uri: item.pic_info.url,
        ...item,
      };
    });
  },
};
const Discover = (props: TabRouterProps) => {
  const [musicStore, setMusicStore] = useState<AllProps>({});
  const [dataList, setDataList] = useState<Array<ImgItemType>>();
  useEffect(() => {
    const fn = async () => {
      const result = await getRecommend();
      console.log('result', result);
      setMusicStore(result);
      setDataList(Tools.CarouselImgDataListInit(result.focus));
    };
    fn();
  }, []);

  return (
    <>
      <SearchBarHome />
      <ScrollView>
        {dataList && (
          <CarouselImg
            dataList={dataList}
            onPress={(data: ImgItemType) => {
              let urlFlag = data.jump_info.url;
              if (/^http/.test(urlFlag)) {
                data.jump_info.url = formatUrl(urlFlag).query.mid;
              }
              let navigateName = /^\d/.test(data.jump_info.url)
                ? 'ListDetails'
                : 'MvVideo';
              props.route.navigation.navigate(navigateName, data);
            }}
          />
        )}
        {/*<VideoPlayer />*/}
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
