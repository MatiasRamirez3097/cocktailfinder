import React, {Component} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import Item from './Item';
import styles from './style';
class DefaultFlatList extends Component {
  render() {
    return (
      <FlatList
        style={styles.flatList}
        data={this.props.data}
        renderItem={({item}) => (
          <Item title={item.strDrink} image={item.strDrinkThumb} />
        )}
        keyExtractor={item => item.idDrink}
      />
    );
  }
}
export default DefaultFlatList;
