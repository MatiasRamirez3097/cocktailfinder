import {StyleSheet} from 'react-native';
import {colorByOS} from '../../theme/palette';
const styles = StyleSheet.create({
  view: {
    paddingTop: '5%',
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    color: colorByOS('black', 'white'),
    fontSize: 20,
  },
});

export default styles;
