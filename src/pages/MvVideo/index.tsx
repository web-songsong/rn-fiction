import React, {useEffect, useState} from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import {View, ScrollView, SafeAreaView, Text} from 'react-native';
import {NavigatorProps} from '../../utils/typeInterface';
import {getMvPlay} from '../../api/MvVideo';
import globalColor from '../../globalColor';
import {connect} from 'react-redux';

const MvVideo = ({navigation, dispatch}: NavigatorProps) => {
  dispatch({
    type: 'music/outputPaused',
    payload: {
      paused: false,
    },
  });
  const {params} = navigation.state;

  const [mvData, setMvData] = useState();

  useEffect(() => {
    (async () => {
      getMvPlay({mvid: params.id}).then(result => setMvData(result.data));
    })();
  }, [params.id]);
  return (
    <SafeAreaView>
      {mvData && (
        <View>
          <>
            <View style={{height: 210}}>
              <VideoPlayer uri={mvData.brs['720']} />
            </View>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 20,
                padding: 20,
                color: globalColor.INPUT_TEXT,
              }}>
              {mvData.name}
            </Text>
            <Text
              style={{
                color: globalColor.LIST_TEXT,
                padding: 20,
              }}>
              {mvData.desc}
            </Text>
          </>
        </View>
      )}
      <ScrollView />
    </SafeAreaView>
  );
};
export default connect(() => ({}))(MvVideo);
