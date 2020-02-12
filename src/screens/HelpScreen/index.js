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
          Para utilizar esta aplicación sólo debe escribir en el cuadro de texto
          para buscar.
        </Text>
        <Text style={styles.text}>
          (recién a partir de los 3 primeros caractéres iniciará la búsqueda)
        </Text>
      </View>
    );
  }
}
export default HelpScreen;
