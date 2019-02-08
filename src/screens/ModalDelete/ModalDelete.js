import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteDesk } from '../../actions/deskActions';

import styles from './style'

class ModalDelete extends React.Component {

  handleClickSubmit = () => {
    const id = this.props.navigation.getParam('id');
    this.props.deleteDesk(id);
    this.props.navigation.navigate('Dashboard');
  };
  
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Delete Desk</Text>
        <TouchableOpacity
          onPress={this.handleClickSubmit}
          style={styles.btn}
        ><Text style={styles.btnText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const mapStateToProps = store => {
  return {
    desks: store.desks.desks,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    deleteDesk,
  },
  dispatch
);

export default (connect(
  mapStateToProps,
  mapDispatchToProps, 
)(ModalDelete));