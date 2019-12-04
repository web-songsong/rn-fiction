// import {createAppContainer} from 'react-navigation';

// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import globalColor from './globalColor';
import Test from './test';
import Home from './pages/Home';
import ListDetails from './pages/ListDetails';
import HeaderRight from './components/HeaderRight';

const DrawerNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    ListDetails: {
      screen: ListDetails,
      navigationOptions: {
        headerRight: HeaderRight,
      },
    },
    Test: {screen: Test},
  },
  {
    defaultNavigationOptions: {
      // gesturesEnabled: false,   // 手势
      headerTintColor: globalColor.INPUT_TEXT,
      headerStyle: {
        backgroundColor: globalColor.G_BG_COLOR,
        borderBottomWidth: 0,
        // borderColor: 'transparent',
      },
    },
    headerBackTitleVisible: false,
    cardOverlayEnabled: true,
    cardStyle: {
      backgroundColor: globalColor.G_BG_COLOR,
    },
  },
);

export default createAppContainer(DrawerNavigator);
