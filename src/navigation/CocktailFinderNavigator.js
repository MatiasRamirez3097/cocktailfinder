import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FinderScreen from '../screens/FinderScreen';
import HomeScreen from '../screens/HomeScreen';

const CocktailFinderNavigator = createStackNavigator({
    Home: HomeScreen,
    Finder: FinderScreen
});

export default createAppContainer(CocktailFinderNavigator);