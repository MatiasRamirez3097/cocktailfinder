import React, {Component} from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeBackground} from '../../assets';
class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground style={styles.imageBackground} source={HomeBackground}>
        <StatusBar backgroundColor="black" />
        <View style={styles.view}>
          <Text style={styles.title}>Cocktail Finder</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate({routeName: 'Finder'})}>
            <Text style={styles.text}>
              <Icon name="search" size={20} />
              Ir al Buscador
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default HomeScreen;
