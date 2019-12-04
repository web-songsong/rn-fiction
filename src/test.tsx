import React from 'react';
import {Text} from 'react-native-elements';

import {connect} from 'react-redux';

const Test = props => {
  return (
    <Text
      style={{
        color: 'red',
      }}
      onPress={() => {
        props.dispatch({
          type: 'products/songsong',
        });
      }}>
      {props.products}
    </Text>
  );
};

export default connect(({products}) => ({products}))(Test);
