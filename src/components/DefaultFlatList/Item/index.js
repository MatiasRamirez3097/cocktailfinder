import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';
class Item extends Component {
  render() {
    const {image, title} = this.props;
    return (
      <View style={styles.view}>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }
}
Item.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Item;
