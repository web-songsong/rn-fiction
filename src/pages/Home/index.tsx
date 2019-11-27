import React from 'react';
import SearchBarHome from '../../components/SearchBarHome';
import Headerdiscover from '../../components/Headerdiscover';
import {View, Button} from 'react-native';

// interface PropsNavigate {
//   screenProps: any;
//   navigation: any;
// }

const Home = () => {
  // const {navigate} = navigation;
  return (
    <>
      <View style={{backgroundColor: 'rgb(26,26,26)'}}>
        <Headerdiscover />
      </View>
      <SearchBarHome />
      {/*<Button*/}
      {/*  title="Go to Jane's profile"*/}
      {/*  onPress={() => navigate('Profile', {name: 'Jane'})}*/}
      {/*/>*/}
    </>
  );
};

export default Home;
