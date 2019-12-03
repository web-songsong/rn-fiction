import React from 'react';
import {View} from 'react-native';
import {NavigatorProps} from '../../utils/typeInterface';
import ShowImageWrap from '../../components/ShowImageWrap';
const ListDetails = (props: NavigatorProps) => {
  const state = props.navigation.state;
  console.log(state);
  const {uri} = state.params;
  return (
    <>
      <View
        style={{
          marginTop: 30,
          alignItems: 'center',
        }}>
        <ShowImageWrap uri={uri} />
      </View>
    </>
  );
};

export default ListDetails;
