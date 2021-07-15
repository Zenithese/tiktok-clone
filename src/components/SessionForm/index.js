import React, { useState } from 'react';
import styles from './styles';
import { Input } from 'react-native-elements';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SessionForm = ({ formType }) => {

    const navigation = useNavigation();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Input
                containerStyle={{ paddingHorizontal: 0 }}
                style={styles.input}
                numberOfLines={1}
                placeholder={'Username'}
                placeholderTextColor="#666"
                onChangeText={(text) => setUsername(text)}
            />
            {
                formType === 'Signup' && 
                    <Input
                        containerStyle={{ paddingHorizontal: 0 }}
                        style={styles.input}
                        numberOfLines={1}
                        placeholder={'Email'}
                        placeholderTextColor="#666"
                        onChangeText={(text) => setEmail(text)}
                    />
            }
            <Input
                containerStyle={{ paddingHorizontal: 0 }}
                style={styles.input}
                numberOfLines={1}
                placeholder={'Password'}
                placeholderTextColor="#666"
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('Login')}>
                <Text style={styles.buttonText}>{formType}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.switchFormContainer} onPress={() => navigation.navigate(formType === 'Login' ? 'Signup' : 'Login')}>
                <Text style={styles.switchForm}>{formType === 'Login' ? 'Signup instead' : 'Login instead'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SessionForm;