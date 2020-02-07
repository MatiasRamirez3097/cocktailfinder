import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from './FinderScreenStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DefaultText from '../../components/DefaultText/DefaultText';
import {connect} from 'react-redux';
import DefaultTextInput from '../../components/DefaultTextInput/DefaultTextInput';
import {getCocktails} from '../../store/actions/CocktailActions';
import cocktailsReducer from '../../store/reducers/cocktails';

class FinderScreen extends Component {
  render() {
    return (
      <View style={styles.view}>
        <DefaultText value="asd" />
        <DefaultTextInput handleOnChangeText={text => this.getData(text)} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate({routeName: 'Home'});
          }}>
          <Text>Ir al inicio</Text>
        </TouchableOpacity>
      </View>
    );
  }
  getData = async text => {
    if (text.length >= 3) {
      const {cocktails} = this.props;
      console.log(cocktails, 'este es cocktails');
      await cocktailsReducer(text);
    }
  };
}

const mapStateToProps = state => ({
  cocktails: state.rootReducer,
});
const mapDispatchToProps = dispatch => {
  return {
    cocktailsReducer: text => {
      dispatch(getCocktails(text));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinderScreen);
