import React from 'react';
import { Image } from 'react-native';

export default class StrokeImg extends React.Component {
  render() {
    return(
      <Image
        source={require('./stroke.png')}
      />
    )
  }
}