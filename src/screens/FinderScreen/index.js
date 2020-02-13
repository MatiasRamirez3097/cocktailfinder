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
import DefaultError from '../../components/DefaultFInderMsg';
import PropTypes from 'prop-types';
class FinderScreen extends Component {
  render() {
    const {cocktails, loading, error, navigation} = this.props;
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
          <DefaultTextInput
            placeholder="Escribe para buscar"
            handleOnChangeText={text => this.getData(text)}
          />
          <StatusBar backgroundColor="black" barStyle="light-content" />
          {loading ? (
            <>
              <Skeleton loading={loading} />
              <Skeleton loading={loading} />
              <Skeleton loading={loading} />
            </>
          ) : error === 'Request Timeout' ? (
            <DefaultError
              error="Error de conexion!"
              iconName="search"
              iconColor="white"
            />
          ) : error ? (
            <DefaultError error={error} iconName="search" iconColor="white" />
          ) : cocktails == null ? (
            <DefaultError
              error="No se encontraron resultados"
              iconName="search"
              iconColor="white"
            />
          ) : !cocktails.length ? (
            <DefaultError
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
FinderScreen.propTypes = {
  navigation: PropTypes.object,
  cocktails: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  getCocktailsConnected: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinderScreen);
