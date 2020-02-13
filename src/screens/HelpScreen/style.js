import {Platform, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  view: {
    backgroundColor: Platform.OS === 'android' ? '#000' : '#FFF',
    height: '100%',
    width: '100%',
  },
  text: {
    alignSelf: 'center',
    color: Platform.OS === 'android' ? 'white' : 'black',
    fontSize: 25,
    width: '80%',
  },
});
export default styles;
