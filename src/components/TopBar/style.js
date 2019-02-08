import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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
    display: 'flex',
    flexDirection: 'row',
  },
  topBarBtnActive: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#72A8BC',
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  topBarBtnTextActive: {
    color: '#72A8BC',
    fontSize: 13,
  },
  topBarBtnText: {
    color: '#C8C8C8',
    fontSize: 13,
  },
  countSubscribeContainer: {
    width: 16,
    height: 16,
    backgroundColor: '#AC5253',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  countSubscribe: {
    color: 'white',
    fontSize: 9,
    fontWeight: 'bold',
  }
});
