import React, {useEffect, useState} from 'react';
import SearchBarHome from '../../components/SearchBarHome';
import CarouselImg from '../../components/CarouselImg';
import {ScrollView, Button} from 'react-native';
import axios from '../../utils/axios';
import {TabRouterProps} from '../../utils/typeInterface';
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
const Discover = (props: TabRouterProps) => {
  const [musicStore, setMusicStore] = useState<AllProps>({});
  const [dataList, setDataList] = useState([]);
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
        {!!dataList.length && <CarouselImg dataList={dataList} />}
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
