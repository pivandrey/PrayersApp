import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    borderRightWidth: 1,
    borderRightColor: '#E5E5E5',
    display: 'flex',
    alignItems: 'flex-start',
    flex: 1,
    height: 108,
    padding: 15,
  },
  date: {
    color: '#BFB393',
    fontSize: 22,
  },
  text: {
    color: '#514D47',
    fontSize: 13,
  },
  optional: {
    color: '#72A8BC',
    fontSize: 13,
  },
  number: {
    color: '#BFB393',
    fontSize: 32,
    marginTop: 8,
  }
});
