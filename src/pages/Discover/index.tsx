import React, {useEffect, useState} from 'react';
import SearchBarHome from '../../components/SearchBarHome';
import CarouselImg, {ImgItemType} from '../../components/CarouselImg';
import {ScrollView, Button} from 'react-native';
import {TabRouterProps} from '../../utils/typeInterface';
import {getRecommend} from '../../api/home';
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
  const [dataList, setDataList] = useState<Array<ImgItemType>>([]);
  useEffect(() => {
    const fn = async () => {
      const result = await getRecommend();
      setMusicStore(result);
      setDataList(Tools.CarouselImgDataListInit(result.focus));
    };
    fn();
  }, []);

  return (
    <>
      <SearchBarHome />
      <ScrollView>
        {!!dataList.length && (
          <CarouselImg
            dataList={dataList}
            onPress={(data: ImgItemType) => {
              props.route.navigation.navigate('ListDetails', data);
            }}
          />
        )}
        {/*<VideoPlayer />*/}
        <Button
          title="Go to Details... again"
          onPress={() => {
            props.route.navigation.navigate('Test', {testName: 'songsong'});
          }}
        />
      </ScrollView>
    </>
  );
};

export default Discover;
