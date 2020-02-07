import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from './FinderScreenStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DefaultText from '../../components/DefaultText/DefaultText';
import {connect} from 'react-redux';
import DefaultTextInput from '../../components/DefaultTextInput/DefaultTextInput';
import {bindActionCreators} from 'redux';
import {getCocktails} from '../../store/actions/CocktailActions';
//import {fetchData} from '../../store/actions/CocktailActions';
/*const FinderScreen = props => {
  return (
    <View style={styles.view}>
      <DefaultText value="asd" />
      <DefaultTextInput style={styles.textInput} placeholder="Ej: Vodka" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate({routeName: 'Home'});
        }}>
        <Text>Ir al inicio</Text>
      </TouchableOpacity>
    </View>
  );
};*/
class FinderScreen extends Component {
  componentDidMount() {
    const {getCocktailsConnected} = this.props;
  }
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
    console.log(text);
    const {getCocktailsConnected} = this.props;
    await getCocktailsConnected();
  };
}

const mapStateToProps = state => ({
  cocktails: state.cocktails,
});
const mapDispatchToProps = (dispatch, text) => {
  //return bindActionCreators(
  return {
    getCocktailsConnected: dispatch(getCocktails(text)),
  };
  //);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinderScreen);

/*
import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from './FinderScreenStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DefaultText from '../../components/DefaultText/DefaultText';
import {connect} from 'react-redux';
import DefaultTextInput from '../../components/DefaultTextInput/DefaultTextInput';
import {bindActionCreators} from 'redux';
import {getCocktails} from '../../store/actions/CocktailActions';
//import {fetchData} from '../../store/actions/CocktailActions';
/*const FinderScreen = props => {
  return (
    <View style={styles.view}>
      <DefaultText value="asd" />
      <DefaultTextInput handleOnChangeText={text => this.getData(text)} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate({routeName: 'Home'});
        }}>
        <Text>Ir al inicio</Text>
      </TouchableOpacity>
    </View>
  );
};
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
    console.log(text);
    const {getCocktailsConnected} = this.props;
    await getCocktailsConnected();
  };
}

const mapStateToProps = ({cocktailsReducer}) => ({
  cocktails: cocktailsReducer.cocktails,
});
const mapDispatchToProps = (dispatch, text) => {
  return bindActionCreators({getCocktailsConnected: getCocktails}, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinderScreen);
*/
