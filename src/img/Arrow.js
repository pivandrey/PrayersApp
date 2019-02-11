import React from 'react';
import { Image } from 'react-native';

export default class Arrow extends React.Component {
  render() {
    return(
      <Image
        source={require('./arrow.png')}
      />
    )
  }
};