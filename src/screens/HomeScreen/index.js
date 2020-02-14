import React, {Component} from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';
import styles from './style';
import {HomeBackground} from '../../assets';
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
            iconName="search"
            text="Ir al Buscador"
            navigation={navigation}
            url="Finder"
          />
        </View>
      </ImageBackground>
    );
  }
}
export default HomeScreen;
