import {StyleSheet} from 'react-native';
import {colors} from '../../theme/palette';
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 7,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.defaultSkeletonBackground,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
