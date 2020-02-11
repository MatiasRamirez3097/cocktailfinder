import {Platform, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  /*rightHeader: {
    color: 'white',
    paddingRight: 10,
  },*/
  leftHeader: {
    color: 'white',
    paddingLeft: 10,
  },
  headerTitleStyle: {
    color: Platform.OS === 'android' ? 'white' : 'black',
    textAlign: 'center',
    alignSelf: 'center',
  },
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'black' : 'white',
  },
});
export default styles;
