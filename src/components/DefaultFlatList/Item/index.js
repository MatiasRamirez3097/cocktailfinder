import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';
class Item extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Image style={styles.image} source={{uri: this.props.image}} />
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}
export default Item;
