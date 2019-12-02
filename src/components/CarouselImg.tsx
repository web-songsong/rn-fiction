import React from 'react';
import {Image} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import {View} from 'react-native';
interface ImgItemType {
  id: number;
  uri: string;
}
interface CarouselProps {
  dataList: Array<ImgItemType>;
}

export default ({dataList}: CarouselProps) => {
  return (
    <View style={{height: 200}}>
      <Swiper autoplay={true}>
        {dataList.map(item => (
          <View
            key={item.id}
            style={{
              margin: 20,
              flex: 1,
              borderRadius: 10,
              overflow: 'hidden',
              backgroundColor: 'red',
            }}>
            <Image
              source={{uri: item.uri}}
              style={{flex: 1, height: 170}}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};
