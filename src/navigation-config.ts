// import {createAppContainer} from 'react-navigation';

// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import globalColor from './globalColor';
import Test from './test';
import Home from './pages/Home';
import AlbumListDetails from './pages/AlbumListDetails';
import HeaderRight from './components/HeaderRight';
import MvVideo from './pages/MvVideo';
import SongList from './pages/SongList';

const DrawerNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    AlbumListDetails: {
      screen: AlbumListDetails,
      navigationOptions: {
        headerRight: HeaderRight,
      },
    },
    MvVideo: {
      screen: MvVideo,
      navigationOptions: {
        header: null,
      },
    },
    SongList: {
      screen: SongList,
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
