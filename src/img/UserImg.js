import React from 'react';
import { Image } from 'react-native';

export default class UserImg extends React.Component {
  render() {
    return(
      <Image
        source={require('./user.png')}
      />
    )
  }
}