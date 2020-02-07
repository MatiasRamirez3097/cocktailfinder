import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './FinderScreenStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DefaultText from '../../components/DefaultText/DefaultText';
import {connect} from 'react-redux';
import DefaultTextInput from '../../components/DefaultTextInput/DefaultTextInput';
import {getCocktailsAction} from '../../store/actions/CocktailActions';
import {bindActionCreators} from 'redux';
class FinderScreen extends Component {
  render() {
    const {cocktails, loading} = this.props;
    console.log('the cocktails', cocktails, loading);
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
      const {getCocktailsConnected} = this.props;
      //console.log(cocktails, 'este es cocktails');
      await getCocktailsConnected(text);
    }
  };
}

const mapStateToProps = ({cocktails}) => ({
  cocktails: cocktails.cocktails,
  loading: cocktails.loading,
  error: cocktails.error,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCocktailsConnected: getCocktailsAction,
    },
    dispatch,
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinderScreen);
