import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    margin: 5,
    width: (Dimensions.get('window').width - 30),
    padding: 15,
  },
  text: {
    color: 'black',
    fontSize: 17,
  }
});
