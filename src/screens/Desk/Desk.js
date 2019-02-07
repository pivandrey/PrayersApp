import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BarImg from './BarImg'

import styles from './style';

class Desk extends React.Component {
  static navigationOptions = ({ navigation} ) => {
    const item = navigation.getParam('item').title;
    return {
      title: item,
      headerRight: (
        <TouchableOpacity
          style={styles.btnAdd}
        ><BarImg /></TouchableOpacity>
      ),
      headerLeft: null,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>this is desk</Text>
      </View>
    );
  };
};

const mapStateToProps = store => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {

  },
  dispatch
);

export default (connect(
  mapStateToProps,
  mapDispatchToProps, 
)(Desk));;