import React from 'react';
import { Image } from 'react-native';

export default class NewComment extends React.Component {
  render() {
    return(
      <Image
        source={require('./newComment.png')}
      />
    )
  }
};