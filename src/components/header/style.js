import {StyleSheet} from 'react-native';
import {colorByOS} from '../../theme/palette';
const styles = StyleSheet.create({
  centerHeader: {
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  leftHeader: {
    height: '100%',
    width: '20%',
    backgroundColor: colorByOS('white', 'black'),
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
    alignSelf: 'flex-start',
  },
  rightHeader: {
    height: '100%',
    width: '20%',
    backgroundColor: colorByOS('white', 'black'),
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
    alignSelf: 'flex-end',
  },
  text: {
    color: colorByOS('black', 'white'),
    fontSize: 20,
    alignSelf: 'center',
  },
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '8%',
    width: '100%',
  },
});

export default styles;
