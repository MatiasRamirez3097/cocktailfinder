import {Platform, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  contentVIew: {
    width: '100%',
    height: '92%',
    backgroundColor: Platform.OS === 'android' ? '#000' : '#FFF',
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    backgroundColor: Platform.OS === 'android' ? '#000' : '#FFF',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: Platform.OS === 'android' ? '#FFF' : '#000',
    alignSelf: 'center',
    opacity: 1,
  },
});
export default styles;
