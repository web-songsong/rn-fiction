import React, {useEffect, useState} from 'react';
import SearchBarHome from '../../components/SearchBarHome';
import CarouselImg, {ImgItemType} from '../../components/CarouselImg';

import {ScrollView, Button} from 'react-native';
import axios from '../../utils/axios';
import {TabRouterProps} from '../../utils/typeInterface';
interface AllProps {
  [props: string]: any;
}
const Tools = {
  CarouselImgDataListInit(focus: AllProps) {
    console.log(focus);
    return focus.data.content.map((item: AllProps) => {
      return {
        id: item.id,
        uri: item.pic_info.url,
      };
    });
  },
};
const Discover = (props: TabRouterProps) => {
  const [musicStore, setMusicStore] = useState<AllProps>({});
  const [dataList, setDataList] = useState<Array<ImgItemType>>([]);
  useEffect(() => {
    axios.get('/getRecommend').then((s: AllProps) => {
      setMusicStore(s);
      setDataList(Tools.CarouselImgDataListInit(s.focus));
    });
  }, []);

  return (
    <>
      <SearchBarHome />
      <ScrollView>
        {!!dataList.length && (
          <CarouselImg
            dataList={dataList}
            onPress={(data: ImgItemType) => {
              console.log(data);
            }}
          />
        )}
        {/*<VideoPlayer />*/}
        <Button
          title="Go to Details... again"
          onPress={() => {
            props.route.navigation.navigate('Test', {testName: 'songsong'});
            console.log(props);
          }}
        />
      </ScrollView>
    </>
  );
};

export default Discover;
