//REACT
import React, {Component} from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';

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
  ClearButton,
} from '../../components';
import {
  getCocktailsAction,
  resetStateAction,
} from '../../store/actions/CocktailActions';

//PROPTYPES
import PropTypes from 'prop-types';
//THEME
import {colorByOS, colors} from '../../theme/palette';
class FinderScreen extends Component {
  state = {
    search: '',
    disableReset: true,
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
    const {navigation} = this.props;
    const iconColor = colorByOS('black', 'white');
    const {disableReset, search} = this.state;
    const body = this.body(iconColor);
    return (
      <SafeAreaView style={styles.view}>
        <Header
          title="Cocktails Search"
          buttonLeft="arrow-left"
          iconColor={iconColor}
          actionLeft={() => navigation.navigate({routeName: 'Home'})}
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
            <ClearButton
              disabled={disableReset}
              iconName="times-circle-o"
              onPress={this.reset}
              iconSize={50}
              iconColor={
                disableReset ? colors.defaultDisabledClearButton : 'red'
              }
            />
          </View>
          <StatusBar backgroundColor="black" barStyle="light-content" />
          {body}
        </View>
      </SafeAreaView>
    );
  }
  body(iconColor) {
    const {cocktails, loading, error} = this.props;
    if (loading) {
      return [1, 2, 3, 4, 5, 6, 7].map(key => (
        <Skeleton loading={loading} key={key} />
      ));
    }
    if (error) {
      return <DefaultMsg msg={error} iconName="remove" iconColor={iconColor} />;
    }
    if (cocktails == null) {
      return (
        <DefaultMsg
          msg="No se encontraron resultados"
          iconName="frown-o"
          iconColor={iconColor}
        />
      );
    }
    if (!cocktails.length) {
      return (
        <DefaultMsg
          msg="Comience la busqueda!"
          iconName="search"
          iconColor={iconColor}
        />
      );
    }
    return <DefaultFlatList data={cocktails} />;
  }
  onChange = text => {
    this.setState(
      {
        search: text,
      },
      async () => {
        const {search} = this.state;
        if (search.length >= 1) {
          this.setState({
            disableReset: false,
          });
          if (search.length >= 3) {
            const {getCocktailsConnected} = this.props;
            await getCocktailsConnected(search);
          }
        }
      },
    );
  };
  reset = () => {
    this.setState({
      disableReset: true,
    });
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
  navigation: PropTypes.object.isRequired,
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
