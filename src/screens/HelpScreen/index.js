import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Header from '../../components/header';
class HelpScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.view}>
        <Header
          buttonLeft="arrow-left"
          urlLeft={() => navigation.navigate({routeName: 'Finder'})}
          title="Ayuda"
        />
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
