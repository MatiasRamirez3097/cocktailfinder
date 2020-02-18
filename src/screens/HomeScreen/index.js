//REACT
import React, {Component} from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';

//STYLE
import styles from './style';
import {HomeBackground} from '../../assets';

//COMPONENTS
import {DefaultButton} from '../../components';
class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground style={styles.imageBackground} source={HomeBackground}>
        <StatusBar backgroundColor="black" />
        <View style={styles.view}>
          <Text style={styles.title}>Cocktail Finder</Text>
          <DefaultButton
            iconSize={20}
            iconName="search"
            text="Ir al Buscador"
            onPress={() => navigation.navigate({routeName: 'Finder'})}
          />
        </View>
      </ImageBackground>
    );
  }
}
export default HomeScreen;
