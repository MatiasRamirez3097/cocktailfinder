import React, {Component} from 'react';
import {View, Text, StatusBar, ProgressBarAndroid} from 'react-native';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import DefaultTextInput from '../../components/DefaultTextInput';
import {getCocktailsAction} from '../../store/actions/CocktailActions';
import {bindActionCreators} from 'redux';
import DefaultFlatList from '../../components/DefaultFlatList';
import Icon from 'react-native-vector-icons/FontAwesome';
class FinderScreen extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    headerTitle: 'Cocktails search',
    headerLeft: () => (
      <TouchableOpacity
        style={{color: 'white', paddingLeft: 10}}
        onPress={() => navigation.navigate({routeName: 'Home'})}>
        <Icon name="arrow-left" size={30} color="white" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        style={{color: 'white', paddingRight: 10}}
        onPress={() => navigation.navigate({routeName: 'Help'})}>
        <Icon name="question" size={30} color="white" />
      </TouchableOpacity>
    ),
    headerStyle: {backgroundColor: 'black'},
    headerTitleStyle: {
      color: 'white',
      textAlign: 'center',
      alignSelf: 'center',
    },
  });
  render() {
    const {cocktails, loading, error} = this.props;
    return (
      <View style={styles.view}>
        <DefaultTextInput
          placeholder="Escribe para buscar"
          handleOnChangeText={text => this.getData(text)}
        />
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={loading} />
        <DefaultFlatList data={cocktails} error={error ? true : false} />
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
