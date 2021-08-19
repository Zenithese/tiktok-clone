import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  list: {
    width: '100%',
    height: Dimensions.get('window').height,
    // paddingTop: StatusBar.currentHeight
  }
});

export default styles;