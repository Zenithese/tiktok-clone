import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height - 79]

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight
    },
});

export default styles;