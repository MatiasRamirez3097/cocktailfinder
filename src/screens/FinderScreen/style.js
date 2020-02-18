import {StyleSheet} from 'react-native';
import {colorByOS} from '../../theme/palette';
const styles = StyleSheet.create({
  contentVIew: {
    width: '100%',
    height: '92%',
    backgroundColor: colorByOS('white', 'black'),
  },
  searchView: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  view: {
    backgroundColor: colorByOS('white', 'black'),
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: colorByOS('black', 'white'),
    alignSelf: 'center',
    opacity: 1,
  },
});
export default styles;
