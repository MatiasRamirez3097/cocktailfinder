import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    marginLeft: 32,
    alignSelf: 'center',
    width: '25%',
    height: '80%',
    borderRadius: 100,
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 10,
    color: 'black',
    fontSize: 32,
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 6,
    height: 120,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default styles;
