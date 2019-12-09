import React, {useEffect, useState} from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import {View, ScrollView, SafeAreaView, Text} from 'react-native';
import {NavigatorProps} from '../../utils/typeInterface';
import {getMvPlay} from '../../api/MvVideo';
import globalColor from '../../globalColor';

const MvVideo = ({navigation}: NavigatorProps) => {
  const {params} = navigation.state;
  const mvUrl = params.jump_info.url;
  const [mvData, setMvData] = useState();
  const mvUriInit = (result: any) => {
    let arr = result.getMVUrl.data[`${mvUrl}`].mp4;
    return arr[arr.length - 1].freeflow_url[0] || '';
  };
  useEffect(() => {
    const fn = async () => {
      const result: any = await getMvPlay({vid: params.jump_info.url});
      setMvData(result);
    };
    fn();
  }, [mvUrl, params.jump_info.url]);
  return (
    <SafeAreaView>
      {mvData && (
        <View>
          {mvUriInit(mvData) ? (
            <>
              <View style={{height: 210}}>
                <VideoPlayer uri={mvUriInit(mvData)} />
              </View>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 20,
                  padding: 20,
                  color: globalColor.INPUT_TEXT,
                }}>
                {mvData.mvinfo.data[`${mvUrl}`].name}
              </Text>
              <Text
                style={{
                  color: globalColor.LIST_TEXT,
                  padding: 20,
                }}>
                {mvData.mvinfo.data[`${mvUrl}`].desc}
              </Text>
            </>
          ) : (
            <Text style={{color: globalColor.INPUT_TEXT}}> 版权限制</Text>
          )}
        </View>
      )}
      <ScrollView />
    </SafeAreaView>
  );
};

export default MvVideo;
