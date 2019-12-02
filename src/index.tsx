// import {createAppContainer} from 'react-navigation';

// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import Test from './test';
import Home from './pages/home';
const DrawerNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Test: {screen: Test},
  },
  // {headerMode: 'none'},
);

export default createAppContainer(DrawerNavigator);
