import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

const styles = StyleSheet.create({
  button: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#00F',
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 0.5,
    padding: 10,
    opacity: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    alignSelf: 'center',
    opacity: 1,
  },
  view: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
