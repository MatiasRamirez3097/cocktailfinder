import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FinderScreen from '../screens/FinderScreen';
import HomeScreen from '../screens/HomeScreen';
import HelpScreen from '../screens/HelpScreen';
import FinderNavigationOptions from '../screens/FinderScreen/FinderNavigationOptions';
import HelpNavigationOptions from '../screens/HelpScreen/HelpNavigationOptions';

const CocktailFinderNavigator = createStackNavigator(
  {
    Finder: {
      screen: FinderScreen,
      navigationOptions: FinderNavigationOptions,
    },
    Help: {
      screen: HelpScreen,
      navigationOptions: HelpNavigationOptions,
    },
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(CocktailFinderNavigator);
