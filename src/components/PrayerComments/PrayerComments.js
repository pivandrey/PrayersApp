import React from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';
import NewComment from '../../img/NewComment';
import Comment from '../Comment';

class PrayerComments extends React.Component {

  _keyExtractor = (item, index) => item.id;

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
        <View style={styles.textContainer}>
          <Text style={styles.membersText}>Comments</Text>
        </View>
        <View style={styles.commentsList}>
          {this.props.data.length > 0 ?
            <FlatList
              data={this.props.data}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => 
                <Comment 
                  data={item} 
                />
              }
            /> : <Text style={styles.warningText}>No comments</Text>
          }
        </View>
        <View style={styles.addComment}>
          <TouchableOpacity
            onPress={this.handleClickSubmit}
          ><NewComment /></TouchableOpacity>
          <TextInput
            placeholder="Add a comment..."
            onChangeText={(text) => this.setState({text: text})}
            style={styles.input}
            defaultValue={this.state.text}
          />
        </View>
      </View>
    )
  }
};

PrayerComments.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default PrayerComments;