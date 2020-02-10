import React, {Component} from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/HomeBackground.png')}>
        <StatusBar backgroundColor="black" />
        <View style={styles.view}>
          <Text style={styles.title}>Cocktail Finder</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate({routeName: 'Finder'});
            }}>
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
