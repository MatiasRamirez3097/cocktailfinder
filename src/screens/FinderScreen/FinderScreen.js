import React, {Component} from 'react';
import {View, Text, StatusBar, ProgressBarAndroid} from 'react-native';
import styles from './FinderScreenStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import DefaultTextInput from '../../components/DefaultTextInput/DefaultTextInput';
import {getCocktailsAction} from '../../store/actions/CocktailActions';
import {bindActionCreators} from 'redux';
import DefaultFlatList from '../../components/DefaultFlatList/DefaultFlatList';
class FinderScreen extends Component {
  render() {
    const {cocktails, loading} = this.props;
    return (
      <View style={styles.view}>
        <DefaultTextInput
          placeholder="Escribe para buscar"
          handleOnChangeText={text => this.getData(text)}
        />
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={loading} />
        <DefaultFlatList data={cocktails} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate({routeName: 'Home'});
          }}>
          <Text style={styles.text}>Ir al inicio</Text>
        </TouchableOpacity>
      </View>
    );
  }
  getData = async text => {
    if (text.length >= 3) {
      const {getCocktailsConnected} = this.props;
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
