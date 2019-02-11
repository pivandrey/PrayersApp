import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

class PrayerTitle extends React.Component {

  state = {
    text: '',
  }

  render() {
    return(
      <View>
        <TextInput
          onChangeText={(text) => this.setState({text: text})}
          multiline={true}
          style={styles.input}
          defaultValue={this.props.title}
          onBlur={() => this.props.changeTitle(this.state.text)}
        />
      </View>
    )
  }
};

PrayerTitle.propTypes = {

}

export default PrayerTitle;