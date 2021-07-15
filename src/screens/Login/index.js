import React from 'react';
import styles from './styles';
import { SafeAreaView } from 'react-native';
import SessionForm from '../../components/SessionForm/index';

export default function Login() {

    return (
        <SafeAreaView>
            <SessionForm formType={'Login'}/>
        </SafeAreaView>
    )
}