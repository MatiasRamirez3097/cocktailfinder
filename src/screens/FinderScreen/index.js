import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import DefaultTextInput from '../../components/DefaultTextInput';
import {getCocktailsAction} from '../../store/actions/CocktailActions';
import {bindActionCreators} from 'redux';
import DefaultFlatList from '../../components/DefaultFlatList';
import Header from '../../components/header';
import Skeleton from '../../components/Skeleton';
import DefaultFinderMsg from '../../components/DefaultFinderMsg';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
class FinderScreen extends Component {
  state = {
    search: '',
  };
  renderInput(props) {
    console.log(props);
    return (
      <DefaultTextInput
        placeholder="Escribe para buscar"
        onChangeText={props.input.onChange}
        value={props.input.value}
      />
    );
  }
  render() {
    const {cocktails, loading, error, navigation} = this.props;
    const {search} = this.state;
    return (
      <View style={styles.view}>
        <Header
          navigation={navigation}
          title="Cocktails Search"
          buttonLeft="arrow-left"
          buttonRight="question"
          urlLeft={() => navigation.navigate({routeName: 'Home'})}
          urlRight={() => navigation.navigate({routeName: 'Help'})}
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
            <>
              <Skeleton loading={loading} />
              <Skeleton loading={loading} />
              <Skeleton loading={loading} />
            </>
          ) : error ? (
            <DefaultFinderMsg
              error={error}
              iconName="search"
              iconColor="white"
            />
          ) : cocktails == null ? (
            <DefaultFinderMsg
              error="No se encontraron resultados"
              iconName="search"
              iconColor="white"
            />
          ) : !cocktails.length ? (
            <DefaultFinderMsg
              error="Comience la busqueda!"
              iconName="search"
              iconColor="white"
            />
          ) : (
            <DefaultFlatList data={cocktails} />
          )}
        </View>
      </View>
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
