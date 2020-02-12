import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  text: {
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 10,
    color: 'black',
    fontSize: 32,
  },
  flatList: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 6,
    height: '96%',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  viewEmpty: {
    alignSelf: 'center',
    alignItems: 'center',
    margin: 0,
    height: '20%',
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  image: {
    left: 5,
    alignSelf: 'center',
    width: '30%',
    height: '80%',
    borderRadius: 100,
  },
});
export default styles;
