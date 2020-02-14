import {Platform, StyleSheet} from 'react-native';

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
    color: Platform.OS === 'android' ? 'white' : 'black',
    fontSize: 20,
  },
});

export default styles;
