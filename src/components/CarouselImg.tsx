import React from 'react';
import {Image} from 'react-native-elements';
import Swiper from 'react-native-swiper';

import {View, TouchableOpacity} from 'react-native';

export interface ImgItemType {
  picUrl: string;
  id: number;
  publishTime: number;
  description: string;
  name: string;
  artist: any;
}

interface CarouselProps {
  dataList: Array<ImgItemType>;
  onPress: (props: any) => void;
}

/**/
export default ({dataList, onPress}: CarouselProps) => {
  return (
    <View style={{height: 230}}>
      <Swiper autoplay={true} autoplayTimeout={5}>
        {dataList.map(item => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => onPress(item)}
            key={item.id}
            style={{
              margin: 20,
              flex: 1,
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <Image source={{uri: item.picUrl}} style={{flex: 1, height: 200}} />
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};
