import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FinderScreen from '../screens/FinderScreen';
import HomeScreen from '../screens/HomeScreen';
import HelpScreen from '../screens/HelpScreen';

const CocktailFinderNavigator = createStackNavigator(
  {
    Finder: FinderScreen,
    Help: HelpScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
  },
);

export default createAppContainer(CocktailFinderNavigator);
