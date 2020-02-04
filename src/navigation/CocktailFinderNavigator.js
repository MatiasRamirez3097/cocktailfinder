import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FinderScreen from '../screens/FinderScreen/FinderScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const CocktailFinderNavigator = createStackNavigator({
    Finder: FinderScreen,
    Home: HomeScreen
},
{
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none'
});

export default createAppContainer(CocktailFinderNavigator);