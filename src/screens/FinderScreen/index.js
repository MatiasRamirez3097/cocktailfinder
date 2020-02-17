//REACT
import React, {Component} from 'react';
import {View, StatusBar, Text, Platform, SafeAreaView} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
//REDUX

import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';
import styles from './style';

//COMPONENTS
import {
  DefaultFlatList,
  DefaultMsg,
  DefaultTextInput,
  Header,
  Skeleton,
} from '../../components';
import {
  getCocktailsAction,
  resetStateAction,
} from '../../store/actions/CocktailActions';

import PropTypes from 'prop-types';
class FinderScreen extends Component {
  state = {
    search: '',
  };
  renderInput(props) {
    const {onChange, value} = props.input;
    return (
      <DefaultTextInput
        placeholder="Escribe para buscar"
        onChangeText={onChange}
        value={value}
      />
    );
  }
  render() {
    const {cocktails, loading, error, navigation} = this.props;
    const {search} = this.state;
    console.log(this.props);
    return (
      <SafeAreaView style={styles.view}>
        <Header
          navigation={navigation}
          title="Cocktails Search"
          buttonLeft="arrow-left"
          buttonRight="question"
          iconColor={Platform.OS === 'ios' ? 'black' : 'white'}
          urlLeft={() => navigation.navigate({routeName: 'Home'})}
        />
        <View style={styles.contentVIew}>
          <View style={styles.searchView}>
            <Field
              component={this.renderInput}
              name="search"
              onChange={this.onChange}
              value={search}
              type="text"
            />
            <TouchableOpacity onPress={this.reset}>
              <Text>
                <Icon name="times-circle-o" size={50} color="red" />
              </Text>
            </TouchableOpacity>
          </View>
          <StatusBar backgroundColor="black" barStyle="light-content" />
          {loading ? (
            [1, 2, 3, 4, 5, 6, 7].map(key => (
              <Skeleton loading={loading} key={key} />
            ))
          ) : error ? (
            <DefaultMsg msg={error} iconName="remove" />
          ) : cocktails == null ? (
            <DefaultMsg msg="No se encontraron resultados" iconName="frown-o" />
          ) : !cocktails.length ? (
            <DefaultMsg msg="Comience la busqueda!" iconName="search" />
          ) : (
            <DefaultFlatList data={cocktails} />
          )}
        </View>
      </SafeAreaView>
    );
  }
  onChange = text => {
    this.setState(
      {
        search: text,
      },
      async () => {
        const {search} = this.state;
        if (text.length >= 3) {
          const {getCocktailsConnected} = this.props;
          await getCocktailsConnected(search);
        }
      },
    );
  };
  reset = () => {
    const {reset, resetCocktails} = this.props;
    reset('search');
    resetCocktails();
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
      resetCocktails: resetStateAction,
    },
    dispatch,
  );
FinderScreen.propTypes = {
  navigation: PropTypes.object,
  cocktails: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  getCocktailsConnected: PropTypes.func,
};

export default reduxForm({
  form: 'search',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FinderScreen),
);
