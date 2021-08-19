import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height - 79]

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
        position: 'absolute',
        top: StatusBar.currentHeight,
        left: 0,
        right: 0,
        bottom: 0,
    }
});

export default styles;