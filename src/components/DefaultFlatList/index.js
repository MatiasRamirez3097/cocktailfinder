import React, {Component} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {View} from 'react-native';
import Item from './Item';
import styles from './style';
import PropTypes from 'prop-types';
class DefaultFlatList extends Component {
  render() {
    const {data} = this.props;
    return (
      <View style={styles.view}>
        <FlatList
          style={styles.flatList}
          data={data}
          renderItem={({item}) => (
            <Item title={item.strDrink} image={item.strDrinkThumb} />
          )}
          keyExtractor={item => item.idDrink}
        />
      </View>
    );
  }
}
DefaultFlatList.propTypes = {
  data: PropTypes.array.isRequired,
};
export default DefaultFlatList;
