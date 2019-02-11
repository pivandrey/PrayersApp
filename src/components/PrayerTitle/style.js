import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  input: {
    width: (Dimensions.get('window').width),
    backgroundColor: '#BFB393',
    minHeight: 50,
    paddingLeft: 15,
    paddingRight: 15,
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  }
});
