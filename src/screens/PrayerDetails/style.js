import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  desksBlock: {
    flex: 1,
    marginTop: 10,
  },
  btnAdd: {
    marginRight: 10,
  },
  btnAddText: {
    color: '#72A8BC',
    fontSize: 34,
  },
  back: {
    color: 'white',
    fontSize: 20,
  },
  btnback: {
    marginLeft: 10,
  },
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
