import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTopStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
  },
  textCenterStyle: {
    marginBottom:20,
    textAlign:'center',
    fontWeight:'bold', 
    fontSize: 25,
  },
  textBottomStyle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey'
  },
  buttonStyle:{
    alignItems: 'center',
    backgroundColor: '#FFBCBC',
    height: 40,
    marginTop: 10,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#fff',
    fontWeight:'bold', 
  },
});

export { styles }
