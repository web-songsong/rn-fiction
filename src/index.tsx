// import React from 'react';
// import {Text, View} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
//
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Discover!</Text>
//       </View>
//     );
//   }
// }
//
// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }
//
// const TabNavigator = createBottomTabNavigator({
//   Discover: HomeScreen,
//   Settings: SettingsScreen,
// });
//
// export default createAppContainer(TabNavigator);

// import React from 'react';
// import {createAppContainer} from 'react-navigation';
// import {AppRegistry} from 'react-native';
//
// import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

// // const MainNavigator = createStackNavigator({
// //   Discover: {screen: Discover},
// //   Profile: {screen: Test},
// // });
//
// const TabNavigator = createBottomTabNavigator({
//   Discover: {screen: Discover},
//   Profile: {screen: Test},
// });
// export default createAppContainer(TabNavigator);
import React, {useState} from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import globalColor from './globalColor';
import Test from './test';
import HeaderInfo from './components/HeaderInfo';
import {View} from 'react-native';
import Discover from './pages/Discover';
const TAB_ROUTES = [
  {key: 'play', title: 'play'},
  {key: 'discover', title: 'discover'},
];
const FIRSTSHOW = 1;

const RENDER_TEMPLATE = {
  discover: Discover,
  play: Test,
};

export default () => {
  const [tabInfoIndex, setTabInfoIndex] = useState(FIRSTSHOW);
  return (
    <>
      <View
        style={{
          backgroundColor: globalColor.G_BG_COLOR,
        }}>
        <HeaderInfo />
      </View>
      <TabView
        renderTabBar={() => null}
        navigationState={{index: tabInfoIndex, routes: TAB_ROUTES}}
        renderScene={SceneMap(RENDER_TEMPLATE)}
        onIndexChange={setTabInfoIndex}
        // initialLayout={{width: Dimensions.get('window').width}}
      />
    </>
  );
};
