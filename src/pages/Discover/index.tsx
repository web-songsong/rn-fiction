import React, {useEffect, useState} from 'react';
import SearchBarHome from '../../components/SearchBarHome';
import CarouselImg from '../../components/CarouselImg';
import {ScrollView} from 'react-native';
import axios from '../../utils/axios';
interface AllProps {
  [props: string]: any;
}
const Tools = {
  CarouselImgDataListInit(focus: AllProps) {
    return focus.data.content.map((item: AllProps) => {
      return {
        id: item.id,
        uri: item.pic_info.url,
      };
    });
  },
};
const Discover = () => {
  const [musicStore, setMusicStore] = useState<AllProps>({});
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    console.log('=====');
    axios.get('/getRecommend').then((s: AllProps) => {
      console.log('xxxxxxx');
      setMusicStore(s);
      setDataList(Tools.CarouselImgDataListInit(s.focus));
    });
  }, []);

  return (
    <>
      <SearchBarHome />
      <ScrollView>
        {!!dataList.length && <CarouselImg dataList={dataList} />}
      </ScrollView>
    </>
  );
};

export default Discover;
