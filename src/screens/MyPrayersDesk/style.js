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
  topBar: {
    display: 'flex',
    flexDirection: 'row',
  },
  topBarBtn: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 5,
  },
  topBarBtnActive: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#72A8BC',
    paddingBottom: 5,
  },
  topBarBtnTextActive: {
    color: '#72A8BC',
    fontSize: 13,
  },
  topBarBtnText: {
    color: '#C8C8C8',
    fontSize: 13,
  },
});
