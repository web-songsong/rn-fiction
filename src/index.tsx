// import React from 'react';
// import {Text, View} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
//
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Home!</Text>
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
//   Home: HomeScreen,
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

import Test from './test';
import Home from './pages/Home';

// // const MainNavigator = createStackNavigator({
// //   Home: {screen: Home},
// //   Profile: {screen: Test},
// // });
//
// const TabNavigator = createBottomTabNavigator({
//   Home: {screen: Home},
//   Profile: {screen: Test},
// });
// export default createAppContainer(TabNavigator);
import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ff4081'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 1,
    routes: [{key: 'home', title: 'First'}, {key: 'second', title: 'Second'}],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          second: SecondRoute,
          home: Home,
        })}
        onIndexChange={index => {
          console.log('xxx', index);
          this.setState({index});
        }}
        // initialLayout={{width:200}}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
