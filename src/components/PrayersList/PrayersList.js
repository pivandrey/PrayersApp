import React from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import PrayerMini from '../PrayerMini';

import styles from './style';

class PrayersList extends React.Component {
  
  handleClickSubmit = () => {
    const value = this.state.text;
    if (value) {
      this.props.handleSubmit(value);
      this.setState({
        text: '',
      })
    };
  };

  handlePressPrayer = (values) => {
    this.props.handlePressPrayer(values)
  };

  _keyExtractor = (item, index) => item.id;

  render() {
    return(
      <View style={styles.container}>
        {this.props.data.length > 0 ?
          <FlatList
            data={this.props.data}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) => 
              <TouchableOpacity
                onPress={() => this.handlePressPrayer(item)}
              >
                <PrayerMini 
                  data={item} 
                  handleCheck={this.props.handleCheck} 
                />
              </TouchableOpacity>
            }
          /> : <Text style={styles.warningText}>In this desk no Prayers. Add new Prayer</Text>
        }
      </View>
    )
  };
};

PrayersList.propTypes = {
  data: PropTypes.array.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handlePressPrayer: PropTypes.func.isRequired, 
}

export default PrayersList;