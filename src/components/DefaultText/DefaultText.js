import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
class DefaultText extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,,
  };
  render = () => {
    const {value} = this.props;
    return  (
      <View>
        <Text style={{color: 'white'}}>{value}</Text>
      </View>
    );;
  };
}
export default DefaultText;

