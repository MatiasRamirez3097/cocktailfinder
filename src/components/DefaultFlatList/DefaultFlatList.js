import React, {Component} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import Item from './Item';
import styles from './style';
class DefaultFlatList extends Component {
  render() {
    if (this.props.data != undefined) {
      if (this.props.data.length > 0) {
        return (
          <View>
            <FlatList
              style={styles.flatList}
              data={this.props.data}
              renderItem={({item}) => (
                <Item title={item.strDrink} image={item.strDrinkThumb} />
              )}
              keyExtractor={item => item.idDrink}
            />
          </View>
        );
      }
    } else {
      /*return (
        <View>
          <Text style={styles.text}>
            Presione en el cuadro de busqueda y escriba para comenzaar
          </Text>
        </View>
      );*/
      return (
        <View style={styles.viewEmpty}>
          <Item title="No se encontraron resultados" />
        </View>
      );
    }
  }
}
export default DefaultFlatList;
