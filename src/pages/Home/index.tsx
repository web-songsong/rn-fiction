import React from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const Home = () => {
  return (
    <Button
      icon={<Icon name="arrow-right" size={15} color="white" />}
      iconRight
      title="Button with right icon"
    />
  );
};

export default Home;
