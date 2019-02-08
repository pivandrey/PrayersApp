import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width - 30),
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 16,
    marginBottom: 20,
  },
});
