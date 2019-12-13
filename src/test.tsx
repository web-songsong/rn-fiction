import React from 'react';
import {Text} from 'react-native-elements';

import {connect} from 'react-redux';

const Test = () => {
  return (
    <Text
      style={{
        color: 'red',
      }}
      onPress={() => {}}
    />
  );
};

export default connect(({}) => ({}))(Test);
