import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addDesk } from '../../actions/deskActions';

import styles from './style';

class ModalAdd extends React.Component {

  state = {
    text: '',
  }

  handleClickSubmit = () => {
    const value = this.state.text;
    if (value) {
      this.props.addDesk({ title: value });
      this.props.navigation.goBack();
    } else {
      alert('Enter title')
    }
  };
  
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Add new Desk</Text>
        <TextInput
          placeholder="Enter name for desk"
          onChangeText={(text) => this.setState({text: text})}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={this.handleClickSubmit}
          style={styles.btn}
        ><Text style={styles.btnText}>Add Desk</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const mapStateToProps = store => {
  return {
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addDesk,
  },
  dispatch
);

export default (connect(
  mapStateToProps,
  mapDispatchToProps, 
)(ModalAdd));