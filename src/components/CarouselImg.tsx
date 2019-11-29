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
    <View style={{height: 160}}>
      <Swiper autoplay={true}>
        {dataList.map(item => (
          <View
            key={item.id}
            style={{
              margin: 20,
              flex: 1,
              borderRadius: 5,
              padding: 5,
            }}>
            <Image source={{uri: item.uri}} style={{flex: 1, height: 105}} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};
