import React from 'react';
import SearchBarHome from '../../components/SearchBarHome';
import Headerdiscover from '../../components/Headerdiscover';
import {View} from 'react-native';

const Home = () => {
  return (
    <>
      <View style={{backgroundColor: 'rgb(26,26,26)'}}>
        <Headerdiscover />
      </View>
      <SearchBarHome />
    </>
  );
};

export default Home;
