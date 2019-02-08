import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: (Dimensions.get('window').width - 30),
    borderRadius: 10,
  },
  warningText: {
    textAlign: 'center',
    fontSize: 16,
  }
});
