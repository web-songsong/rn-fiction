import React, {useState} from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import globalColor from '../../globalColor';
import HeaderInfo from '../../components/HeaderInfo';
import Discover from '../Discover';
import Play from '../Play';
import {NavigatorProps} from '../../utils/typeInterface';
import {Text} from 'react-native-elements';

const Home = (props: NavigatorProps) => {
  const TAB_ROUTES = [
    {key: 'Play', title: 'PLAY'},
    {key: 'Discover', title: 'DISCOVER'},
  ];
  const FIRSTSHOW = 1;

  const RENDER_TEMPLATE = {
    Discover: Discover,
    Play: Play,
  };

  const [tabInfoIndex, setTabInfoIndex] = useState(FIRSTSHOW);
  return (
    <>
      <HeaderInfo title={TAB_ROUTES[tabInfoIndex].title} index={tabInfoIndex} />
      <TabView
        style={{
          backgroundColor: globalColor.G_BG_COLOR,
        }}
        renderTabBar={() => null}
        navigationState={{
          index: tabInfoIndex,
          routes: TAB_ROUTES.map(d => ({...d, ...props})),
        }}
        renderScene={SceneMap(RENDER_TEMPLATE)}
        onIndexChange={setTabInfoIndex}
        // initialLayout={{width: Dimensions.get('window').width}}
      />
    </>
  );
};

export default Home;
