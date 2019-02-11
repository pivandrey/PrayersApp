import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

class ShowAnsweredPrayersBtn extends React.Component {

  handleClickChange = () => {
    const prayerId = this.props.data.id;
    this.props.handleCheck(prayerId);
  };

  render() {
    return(
      <View style={styles.flagAnsweredContainer}>
        <TouchableOpacity
          onPress={this.props.flagAnsweredPrayers}
          style={styles.flagAnsweredBtn}
        ><Text style={styles.flagAnsweredText}>
          {this.props.flagShow ? 'Hide Answered Prayers' : 'Show Answered Prayers'}
        </Text>
        </TouchableOpacity>
      </View>
    )
  }
};

ShowAnsweredPrayersBtn.propTypes = {
  flagAnsweredPrayers: PropTypes.func.isRequired,
  flagShow: PropTypes.bool.isRequired,
}

export default ShowAnsweredPrayersBtn;