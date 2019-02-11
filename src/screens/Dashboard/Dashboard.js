import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { addDesk, openDesk, loadAllDataFromStorage } from '../../actions/deskActions';
import styles from './style';

import DeskMini from '../../components/DeskMini';

class Dashboard extends React.Component {
  static navigationOptions = ({ navigation} ) => {
    return {
      title: 'My Desk',
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('ModalAdd')}
          style={styles.btnAdd}
        ><Text style ={styles.btnAddText}>+</Text></TouchableOpacity>
      )
    }
  };

  _keyExtractor = (item, index) => item.id;

  openDesk = (desk) => {
    this.props.navigation.navigate('MyPrayers', {item: desk,});
    this.props.openDesk(desk.id);
  };

  componentDidMount = () => {
    this.props.loadAllDataFromStorage()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text 
          style={this.props.desks.length === 0 ? styles.noDesks : styles.noDesksInvisible}
        >No desks</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ModalAdd')}
          style={this.props.desks.length === 0 ? styles.noDesks : styles.noDesksInvisible}
        ><Text style ={styles.noDesksAddNew}>Add new desk</Text></TouchableOpacity>
        <View style={styles.desksBlock}>
        <FlatList
          data={this.props.desks}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => 
            <TouchableOpacity
              onPress={() => this.openDesk(item)}
            ><DeskMini title={item.title}/></TouchableOpacity>
          }
        />
        </View>
      </View>
    );
  };
};

Dashboard.propTypes = {
  desks: PropTypes.array.isRequired,
}

const mapStateToProps = store => {
  return {
    desks: store.desks.desks,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addDesk,
    openDesk,
    loadAllDataFromStorage,
  },
  dispatch
);

export default (connect(
  mapStateToProps,
  mapDispatchToProps, 
)(Dashboard));