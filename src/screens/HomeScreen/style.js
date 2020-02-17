import {StyleSheet} from 'react-native';
import {colors} from '../../theme/palette';
const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    opacity: 1,
  },
  view: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.defaultHomeScreenBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
