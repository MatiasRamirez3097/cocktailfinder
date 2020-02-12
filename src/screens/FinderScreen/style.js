import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  contentVIew: {
    width: '100%',
    height: '90%',
    backgroundColor: 'black',
  },
  headerTouchableOpacity: {
    color: 'white',
    paddingLeft: 10,
  },
  view: {
    backgroundColor: '#000',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '80%',
    borderColor: 'blue',
    backgroundColor: '#FFF',
    borderRadius: 5,
    alignSelf: 'flex-start',
    top: 0,
  },
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
  text: {
    fontSize: 30,
    color: '#FFF',
    alignSelf: 'center',
    opacity: 1,
  },
});
export default styles;
