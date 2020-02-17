//REACT
import React, {Component} from 'react';
import {View, StatusBar, Platform, SafeAreaView} from 'react-native';

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
import {getCocktailsAction} from '../../store/actions/CocktailActions';

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
          <Field
            component={this.renderInput}
            name="search"
            onChange={this.onChange}
            value={search}
            type="text"
          />
          <StatusBar backgroundColor="black" barStyle="light-content" />
          {loading ? (
            [1, 2, 3, 4, 5, 6, 7].map(() => <Skeleton loading={loading} />)
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
