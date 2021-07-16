import React, { useState } from 'react';
import styles from './styles';
import { Input } from 'react-native-elements';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = () => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
    };
};

const SessionForm = ({ formType, signup, login }) => {

    const navigation = useNavigation();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        const user = {
            username,
            password
        };
        if (formType === 'Signup') {
            signup(user);
        } else {
            login(user);
        };
    };

    return (
        <View style={styles.container}>
            <Input
                containerStyle={{ paddingHorizontal: 0 }}
                style={styles.input}
                numberOfLines={1}
                placeholder={'Username'}
                placeholderTextColor="#666"
                onChangeText={(text) => setUsername(text)}
                autoCapitalize='none'
            />
            <Input
                containerStyle={{ paddingHorizontal: 0 }}
                style={styles.input}
                numberOfLines={1}
                placeholder={'Password'}
                placeholderTextColor="#666"
                onChangeText={(text) => setPassword(text)}
                autoCapitalize='none'
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>{formType}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.switchFormContainer} onPress={() => navigation.navigate(formType === 'Login' ? 'Signup' : 'Login')}>
                <Text style={styles.switchForm}>{formType === 'Login' ? 'Signup instead' : 'Login instead'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);