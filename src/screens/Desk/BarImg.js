import React from 'react';
import { Image } from 'react-native';

export default class BarImg extends React.Component {
  render() {
    return(
      <Image
        source={require('./../../img/stroke.png')}
      />
    )
  }
}