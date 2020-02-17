import {Platform, StyleSheet} from 'react-native';

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
    backgroundColor: Platform.OS === 'ios' ? '#FFF' : '#000',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
    alignSelf: 'flex-start',
  },
  rightHeader: {
    height: '100%',
    width: '20%',
    backgroundColor: Platform.OS === 'ios' ? '#FFF' : '#000',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
    alignSelf: 'flex-end',
  },
  text: {
    color: Platform.OS === 'ios' ? '#000' : '#FFF',
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
