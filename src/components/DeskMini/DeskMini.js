import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

class DeskMini extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    )
  }
};

DeskMini.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DeskMini;