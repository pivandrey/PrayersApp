import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    width: (Dimensions.get('window').width - 30),
    marginTop: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  submitBtnContent: {
    fontSize: 30,
    color: '#72A8BC',
    marginLeft: 8,
    marginTop: -4,
    marginRight: 6,
  },
  input: {
    width: (Dimensions.get('window').width - 80)
  }
});
