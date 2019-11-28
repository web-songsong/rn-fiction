import React from 'react';
import SearchBarHome from '../../components/SearchBarHome';
import CarouselImg from '../../components/CarouselImg';
import {ScrollView} from 'react-native';
const imgList = [
  'http://ww1.sinaimg.cn/large/8449ed5dly1g8xdkv1jr4j20xc0xcdik.jpg',
  'http://ww1.sinaimg.cn/large/8449ed5dly1g9dx60fzsmj205z06jwee.jpg',
  'http://ww1.sinaimg.cn/large/8449ed5dly1g9dx6rdxsej2069069mx2.jpg',
];
const Discover = () => {
  return (
    <>
      <SearchBarHome />
      <ScrollView>
        <CarouselImg dataList={imgList} />
      </ScrollView>
    </>
  );
};

export default Discover;
