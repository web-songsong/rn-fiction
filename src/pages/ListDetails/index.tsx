import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {NavigatorProps} from '../../utils/typeInterface';
import ShowImageWrap from '../../components/ShowImageWrap';
import axios from '../../utils/axios';
import {getAlbumInfo} from '../../api/listDetails';
const ListDetails = (props: NavigatorProps) => {
  const {params} = props.navigation.state;

  const [albumInfo, setAlbumInfo] = useState();
  useEffect(() => {
    const fn = async () => {
      const result = await getAlbumInfo({albummid: params.jump_info.url});
      console.log(result);
      setAlbumInfo(result.data);
    };
    fn();
  }, [params.jump_info.url]);
  return (
    <>
      <View
        style={{
          marginTop: 30,
          alignItems: 'center',
        }}>
        <ShowImageWrap uri={params.uri} />
      </View>
    </>
  );
};

export default ListDetails;
