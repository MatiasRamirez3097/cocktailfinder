import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
class HelpScreen extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>
          Para utilizar esta aplicación tiene que hacer solamente algo tan
          simple como escribir en el cuadro de texto de la pantalla anterior,
          teniendo en cuenta que solo eomenzara a buscar a partir de los 3
          caracteres.
        </Text>
      </View>
    );
  }
}
export default HelpScreen;
