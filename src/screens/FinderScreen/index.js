import React, {Component} from 'react';
import {View, StatusBar, ProgressBarAndroid} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import DefaultTextInput from '../../components/DefaultTextInput';
import {getCocktailsAction} from '../../store/actions/CocktailActions';
import {bindActionCreators} from 'redux';
import DefaultFlatList from '../../components/DefaultFlatList';
import Header from '../../components/header';
import Skeleton from '../../components/Skeleton';
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
          <ProgressBarAndroid styleAttr="Horizontal" indeterminate={loading} />
          {!loading ? (
            <DefaultFlatList data={cocktails} error={error ? true : false} />
          ) : (
            <Skeleton loading={loading} />
          )}
        </View>
      </View>
    );
    //
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