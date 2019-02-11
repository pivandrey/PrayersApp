import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

class AddNewPrayer extends React.Component {
  
  state = {
    text: '',
  };

  handleClickSubmit = () => {
    const value = this.state.text;
    if (value) {
      this.props.handleSubmit(value);
      this.setState({
        text: '',
      })
    };
  };

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={this.handleClickSubmit}
        ><Text style={styles.submitBtnContent}>+</Text></TouchableOpacity>
        <TextInput
          placeholder="Add a prayer..."
          onChangeText={(text) => this.setState({text: text})}
          style={styles.input}
          defaultValue={this.state.text}
        />
      </View>
    )
  }
};

AddNewPrayer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddNewPrayer;