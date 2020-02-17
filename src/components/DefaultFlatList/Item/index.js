import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';
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
export default Item;
